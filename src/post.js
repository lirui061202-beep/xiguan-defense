// 后期管线：MSAA 场景 → GTAO → 体积光束 → 动态模糊 → 持枪叠加层 → Bloom → 色调映射 → 调色/暗角/颗粒
// 另含：PCSS 软阴影（改写阴影着色器片段）、积水用的平面反射
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { CopyShader } from 'three/addons/shaders/CopyShader.js';

// ---------- PCSS：影子离遮挡物越远越虚 ----------
export function installSoftShadows() {
  const pcss = `
  const vec2 PD[16] = vec2[16]( vec2(-0.94201624,-0.39906216), vec2(0.94558609,-0.76890725), vec2(-0.094184101,-0.92938870), vec2(0.34495938,0.29387760),
    vec2(-0.91588581,0.45771432), vec2(-0.81544232,-0.87912464), vec2(-0.38277543,0.27676845), vec2(0.97484398,0.75648379),
    vec2(0.44323325,-0.97511554), vec2(0.53742981,-0.47373420), vec2(-0.26496911,-0.41893023), vec2(0.79197514,0.19090188),
    vec2(-0.24188840,0.99706507), vec2(-0.81409955,0.91437590), vec2(0.19984126,0.78641367), vec2(0.14383161,-0.14100790) );
  float pcssRand( vec2 co ) { return fract( sin( dot( co, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 ); }
  float PCSS( sampler2D sm, vec3 c ) {
    float ang = pcssRand( gl_FragCoord.xy ) * 6.2831853, sa = sin( ang ), ca = cos( ang ); mat2 R = mat2( ca, sa, -sa, ca );
    float zR = c.z, sum = 0.0, n = 0.0;
    for ( int i = 0; i < 16; i ++ ) { float d = unpackRGBAToDepth( texture2D( sm, c.xy + R * PD[ i ] * 0.0042 ) ); if ( d < zR ) { sum += d; n += 1.0; } }
    if ( n < 0.5 ) return 1.0;
    float pen = clamp( ( zR - sum / n ) * 0.075, 0.0004, 0.0065 ), s = 0.0;
    for ( int i = 0; i < 16; i ++ ) s += step( zR, unpackRGBAToDepth( texture2D( sm, c.xy + R * PD[ i ] * pen ) ) );
    return s / 16.0;
  }
  `;
  let c = THREE.ShaderChunk.shadowmap_pars_fragment;
  c = c.replace('#ifdef USE_SHADOWMAP', '#ifdef USE_SHADOWMAP\n' + pcss);
  c = c.replace('if ( frustumTest ) {', 'if ( frustumTest ) {\n\t\t\treturn PCSS( shadowMap, shadowCoord.xyz );');
  THREE.ShaderChunk.shadowmap_pars_fragment = c;
}

class ScenePass extends Pass {
  constructor(scene, camera, samples) {
    super(); this.scene = scene; this.camera = camera; this.needsSwap = false;
    this.rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples });
    this.fsq = new FullScreenQuad(new THREE.ShaderMaterial({ uniforms: THREE.UniformsUtils.clone(CopyShader.uniforms), vertexShader: CopyShader.vertexShader, fragmentShader: CopyShader.fragmentShader, depthTest: false, depthWrite: false }));
  }
  setSize(w, h) { this.rt.setSize(w, h); }
  render(renderer, writeBuffer, readBuffer) {
    renderer.shadowMap.needsUpdate = true; // 阴影图每帧只在主场景这一遍更新
    renderer.setRenderTarget(this.rt); renderer.clear(); renderer.render(this.scene, this.camera);
    this.fsq.material.uniforms.tDiffuse.value = this.rt.texture;
    renderer.setRenderTarget(readBuffer); this.fsq.render(renderer);
  }
}

// 把另一个场景（持枪画面）叠到当前画面上：不受体积雾和动态模糊影响
class OverlayPass extends Pass {
  constructor(scene, camera) { super(); this.scene = scene; this.camera = camera; this.needsSwap = false; }
  render(renderer, writeBuffer, readBuffer) {
    const ac = renderer.autoClear; renderer.autoClear = false;
    renderer.setRenderTarget(readBuffer); renderer.render(this.scene, this.camera);
    renderer.autoClear = ac;
  }
}

// ---------- 体积光束：沿视线步进，逐点查太阳阴影图 ----------
const VolShader = {
  uniforms: {
    tDepth: { value: null }, tShadow: { value: null }, shadowMatrix: { value: new THREE.Matrix4() }, projInv: { value: new THREE.Matrix4() }, camWorld: { value: new THREE.Matrix4() },
    camPos: { value: new THREE.Vector3() }, sunDir: { value: new THREE.Vector3() }, sunCol: { value: new THREE.Color(1, 0.72, 0.42) }, time: { value: 0 }, strength: { value: 0.8 }, maxDist: { value: 75 },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D tDepth, tShadow; uniform mat4 shadowMatrix, projInv, camWorld; uniform vec3 camPos, sunDir, sunCol; uniform float time, strength, maxDist; varying vec2 vUv;
    float unpackD(vec4 v){ return dot(v, vec4(1./16777216., 1./65536., 1./256., 1.)*(255./256.)); }
    float ign(vec2 p){ return fract(52.9829189*fract(dot(p, vec2(0.06711056,0.00583715)))); }
    float hg(float c, float g){ float g2=g*g; return (1.-g2)/pow(1.+g2-2.*g*c, 1.5); }
    void main(){
      float d=texture2D(tDepth,vUv).x;
      vec4 v=projInv*vec4(vUv*2.-1., d*2.-1., 1.); v/=v.w; vec3 wp=(camWorld*v).xyz;
      vec3 rd=wp-camPos; float dist=length(rd); rd/=dist; float tMax=min(dist, maxDist);
      const int N=28; float j=ign(gl_FragCoord.xy+fract(time)*37.), acc=0.;
      for(int i=0;i<N;i++){
        float t=(float(i)+j)/float(N); t=t*t*tMax; // 近处采样更密：眼前的光柱最清楚
        vec3 p=camPos+rd*t; vec4 sc=shadowMatrix*vec4(p,1.); sc.xyz/=sc.w;
        float lit=1.;
        if(sc.x>0.&&sc.x<1.&&sc.y>0.&&sc.y<1.&&sc.z<1.) lit=step(sc.z-0.0015, unpackD(texture2D(tShadow,sc.xy)));
        float w=(2.*(float(i)+.5)/float(N))*exp(-max(p.y,0.)*0.045)*exp(-t*0.012);
        acc+=lit*w;
      }
      acc/=float(N);
      float c=dot(rd,sunDir); float ph=min(mix(hg(c,.18), hg(c,.66), .42)*.5, 1.5);
      float amt=1.-exp(-tMax*0.022);
      gl_FragColor=vec4(sunCol*acc*ph*amt*strength, 1.);
    }`,
};
const VolComposite = {
  uniforms: { tDiffuse: { value: null }, tVol: { value: null }, px: { value: new THREE.Vector2(1, 1) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D tDiffuse, tVol; uniform vec2 px; varying vec2 vUv;
    void main(){ vec3 v=vec3(0.); float w=0.;
      for(int x=-2;x<=2;x++) for(int y=-2;y<=2;y++){ float k=exp(-float(x*x+y*y)*.28); v+=texture2D(tVol,vUv+vec2(float(x),float(y))*px*1.5).rgb*k; w+=k; }
      gl_FragColor=vec4(texture2D(tDiffuse,vUv).rgb+v/w,1.); }`,
};
class VolumetricPass extends Pass {
  constructor(camera, sun, getDepth) {
    super(); this.camera = camera; this.sun = sun; this.getDepth = getDepth;
    this.rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType });
    this.mat = new THREE.ShaderMaterial({ ...VolShader, uniforms: THREE.UniformsUtils.clone(VolShader.uniforms), depthTest: false, depthWrite: false });
    this.comp = new THREE.ShaderMaterial({ ...VolComposite, uniforms: THREE.UniformsUtils.clone(VolComposite.uniforms), depthTest: false, depthWrite: false });
    this.fsq = new FullScreenQuad(this.mat);
  }
  setSize(w, h) { this.rt.setSize(Math.max(2, w >> 1), Math.max(2, h >> 1)); this.comp.uniforms.px.value.set(2 / w, 2 / h); }
  render(renderer, writeBuffer, readBuffer) {
    const u = this.mat.uniforms, sm = this.sun.shadow.map, dt = this.getDepth();
    if (!sm || !dt) { this.fsq.material = this.comp; this.comp.uniforms.tDiffuse.value = readBuffer.texture; this.comp.uniforms.tVol.value = null; }
    u.tDepth.value = dt; u.tShadow.value = sm ? sm.texture : null; u.shadowMatrix.value.copy(this.sun.shadow.matrix);
    u.projInv.value.copy(this.camera.projectionMatrixInverse); u.camWorld.value.copy(this.camera.matrixWorld); this.camera.getWorldPosition(u.camPos.value);
    if (sm && dt) { this.fsq.material = this.mat; renderer.setRenderTarget(this.rt); this.fsq.render(renderer); }
    this.fsq.material = this.comp; this.comp.uniforms.tDiffuse.value = readBuffer.texture; this.comp.uniforms.tVol.value = sm && dt ? this.rt.texture : null;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer); this.fsq.render(renderer);
  }
}

const RayShader = {
  uniforms: { tDiffuse: { value: null }, sunPos: { value: new THREE.Vector2(0.5, 0.5) }, strength: { value: 0 }, time: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 sunPos; uniform float strength, time; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233))+time)*43758.5453); }
    void main(){
      vec4 base=texture2D(tDiffuse,vUv);
      if(strength<=0.001){ gl_FragColor=base; return; }
      const int N=24; vec2 stp=(sunPos-vUv)/float(N)*0.92; vec2 uv=vUv+stp*hash(vUv*913.); vec3 acc=vec3(0.); float w=1.;
      for(int i=0;i<N;i++){ uv+=stp; vec3 s=texture2D(tDiffuse,clamp(uv,0.001,0.999)).rgb; float l=max(s.r,max(s.g,s.b)); acc+=min(s,vec3(8.))*smoothstep(1.6,3.2,l)*w; w*=0.95; }
      gl_FragColor=vec4(base.rgb+acc/float(N)*strength,1.);
    }`,
};

const MotionShader = {
  uniforms: { tDiffuse: { value: null }, vel: { value: new THREE.Vector2(0, 0) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 vel; varying vec2 vUv;
    void main(){ vec3 c=vec3(0.); float w=0.; vec2 c0=vUv-.5; float edge=.35+dot(c0,c0)*2.6;
      for(int i=0;i<9;i++){ float t=float(i)/8.-.5; float k=1.-abs(t)*.8; c+=texture2D(tDiffuse,clamp(vUv+vel*t*edge,0.001,0.999)).rgb*k; w+=k; }
      gl_FragColor=vec4(c/w,1.); }`,
};

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, hurt: { value: 0 }, lowHp: { value: 0 }, res: { value: new THREE.Vector2(1, 1) }, sharp: { value: 0.35 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float time, hurt, lowHp, sharp; uniform vec2 res; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c=vUv-.5; float r2=dot(c,c);
      vec3 col; col.r=texture2D(tDiffuse,vUv+c*r2*0.010).r; col.g=texture2D(tDiffuse,vUv).g; col.b=texture2D(tDiffuse,vUv-c*r2*0.010).b;
      // 轻度锐化（反遮罩）
      vec2 px=1./res; vec3 bl=(texture2D(tDiffuse,vUv+vec2(px.x,0.)).rgb+texture2D(tDiffuse,vUv-vec2(px.x,0.)).rgb+texture2D(tDiffuse,vUv+vec2(0.,px.y)).rgb+texture2D(tDiffuse,vUv-vec2(0.,px.y)).rgb)*.25;
      col+=clamp(col-bl,-.08,.08)*sharp;
      float l=dot(col,vec3(.299,.587,.114));
      col=mix(vec3(l),col,0.86-lowHp*.5);
      col=clamp(col,0.,1.); col=col*col*(3.-2.*col)*.55+col*.45;
      col=(col-.5)*1.06+.5;
      col+=mix(vec3(-.012,.006,.02),vec3(.022,.01,-.018),smoothstep(.15,.85,l));
      col*=1.-smoothstep(.16,.95,r2*2.1)*.5;
      col=mix(col,vec3(.55,.0,.0)+col*.35,clamp(hurt,0.,1.)*smoothstep(.05,.5,r2*1.8));
      col+=(hash(vUv*res+fract(time)*61.)-.5)*.05;
      gl_FragColor=vec4(col,1.);
    }`,
};

// ---------- 平面反射（积水里映出楼和树） ----------
export function makeReflection(renderer, scene, camera) {
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType });
  const vcam = new THREE.PerspectiveCamera(), matrix = new THREE.Matrix4(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.03);
  const camPos = new THREE.Vector3(), rot = new THREE.Matrix4(), look = new THREE.Vector3(), up = new THREE.Vector3(), N = new THREE.Vector3(0, 1, 0);
  return {
    texture: rt.texture, matrix, enabled: true,
    setSize(w, h) { rt.setSize(Math.max(2, w >> 1), Math.max(2, h >> 1)); },
    render(hide = []) {
      if (!this.enabled) return;
      camPos.setFromMatrixPosition(camera.matrixWorld); if (camPos.y < 0.05) return;
      rot.extractRotation(camera.matrixWorld);
      look.set(0, 0, -1).applyMatrix4(rot).add(camPos); look.y = -look.y;      // 关于 y=0 镜像
      up.set(0, 1, 0).applyMatrix4(rot).reflect(N);
      vcam.position.set(camPos.x, -camPos.y, camPos.z); vcam.up.copy(up); vcam.lookAt(look);
      vcam.near = camera.near; vcam.far = camera.far; vcam.updateMatrixWorld(); vcam.projectionMatrix.copy(camera.projectionMatrix); vcam.projectionMatrixInverse.copy(camera.projectionMatrixInverse);
      matrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1).multiply(vcam.projectionMatrix).multiply(vcam.matrixWorldInverse);
      const vis = hide.map((o) => o.visible); hide.forEach((o) => { o.visible = false; });
      const cp = renderer.clippingPlanes, old = renderer.getRenderTarget();
      renderer.clippingPlanes = [plane];
      renderer.setRenderTarget(rt); renderer.clear(); renderer.render(scene, vcam);
      renderer.clippingPlanes = cp; renderer.setRenderTarget(old);
      hide.forEach((o, i) => { o.visible = vis[i]; });
    },
  };
}

export function makePost(renderer, scene, camera, sun, overlay, o = {}) {
  const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType }));
  const scenePass = new ScenePass(scene, camera, o.samples ?? 4);
  const gtao = new GTAOPass(scene, camera, 4, 4);
  gtao.updateGtaoMaterial({ radius: 0.55, distanceExponent: 1.4, thickness: 1.2, scale: 1.25, samples: 12 });
  gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
  gtao.blendIntensity = 1.0;
  // AO 的法线通道里隐藏透明物、叶片、点精灵
  gtao.overrideVisibility = function () {
    const cache = this._visibilityCache;
    this.scene.traverse((ob) => { cache.set(ob, ob.visible); if (ob.isPoints || ob.isLine || ob.isSprite || ob.userData.noAO || (ob.material && ob.material.transparent)) ob.visible = false; });
  };
  const vol = new VolumetricPass(camera, sun, () => (gtao.enabled ? gtao.depthTexture : null));
  const rays = new ShaderPass(RayShader);
  const motion = new ShaderPass(MotionShader);
  const over = new OverlayPass(overlay.scene, overlay.camera);
  const bloom = new UnrealBloomPass(new THREE.Vector2(4, 4), 0.5, 0.8, 1.05);
  const grade = new ShaderPass(GradeShader);
  for (const p of [scenePass, gtao, vol, rays, motion, over, bloom, new OutputPass(), grade]) composer.addPass(p);
  const v = new THREE.Vector3();
  return {
    composer, gtao, vol, rays, bloom, grade, over,
    setSize(w, h) { composer.setSize(w, h); grade.uniforms.res.value.set(w, h); },
    // 2 高：AO + 体积光束 + 动态模糊；1 中：屏幕空间光束 + 动态模糊；0 低（手机）：只留泛光和调色
    setQuality(q) { gtao.enabled = q >= 2; vol.enabled = q >= 2; rays.enabled = q === 1; motion.enabled = q >= 1; bloom.enabled = true; grade.uniforms.sharp.value = q >= 1 ? 0.35 : 0.0; },
    setMotion(vyaw, vpitch, cam, on) { const f = THREE.MathUtils.degToRad(cam.fov), sh = 0.011; const x = on ? THREE.MathUtils.clamp(vyaw * sh / (f * cam.aspect), -0.05, 0.05) : 0, y = on ? THREE.MathUtils.clamp(-vpitch * sh / f, -0.05, 0.05) : 0; motion.uniforms.vel.value.set(x, y); },
    update(t, sunDir) {
      grade.uniforms.time.value = t; rays.uniforms.time.value = t % 10; vol.mat.uniforms.time.value = t % 10; vol.mat.uniforms.sunDir.value.copy(sunDir);
      v.copy(sunDir).transformDirection(camera.matrixWorldInverse); const front = v.z < -0.05 ? 1 : 0;
      v.copy(camera.position).addScaledVector(sunDir, 1000).project(camera);
      const sx = v.x * 0.5 + 0.5, sy = v.y * 0.5 + 0.5, off = Math.max(Math.abs(sx - 0.5), Math.abs(sy - 0.5));
      rays.uniforms.sunPos.value.set(sx, sy);
      rays.uniforms.strength.value = front * THREE.MathUtils.clamp(1.7 - off * 1.7, 0, 1) * 0.7;
    },
    render() { composer.render(); },
  };
}
