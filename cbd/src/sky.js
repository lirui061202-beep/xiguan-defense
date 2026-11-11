// 手绘天空：一张 2:1 的云图，水平镜像铺满 360°，垂直只铺到仰角 EL_MAX；玻璃幕墙反射也采样同一张图
import * as THREE from 'three';

export const SUN_DIR = new THREE.Vector3(0.3, 0.82, 0.48).normalize(); // 太阳在南偏东的高处：商场临街的店面受光，塔楼影子落向北边、不盖广场
export const HAZE = new THREE.Color('#dde8f0');

// 所有材质共用的天空 uniform
export const SKY_U = {
  tSky: { value: null },
  uSun: { value: SUN_DIR },
  uHaze: { value: HAZE },
  uSkyRot: { value: 0.6 },
  uTime: { value: 0 },
};

export const SKY_GLSL = /* glsl */`
uniform sampler2D tSky; uniform vec3 uSun; uniform vec3 uHaze; uniform float uSkyRot; uniform float uTime;
float h11(float n){ return fract(sin(n*127.1)*43758.5453); }
float h12(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7)))*43758.5453); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h12(i), h12(i+vec2(1,0)), f.x), mix(h12(i+vec2(0,1)), h12(i+vec2(1,1)), f.x), f.y); }
vec3 skyPaint(vec3 d){
  float az = atan(d.z, d.x) + uSkyRot;
  float t = fract(az / 6.2831853);
  float u = 1.0 - abs(2.0*t - 1.0);
  float el = asin(clamp(d.y, -1.0, 1.0));
  float v = clamp(el / 1.08, 0.004, 0.996);
  vec3 c = texture2D(tSky, vec2(u, v), 1.6).rgb;   // 取稍模糊的一级：云的硬边变柔，更接近写实天空
  c = mix(vec3(dot(c, vec3(0.3, 0.55, 0.15))), c, 0.84);                 // 天空略降饱和
  c = mix(c, uHaze, smoothstep(0.34, 0.0, d.y) * 0.6);                    // 近地平线泛白
  c = mix(c, uHaze, smoothstep(0.10, -0.02, d.y) * 0.85);
  return c;
}
// 给玻璃/水面用的环境：天空 + 一圈远处楼群的剪影 + 地面
vec3 skyRefl(vec3 d){
  vec3 c = skyPaint(vec3(d.x, max(d.y, 0.0), d.z));
  float az = atan(d.z, d.x);
  float a1 = az * 22.0, a2 = az * 57.0;
  float hh = 0.03 + 0.20 * pow(h11(floor(a1)), 2.0) + 0.10 * pow(h11(floor(a2) + 9.0), 3.0);
  float b = smoothstep(hh + 0.006, hh - 0.006, d.y);
  vec3 bc = mix(vec3(0.42, 0.56, 0.74), vec3(0.72, 0.82, 0.92), h11(floor(a1) + 3.0));
  c = mix(c, bc, b * 0.9);
  vec3 g = mix(vec3(0.50, 0.58, 0.52), vec3(0.34, 0.42, 0.40), smoothstep(0.0, -0.5, d.y));
  c = mix(c, g, smoothstep(0.01, -0.03, d.y));
  return c;
}
`;

export function makeSky(tex) {
  tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping; tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter; tex.anisotropy = 8;
  SKY_U.tSky.value = tex;
  const mat = new THREE.ShaderMaterial({
    uniforms: SKY_U, side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false,
    vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0); gl_Position = p.xyww; }`,
    fragmentShader: SKY_GLSL + /* glsl */`
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        vec3 c = skyPaint(d);
        float s = max(dot(d, uSun), 0.0);
        c += vec3(1.0, 0.93, 0.80) * (pow(s, 900.0) * 14.0 + pow(s, 60.0) * 0.55 + pow(s, 8.0) * 0.16);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  const m = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), mat);
  m.frustumCulled = false; m.renderOrder = -1000;
  return m;
}
