// 后期：MSAA 场景 → 泛光 → 调色（柔肩曲线、提饱和、镜头光晕、轻暗角）并转 sRGB
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';

const Grade = {
  uniforms: { tDiffuse: { value: null }, uSun: { value: new THREE.Vector3(0.5, 0.5, 0) }, uAspect: { value: 1.6 }, uExposure: { value: 1.0 }, uSat: { value: 0.93 }, uTexel: { value: new THREE.Vector2(0.001, 0.001) } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform vec3 uSun; uniform float uAspect, uExposure, uSat; uniform vec2 uTexel; varying vec2 vUv;
    vec3 shoulder(vec3 c){ const float a = 0.72; vec3 x = max(c - a, 0.0) / (1.0 - a); return mix(c, a + (1.0 - a) * (1.0 - exp(-x)), step(a, c)); }
    void main(){
      vec3 c = texture2D(tDiffuse, vUv).rgb * uExposure;
      vec3 blur = (texture2D(tDiffuse, vUv + vec2(uTexel.x, 0.0)).rgb + texture2D(tDiffuse, vUv - vec2(uTexel.x, 0.0)).rgb + texture2D(tDiffuse, vUv + vec2(0.0, uTexel.y)).rgb + texture2D(tDiffuse, vUv - vec2(0.0, uTexel.y)).rgb) * 0.25 * uExposure;
      c = max(c + (c - blur) * 0.4, 0.0);
      // 镜头光晕：太阳在画面里且没被挡住时
      if (uSun.z > 0.001) {
        vec2 asp = vec2(uAspect, 1.0), d = (vUv - uSun.xy) * asp; float r = length(d);
        vec3 fl = vec3(1.0, 0.92, 0.78) * (0.045 / (r * r * 9.0 + 0.06));
        fl += vec3(1.0, 0.85, 0.7) * exp(-abs(d.y) * 70.0) * exp(-abs(d.x) * 2.2) * 0.22;
        float ang = atan(d.y, d.x); fl += vec3(1.0, 0.95, 0.85) * pow(abs(sin(ang * 3.0)), 24.0) * exp(-r * 3.2) * 0.22;
        vec2 ax = vec2(0.5) - uSun.xy;
        for (int i = 0; i < 4; i++) {
          float k = 0.45 + float(i) * 0.42, rad = 0.035 + 0.03 * float(i);
          float g = smoothstep(rad, rad * 0.55, length((vUv - (uSun.xy + ax * k * 2.0)) * asp));
          fl += g * 0.06 * mix(vec3(0.5, 0.8, 1.0), vec3(1.0, 0.6, 0.8), float(i) / 3.0);
        }
        c += fl * uSun.z;
      }
      c = shoulder(c);
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, uSat);
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.30);                         // 对比：暗部压下去
      c = mix(c, c * vec3(0.94, 0.98, 1.08), (1.0 - smoothstep(0.0, 0.45, l)) * 0.5);   // 暗部偏蓝
      vec2 q = vUv - 0.5; c *= 1.0 - dot(q, q) * 0.22;
      c = c * 0.965 + vec3(0.014, 0.018, 0.026);                          // 暗部略抬、带一点冷灰
      c = clamp(c, 0.0, 1.0);
      gl_FragColor = vec4(mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)), 1.0);
    }`,
};

export function makePost(renderer, scene, camera, { samples = 4, ao = true } = {}) {
  const sz = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(sz.x, sz.y, { type: THREE.HalfFloatType, samples });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  let gtao = null;
  if (ao) {   // 环境光遮蔽：墙根、檐下、物体接地处压暗，东西才“落地”
    gtao = new GTAOPass(scene, camera, sz.x, sz.y);
    gtao.updateGtaoMaterial({ radius: 1.6, distanceExponent: 1.2, thickness: 1.5, scale: 1.3, samples: 12 });
    gtao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
    gtao.blendIntensity = 0.9;
    gtao.overrideVisibility = function () { const cache = this._visibilityCache; this.scene.traverse((ob) => { cache.set(ob, ob.visible); if (ob.isPoints || ob.isLine || ob.isSprite || ob.userData.noAO || (ob.material && (ob.material.transparent || ob.material.name === 'foliage' || ob.material.isShaderMaterial))) ob.visible = false; }); };
    composer.addPass(gtao);
  }
  const bloom = new UnrealBloomPass(new THREE.Vector2(sz.x / 2, sz.y / 2), 0.4, 0.85, 0.86); composer.addPass(bloom);
  const grade = new ShaderPass(Grade); composer.addPass(grade);
  return {
    composer, bloom, grade, gtao,
    setSize(w, h, pr) { composer.setPixelRatio(pr); composer.setSize(w, h); grade.uniforms.uAspect.value = w / h; grade.uniforms.uTexel.value.set(1 / (w * pr), 1 / (h * pr)); },
    setSun(x, y, vis) { grade.uniforms.uSun.value.set(x, y, vis); },
    render() { composer.render(); },
  };
}
