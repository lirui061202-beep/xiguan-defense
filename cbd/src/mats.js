// 材质：玻璃幕墙、地面、水面、绒球树叶。全部挂在 three 自带的 Lambert / Toon 上，阴影和雾不用自己写
import * as THREE from 'three';
import { SKY_U, SKY_GLSL } from './sky.js';
import { L } from './layout.js';

const col = (c) => new THREE.Color(c);
const f = (n) => (Number.isInteger(n) ? n + '.0' : String(n));

const COMMON_FRAG = SKY_GLSL + /* glsl */`
varying vec2 vGUv; varying vec3 vGPos; varying vec3 vGNor;
vec3 S(vec3 c){ return pow(c, vec3(2.2)); }
float aa(float d){ float w = fwidth(d) * 0.75 + 1e-5; return smoothstep(w, -w, d); }
float band(float d, float h){ return aa(abs(d) - h); }
// 周期线条的面积滤波：远处不闪
float gline(float x, float w){
  float fw = max(fwidth(x), 1e-5); float a = x - 0.5*fw, b = x + 0.5*fw;
  float ia = floor(a)*w + min(fract(a), w), ib = floor(b)*w + min(fract(b), w);
  return clamp((ib - ia) / fw, 0.0, 1.0);
}
`;
const VERT_PARS = '#include <common>\nvarying vec2 vGUv; varying vec3 vGPos; varying vec3 vGNor;';
const VERT_MAIN = /* glsl */`#include <fog_vertex>
  { vec4 wp = vec4(transformed, 1.0); vec3 wn = objectNormal; vec2 guv = uv;
  #ifdef USE_INSTANCING
    vec3 sc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
    guv *= vec2(abs(normal.x) > 0.5 ? sc.z : sc.x, sc.y);
    wp = instanceMatrix * wp; wn = mat3(instanceMatrix) * wn;
  #endif
    wp = modelMatrix * wp; vGPos = wp.xyz; vGNor = normalize(mat3(modelMatrix) * wn); vGUv = guv; }`;

function hook(mat, uniforms, fragPars, fragMain, at = '#include <emissivemap_fragment>') {
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, SKY_U, uniforms);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', VERT_PARS).replace('#include <fog_vertex>', VERT_MAIN);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\n' + COMMON_FRAG + fragPars).replace(at, at + '\n' + fragMain);
  };
  mat.customProgramCacheKey = () => mat.name;
  return mat;
}

// ---------- 玻璃幕墙 ----------
export const STYLES = {
  blue:   { panel: [1.5, 4.2], mull: [0.07, 0.05], span: 0.0,  tint: '#14283a', frame: '#c9d0d6', refl: 0.30, fin: 0,   blinds: 0.10, mech: 20 },
  fins:   { panel: [1.8, 4.2], mull: [0.17, 0.03], span: 0.10, tint: '#16242e', frame: '#f0f0ec', refl: 0.28, fin: 0.9, blinds: 0.05, mech: 24 },
  band:   { panel: [1.6, 3.9], mull: [0.05, 0.0],  span: 0.42, tint: '#182a36', frame: '#e6e3da', refl: 0.28, fin: 0,   blinds: 0.12 },
  teal:   { panel: [1.5, 4.0], mull: [0.06, 0.05], span: 0.0,  tint: '#12302f', frame: '#b8c4c4', refl: 0.30, fin: 0,   blinds: 0.10, mech: 18 },
  silver: { panel: [1.4, 4.2], mull: [0.05, 0.04], span: 0.0,  tint: '#3c4c5a', frame: '#dfe4e8', refl: 0.42, fin: 0,   blinds: 0.06, mech: 22 },
  navy:   { panel: [1.6, 4.4], mull: [0.10, 0.03], span: 0.0,  tint: '#0f1a26', frame: '#cdb688', refl: 0.28, fin: 0.5, blinds: 0.08, mech: 20 },
  stone:  { panel: [3.0, 3.6], mull: [0.40, 0.34], span: 0.0,  tint: '#22384c', frame: '#e8e1d4', refl: 0.22, fin: 0.3, blinds: 0.10 },
  diag:   { panel: [1.6, 4.5], mull: [0.04, 0.07], span: 0.0,  tint: '#1f3d58', frame: '#dfe6ec', refl: 0.40, fin: 0,   blinds: 0.05 },
  shop:   { panel: [3.0, 5.5], mull: [0.04, 0.05], span: 0.0,  tint: '#2a4250', frame: '#3a4148', refl: 0.34, fin: 0,   blinds: 0.0,  warm: ['#ffd9a0', 0.55] },
  lobby:  { panel: [2.4, 9.0], mull: [0.05, 0.03], span: 0.0,  tint: '#22323e', frame: '#e3e6e9', refl: 0.30, fin: 0.3, blinds: 0.0,  warm: ['#ffe8c0', 0.22] },
};
// 手绘的幕墙细节贴图（8 格宽 × 3 层高一张），和程序画的窗格对齐后当作每块玻璃的明暗变化
export const DETAIL = { tCurtain: { value: null }, uCurtainAvg: { value: new THREE.Vector3(1, 1, 1) }, uHasCurtain: { value: 0 } };
export function setCurtain(tex) {
  const c = document.createElement('canvas'); c.width = c.height = 8; const g = c.getContext('2d'); g.drawImage(tex.image, 0, 0, 8, 8);
  const d = g.getImageData(0, 0, 8, 8).data, a = [0, 0, 0]; for (let i = 0; i < d.length; i += 4) for (let k = 0; k < 3; k++) a[k] += Math.pow(d[i + k] / 255, 2.2) / 64;
  DETAIL.tCurtain.value = tex; DETAIL.uCurtainAvg.value.set(a[0], a[1], a[2]); DETAIL.uHasCurtain.value = 1;
}
const glassCache = new Map();
export function glass(name) {
  if (glassCache.has(name)) return glassCache.get(name);
  const s = STYLES[name];
  const U = {
    uPanel: { value: new THREE.Vector4(s.panel[0], s.panel[1], s.mull[0], s.mull[1]) },
    uStyle: { value: new THREE.Vector4(s.fin, s.span, s.blinds, s.refl) },
    uTint: { value: col(s.tint) }, uFrame: { value: col(s.frame) },
    uDiag: { value: new THREE.Vector3(...(s.diag || [0, 1, 0])) },
    uWarm: { value: new THREE.Vector4(...(s.warm ? [...col(s.warm[0]).toArray(), s.warm[1]] : [0, 0, 0, 0])) },
    uMech: { value: s.mech || 0 }, ...DETAIL,
  };
  const m = new THREE.MeshLambertMaterial({ color: '#ffffff', name: 'glass' });
  hook(m, U, /* glsl */`
    uniform vec4 uPanel; uniform vec4 uStyle; uniform vec3 uTint; uniform vec3 uFrame; uniform vec3 uDiag; uniform vec4 uWarm;
    uniform float uMech; uniform sampler2D tCurtain; uniform vec3 uCurtainAvg; uniform float uHasCurtain;`, /* glsl */`
  {
    vec3 N = normalize(vGNor); vec3 V = normalize(cameraPosition - vGPos);
    vec3 tintMul = vec3(1.0);
    #if defined(USE_COLOR) || defined(USE_INSTANCING_COLOR)
      tintMul = vColor;
    #endif
    if (N.y > 0.7) {   // 屋顶：灰色防水层 + 设备块
      vec2 rp = vGPos.xz; float eq = step(0.70, h12(floor(rp / 3.5))) * step(0.25, fract(rp.x / 3.5)) * step(0.25, fract(rp.y / 3.5));
      diffuseColor.rgb = mix(S(vec3(0.60, 0.63, 0.67)) * (0.9 + 0.2 * vnoise(rp * 0.12)), S(vec3(0.80, 0.82, 0.84)), eq);
    }
    else {
      vec2 cell = vGUv / uPanel.xy; vec2 id = floor(cell); vec2 fw = fwidth(cell);
      float detail = 1.0 - smoothstep(0.3, 0.9, max(fw.x, fw.y));
      float rnd = h12(id), rnd2 = h12(id + 17.3);
      vec3 T = normalize(vec3(-N.z, 0.0, N.x) + 1e-5);
      vec3 Np = normalize(N + (T*(rnd-0.5) + vec3(0.0,1.0,0.0)*(rnd2-0.5)) * 0.028 * detail);
      vec3 R = reflect(-V, Np);
      vec3 refl = skyRefl(R);
      float ndv = max(dot(N, V), 0.0);
      float fres = pow(1.0 - ndv, 4.0);
      float k = mix(uStyle.w + 0.16, 1.0, fres);
      vec3 tint = uTint * tintMul;
      // 受光：朝太阳的立面亮而暖，背光立面暗而蓝——没有这一步所有玻璃一样亮，就是塑料感
      float sunF = smoothstep(-0.25, 0.5, dot(N, uSun));
      vec3 paint = vec3(1.0);
      if (uHasCurtain > 0.5) paint = mix(vec3(1.0), clamp(texture2D(tCurtain, cell / vec2(8.0, 3.0)).rgb / uCurtainAvg, 0.3, 3.2), detail);
      vec3 body = tint * (0.55 + 0.5 * smoothstep(-0.3, 0.7, R.y)) * paint * mix(vec3(0.42, 0.50, 0.70), vec3(1.05, 1.0, 0.95), sunF);
      if (detail > 0.02) {   // 室内视差：每三格玻璃一个房间，顺着视线算出打在后墙、天花、地板还是侧墙上，走动时室内会跟着错位
        vec2 rs = vec2(uPanel.x * 3.0, uPanel.y); vec2 rc = vGUv / rs; vec2 rid = floor(rc); vec2 rf = fract(rc) * rs;
        float su = sign(dot(dFdx(vGUv.x) * dFdx(vGPos) + dFdy(vGUv.x) * dFdy(vGPos), T)); if (su == 0.0) su = 1.0;
        vec3 dI = -V; float dx = dot(dI, T) * su, dy = dI.y, dz = max(dot(dI, -N), 0.02);
        float tX = dx > 0.0 ? (rs.x - rf.x) / dx : rf.x / max(-dx, 1e-4), tY = dy > 0.0 ? (rs.y - rf.y) / dy : rf.y / max(-dy, 1e-4), tZ = 5.0 / dz;
        float tt = min(tX, min(tY, tZ)); float rr1 = h12(rid + 5.3), rr2 = h12(rid * 1.3 + 9.1);
        vec3 wallC = mix(vec3(0.62, 0.60, 0.56), vec3(0.50, 0.56, 0.62), rr2);
        vec3 ic = tt == tZ ? wallC * 0.9 : (tt == tY ? (dy > 0.0 ? vec3(0.78) : vec3(0.34, 0.30, 0.27)) : wallC * 0.7);
        if (tt == tY && dy > 0.0) { vec2 cp = vec2(rf.x + dx * tt, dz * tt); ic += vec3(0.9, 0.9, 0.8) * step(abs(fract(cp.y / 1.6) - 0.5), 0.06) * step(0.15 * rs.x, cp.x) * step(cp.x, 0.85 * rs.x); }
        if (tt == tZ) { vec2 bp = vec2(rf.x + dx * tt, rf.y + dy * tt) / rs; ic *= 1.0 - 0.45 * step(0.2, bp.x) * step(bp.x, 0.8) * step(0.12, bp.y) * step(bp.y, 0.5) * step(0.4, rr2); }   // 后墙前的柜子/桌子剪影
        float lum = mix(0.10, 0.34, rr1) + step(0.86, rr1) * 0.55;
        ic *= lum * mix(1.0, 0.5, clamp(tt / 9.0, 0.0, 1.0)) * mix(vec3(0.85, 0.95, 1.1), vec3(1.15, 1.0, 0.8), step(0.86, rr1));
        body = mix(body, ic * paint, 0.8 * detail);
      }
      vec3 reflC = mix(vec3(dot(refl, vec3(0.3, 0.5, 0.2))), refl, 0.86) * mix(vec3(0.50, 0.63, 0.88), vec3(1.05, 1.02, 0.98), sunF) * mix(vec3(1.0), paint, 0.35);
      reflC *= mix(0.5, 1.12, smoothstep(6.0, 150.0, vGPos.y));                 // 低层映着街道偏暗，高层映着天偏亮
      vec3 glassC = mix(body, reflC, k);
      glassC *= mix(0.6, 1.0, smoothstep(0.0, 16.0, vGPos.y));                    // 近地面压暗
      glassC *= 1.0 + (rnd - 0.5) * 0.09 * detail;
      float bl = step(1.0 - uStyle.z, rnd2) * detail;
      glassC = mix(glassC, vec3(0.46, 0.50, 0.55), bl * 0.22);
      float litRoom = step(0.91, h12(id * 1.7 + 3.1)) * detail;                  // 零星亮着灯的房间
      glassC = mix(glassC, vec3(1.0, 0.82, 0.55) * (0.5 + 0.3 * step(0.5, fract(cell.y * 3.0))), litRoom * 0.16 * (1.0 - fres));
      glassC = mix(glassC, uWarm.rgb * (0.55 + 0.6*rnd), uWarm.a * (1.0 - fres) * (0.3 + 0.7*step(0.45, rnd2)) * detail);
      float sd = max(dot(R, uSun), 0.0);
      glassC += vec3(1.0, 0.95, 0.85) * (pow(sd, 420.0) * 5.0 + pow(sd, 36.0) * 0.55 + pow(sd, 6.0) * 0.12);   // 太阳的硬高光 + 一大片柔的反光
      float mw = uPanel.z, mh = uPanel.w;
      float tanH = abs(dot(V, T)) / max(ndv, 0.12);
      float mwE = min(mw + uStyle.x * 0.16 * tanH, 1.0);
      float frame = max(gline(cell.x + 0.5*mwE, mwE), gline(cell.y + 0.5*mh, mh));
      float span = gline(cell.y, uStyle.y);
      if (uDiag.x > 0.0) {
        float a = vGUv.x / uDiag.x, b = vGUv.y / uDiag.y;
        frame = max(frame * 0.55, max(gline(a + b + 0.5*uDiag.z, uDiag.z), gline(a - b + 0.5*uDiag.z, uDiag.z)));
      }
      float opaque = max(frame, span);
      vec3 oc = mix(uFrame * 0.80, uFrame, frame);
      oc *= 1.0 - 0.2 * gline(cell.x, 0.03) * (1.0 - frame);                                  // 窗间墙板的竖缝
      oc *= 0.9 + 0.1 * vnoise(vec2(vGUv.x * 0.8, vGUv.y * 0.045)) + 0.04 * vnoise(vGUv * 0.35);   // 一点雨痕和板块色差
      if (uMech > 0.5) {   // 设备层：每隔若干层一圈深色百叶
        float mm = step(mod(floor(cell.y) + 7.0, uMech), 0.5);
        oc = mix(oc, uFrame * mix(0.22, 0.34, gline(cell.y * 7.0, 0.5)), mm); opaque = max(opaque, mm);
      }
      diffuseColor.rgb = mix(vec3(0.012), oc, opaque);
      totalEmissiveRadiance += glassC * (1.0 - opaque);
    }
  }`);
  m.name = 'glass-' + name; m.customProgramCacheKey = () => 'glass';
  glassCache.set(name, m);
  return m;
}

// ---------- 地面 ----------
export function groundMat(tex) {
  const lz = L.LAWN_Z.map(([a, b]) => `d = min(d, sdRB(q, vec2(${f((L.LAWN_X0 + L.LAWN_X1) / 2)}, ${f((a + b) / 2)}), vec2(${f((L.LAWN_X1 - L.LAWN_X0) / 2)}, ${f((b - a) / 2)}), 4.0));`).join('\n    ');
  const K = L.LAKE;
  const m = new THREE.MeshLambertMaterial({ color: '#ffffff', name: 'ground' });
  hook(m, { tPave: { value: tex.paving }, tGrass: { value: tex.grass }, tFlower: { value: tex.flowers }, tAsph: { value: tex.asphalt || tex.paving }, tWalk: { value: tex.sidewalk || tex.paving }, uHasRoad: { value: new THREE.Vector2(tex.asphalt ? 1 : 0, tex.sidewalk ? 1 : 0) } }, /* glsl */`
    uniform sampler2D tPave, tGrass, tFlower, tAsph, tWalk; uniform vec2 uHasRoad;
    float sdRB(vec2 p, vec2 c, vec2 h, float r){ vec2 q = abs(p - c) - h + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
    float ellSd(vec2 p, vec2 r){ vec2 d = p - vec2(${f(K.x)}, ${f(K.z)}); float k = length(d / r); float g = length(d / (r*r)) / max(k, 1e-4); return (k - 1.0) / max(g, 1e-4); }
    float lawnSd(vec2 p){ vec2 q = vec2(abs(p.x), p.y); float d = 1e3;
    ${lz}
      d = max(d, -ellSd(p, vec2(${f(K.rx + K.ring)}, ${f(K.rz + K.ring)})));
      return min(d, sdRB(q, vec2(${f(L.BELT.x)}, ${f(L.BELT.z)}), vec2(${f(L.BELT.hx)}, ${f(L.BELT.hz)}), 5.0)); }   // 花城大道以北的中轴绿带
    float dash(float t, float on, float per){ float m = mod(t, per); return aa(abs(m - on*0.5) - on*0.5); }
    float zebra(float t){ return aa(abs(fract(t / 1.2) - 0.5) - 0.27); }
    const vec3 WHITE = vec3(0.86, 0.87, 0.88); const vec3 YEL = vec3(0.95, 0.62, 0.09);
  `, /* glsl */`
  {
    vec2 p = vGPos.xz; float ax = abs(p.x);
    float big = vnoise(p / 37.0), mid = vnoise(p / 9.0);
    vec3 pave = texture2D(tPave, p / 7.0).rgb;
    vec3 c = pave * mix(vec3(0.66, 0.69, 0.75), vec3(0.76, 0.78, 0.82), big);            // 楼前地块
    float inPark = band(p.x, ${f(L.PX)}) * aa(abs(p.y - ${f((L.PZ0 + L.PZ1) / 2)}) - ${f((L.PZ1 - L.PZ0) / 2)});
    vec3 park = pave * mix(vec3(0.80, 0.77, 0.72), vec3(0.90, 0.87, 0.82), big);
    // 中轴的拼花：深色石带
    float deco = max(band(ax - ${f(L.PROM - 1.2)}, 0.35), band(p.x, 0.5) * dash(p.y + 3.0, 6.0, 12.0));
    deco = max(deco, band(ax, ${f(L.PROM - 1.2)}) * band(mod(p.y, 24.0) - 12.0, 0.3));
    park = mix(park, park * vec3(0.62, 0.60, 0.60), deco * 0.8);
    c = mix(c, park, inPark);
    // 草坪、花带、路缘石
    float lsd = lawnSd(p);
    vec3 grass = texture2D(tGrass, p / 9.0).rgb;
    grass = mix(vec3(dot(grass, vec3(0.3, 0.6, 0.1))), grass, 0.42) * mix(vec3(0.44, 0.56, 0.38), vec3(0.64, 0.74, 0.46), smoothstep(0.25, 0.75, big * 0.6 + mid * 0.4));
    grass *= 0.96 + 0.08 * step(0.5, fract((p.x + p.y) / 7.0));                         // 割草条纹
    vec3 flower = texture2D(tFlower, p / 5.0).rgb; flower = mix(vec3(dot(flower, vec3(0.3, 0.6, 0.1))), flower, 0.72) * 0.8;
    float fmask = aa(lsd + 0.9) * max(aa(-(lsd + 4.2)), 0.0);
    fmask *= smoothstep(0.30, 0.42, vnoise(p / 14.0 + 3.0) + 0.25 * step(ax, ${f(L.LAWN_X0 + 6)}));
    vec3 lawnC = mix(grass, flower, fmask);
    c = mix(c, lawnC, aa(lsd));
    c = mix(c, S(vec3(0.83, 0.82, 0.78)), band(lsd + 0.02, 0.22));
    // 人行道
    float dNS = ax - ${f(L.ROAD_C)}, dN = p.y - ${f(L.NR_C)}, dS = p.y - ${f(L.SR_C)};
    float nsOn = aa(p.y - ${f(L.SR_C + L.SR_H)});
    float rNS = band(dNS, ${f(L.ROAD_H)}) * nsOn, rN = band(dN, ${f(L.NR_H)}), rS = band(dS, ${f(L.SR_H)});
    float sNS = band(dNS, ${f(L.ROAD_H + L.SIDE_W)}) * nsOn, sN = band(dN, ${f(L.NR_H + 8)}), sS = band(dS, ${f(L.SR_H + 8)});
    float side = max(sNS, max(sN, sS));
    vec3 walk = mix(texture2D(tPave, p / 3.5 + 0.37).rgb * vec3(0.66, 0.64, 0.64), texture2D(tWalk, p / 3.2).rgb * 0.92, uHasRoad.y);
    float tact = max(band(abs(dNS) - ${f(L.ROAD_H + L.SIDE_W * 0.45)}, 0.2) * nsOn, max(band(abs(dN) - ${f(L.NR_H + 3.2)}, 0.2), band(abs(dS) - ${f(L.SR_H + 3.2)}, 0.2)));
    walk = mix(walk, S(vec3(0.93, 0.74, 0.22)) * (0.9 + 0.1 * step(0.5, fract(p.x * 2.5)) * step(0.5, fract(p.y * 2.5))), tact * 0.9);
    c = mix(c, walk, side);
    // 江边步道
    float river = aa(${f(L.SR_C + L.SR_H + 8)} - p.y);
    c = mix(c, pave * vec3(1.0, 0.97, 0.93), river * (1.0 - side));
    // 外圈的路
    float oNS = band(ax - ${f(L.OUT_C)}, 7.0), oEW = band(p.y + 430.0, 7.0);
    // 车行道
    float road = max(max(rNS, rN), max(rS, max(oNS, oEW)));
    vec3 asph = mix(S(vec3(0.33, 0.36, 0.42)) * (0.92 + 0.16 * vnoise(p * 0.7)) * (0.97 + 0.06 * h12(floor(p * 9.0))), texture2D(tAsph, p / 9.0).rgb * (0.9 + 0.2 * vnoise(p / 23.0)), uHasRoad.x);
    // 井盖
    vec2 mh = vec2(mod(p.x + 2.0, 8.0) - 4.0, mod(p.y + 17.0, 46.0) - 23.0); float mr = length(mh);
    asph = mix(asph, S(vec3(0.20, 0.21, 0.24)) * (0.8 + 0.4 * step(0.5, fract(mr * 7.0))), aa(mr - 0.36) * step(0.35, h12(floor((p + vec2(2.0, 17.0)) / vec2(8.0, 46.0)))));
    float cross = max(rN, rS);                                   // 路口范围内不画南北向标线
    float mk = 0.0, my = 0.0;
    // 南北向道路标线
    float zeb1 = band(p.y - ${f(L.CROSS[0])}, 2.6), zeb2 = band(p.y - ${f(L.CROSS[2])}, 2.6), zeb3 = band(p.y - ${f(L.PZ0 + 4)}, 2.4), zeb4 = band(p.y - ${f(L.PZ1 - 4)}, 2.4);
    float zNS = max(max(zeb1, zeb2), max(zeb3, zeb4));
    float clearNS = (1.0 - band(dN, ${f(L.NR_H + 9)})) * (1.0 - band(dS, ${f(L.SR_H + 9)})) * (1.0 - max(max(band(p.y - ${f(L.CROSS[0])}, 4.2), band(p.y - ${f(L.CROSS[2])}, 4.2)), 0.0));
    my += band(abs(dNS) - 0.2, 0.07) * clearNS * rNS;
    mk += band(abs(dNS) - 4.0, 0.075) * dash(p.y, 4.0, 10.0) * clearNS * rNS;
    mk += band(abs(dNS) - 7.5, 0.075) * clearNS * rNS;
    mk += zNS * band(dNS, 7.3) * zebra(dNS) * nsOn;
    // 花城大道、临江大道标线
    float clearEW = (1.0 - band(dNS, ${f(L.ROAD_H + 9)})) * (1.0 - band(p.x, 7.0));
    my += band(abs(dN) - 0.2, 0.07) * clearEW * rN + band(abs(dS) - 0.2, 0.07) * clearEW * rS;
    mk += (band(abs(dN) - 4.0, 0.075) + band(abs(dN) - 8.0, 0.075)) * dash(p.x, 4.0, 10.0) * clearEW * rN;
    mk += band(abs(dS) - 5.0, 0.075) * dash(p.x, 4.0, 10.0) * clearEW * rS;
    mk += band(abs(dN) - 11.5, 0.075) * clearEW * rN + band(abs(dS) - 9.5, 0.075) * clearEW * rS;
    float zx = max(band(p.x, 5.0), max(band(ax - ${f(L.ROAD_C - L.ROAD_H - 3)}, 2.2), band(ax - ${f(L.ROAD_C + L.ROAD_H + 3)}, 2.2)));
    mk += zx * (band(dN, ${f(L.NR_H - 0.7)}) * zebra(dN) + band(dS, ${f(L.SR_H - 0.7)}) * zebra(dS));
    my += band(ax - ${f(L.OUT_C)}, 0.09) * oNS + band(p.y + 430.0, 0.09) * oEW;
    asph = mix(asph, S(WHITE), clamp(mk, 0.0, 1.0) * 0.92);
    asph = mix(asph, S(YEL), clamp(my, 0.0, 1.0) * 0.92);
    c = mix(c, asph, road);
    // 路缘石
    float curb = max(band(abs(dNS) - ${f(L.ROAD_H + 0.12)}, 0.14) * nsOn * (1.0 - cross), max(band(abs(dN) - ${f(L.NR_H + 0.12)}, 0.14), band(abs(dS) - ${f(L.SR_H + 0.12)}, 0.14)) * (1.0 - rNS));
    c = mix(c, S(vec3(0.80, 0.80, 0.79)), curb);
    // 湖底
    c = mix(c, S(vec3(0.10, 0.36, 0.42)), aa(ellSd(p, vec2(${f(K.rx)}, ${f(K.rz)}))));
    // 云影：大块的淡蓝色影子慢慢飘过
    float cl = smoothstep(0.42, 0.62, vnoise(p / 120.0 + vec2(uTime * 0.012, uTime * 0.005)) * 0.7 + vnoise(p / 43.0 + vec2(uTime * 0.02, 0.0)) * 0.3);
    c *= mix(vec3(1.0), vec3(0.80, 0.86, 0.96), cl * 0.75);
    vec3 Vg = normalize(cameraPosition - vGPos); vec3 Rg = reflect(-Vg, vec3(0.0, 1.0, 0.0));
    float gloss = mix(0.6, 0.12, aa(lsd)) * (1.0 - road * 0.45) * (0.65 + 0.7 * vnoise(p * 1.3));
    float frg = pow(1.0 - max(Vg.y, 0.0), 4.0);
    totalEmissiveRadiance += (skyPaint(Rg) * frg * 0.5 + vec3(1.0, 0.95, 0.85) * pow(max(dot(Rg, uSun), 0.0), 80.0) * 0.6) * gloss;
    diffuseColor.rgb = c;
  }`, '#include <map_fragment>');
  return m;
}

// ---------- 水面 ----------
export function waterMat(deep = '#0d5f7a', shallow = '#3fb5c4', scale = 1) {
  const m = new THREE.MeshLambertMaterial({ color: '#ffffff', name: 'water' + scale });
  hook(m, { uDeep: { value: col(deep) }, uShallow: { value: col(shallow) }, uWScale: { value: scale } }, /* glsl */`
    uniform vec3 uDeep, uShallow; uniform float uWScale;`, /* glsl */`
  {
    vec2 p = vGPos.xz / uWScale; float t = uTime;
    vec3 V = normalize(cameraPosition - vGPos);
    float dist = length(cameraPosition - vGPos);
    float amp = 0.11 / (1.0 + dist * 0.004);
    vec2 g = vec2(vnoise(p * 0.55 + vec2(t * 0.35, t * 0.2)) - 0.5, vnoise(p * 0.55 + vec2(-t * 0.25, t * 0.3) + 7.0) - 0.5) * 1.6
           + vec2(vnoise(p * 2.3 + vec2(t * 0.9, 0.0)) - 0.5, vnoise(p * 2.3 + vec2(0.0, -t * 0.8) + 3.0) - 0.5);
    vec3 Nw = normalize(vec3(g.x * amp, 1.0, g.y * amp));
    vec3 R = reflect(-V, Nw); R.y = abs(R.y);
    float ndv = max(dot(Nw, V), 0.0);
    float fres = 0.06 + 0.94 * pow(1.0 - ndv, 4.0);
    vec3 body = mix(uDeep, uShallow, clamp(ndv * 1.2, 0.0, 1.0));
    vec3 rc = mix(skyPaint(R), vec3(0.62, 0.74, 0.88), smoothstep(0.16, 0.0, R.y) * 0.55);
    vec3 wc = mix(body, rc, clamp(fres + 0.12, 0.0, 1.0));
    float sp = pow(max(dot(R, uSun), 0.0), 260.0);
    float glit = step(0.80, vnoise(p * 5.0 + vec2(t * 1.6, -t))) * pow(max(dot(R, uSun), 0.0), 26.0);
    wc += vec3(1.0, 0.96, 0.86) * (sp * 4.0 + glit * 1.3);
    // 二次元水面常见的亮色波纹线
    float cres = smoothstep(0.62, 0.66, vnoise(p * 1.1 + vec2(t * 0.3, t * 0.12)) * 0.6 + vnoise(p * 3.1 - t * 0.2) * 0.4);
    wc = mix(wc, wc * 1.18 + 0.04, cres * 0.35 / (1.0 + dist * 0.01));
    diffuseColor.rgb = wc * 0.35;
    totalEmissiveRadiance += wc * 0.62;
  }`);
  return m;
}

// ---------- 绒球树叶（面片永远朝相机，法线取球面方向，三段式卡通明暗）----------
let ramp;
function toonRamp() {
  if (ramp) return ramp;
  ramp = new THREE.DataTexture(new Uint8Array([46, 46, 46, 255, 92, 92, 92, 255, 178, 178, 178, 255, 255, 255, 255, 255]), 4, 1, THREE.RGBAFormat);
  ramp.minFilter = ramp.magFilter = THREE.LinearFilter;   // 明暗平滑过渡：植被不再是卡通三段色，和写实的楼统一 ramp.needsUpdate = true; return ramp;
}
const BILL_PARS = /* glsl */`#include <common>
attribute vec3 aOff; attribute vec3 aNor; uniform float uTime;`;
const BILL_MAIN = /* glsl */`#include <project_vertex>
  { float ang = aOff.z * 6.2831; float cs = cos(ang), sn = sin(ang);
    vec2 o = vec2(aOff.x * cs - aOff.y * sn, aOff.x * sn + aOff.y * cs);
    float sway = sin(uTime * 1.25 + position.x * 0.31 + position.z * 0.23 + aOff.z * 6.0);
    mvPosition.xy += o + vec2(sway * 0.07, sway * 0.03) * length(aOff.xy);
    gl_Position = projectionMatrix * mvPosition; }`;
export function leafTex(kind = 'round') {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
  if (kind === 'grass') {   // 草丛：一把向上散开的草叶
    for (let i = 0; i < 26; i++) { const x = 128 + (i - 12.5) * 7 + ((i * 37) % 9), h = 120 + ((i * 53) % 90), lean = ((i * 29) % 60) - 30, v = 190 + ((i * 41) % 65); g.fillStyle = 'rgb(' + v + ',' + v + ',' + v + ')'; g.beginPath(); g.moveTo(x - 5, 250); g.lineTo(x + 5, 250); g.lineTo(x + lean, 250 - h); g.closePath(); g.fill(); }
    const tg = new THREE.CanvasTexture(c); tg.colorSpace = THREE.SRGBColorSpace; tg.anisotropy = 4; return tg;
  }
  let s = kind === 'round' ? 7 : 19; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const n = kind === 'round' ? 120 : 34;
  for (let i = 0; i < n; i++) {
    const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 96, x = 128 + Math.cos(a) * r, y = 128 + Math.sin(a) * r;
    const len = kind === 'round' ? 15 + rnd() * 9 : 16 + rnd() * 10, wid = kind === 'round' ? 6.5 + rnd() * 3.5 : 26 + rnd() * 12, v = 190 + Math.floor(rnd() * 65);
    g.save(); g.translate(x, y); g.rotate(a + (rnd() - 0.5) * 1.6);
    g.fillStyle = `rgb(${v},${v},${v})`; g.beginPath();
    if (kind === 'round') { g.moveTo(-len / 2, 0); g.quadraticCurveTo(0, -wid, len / 2, 0); g.quadraticCurveTo(0, wid, -len / 2, 0); }
    else { const pr = wid * 0.36; for (let k = 0; k < 5; k++) { const b = k * 1.2566; g.moveTo(Math.cos(b) * pr * 0.95 + pr, Math.sin(b) * pr * 0.95); g.arc(Math.cos(b) * pr * 0.95, Math.sin(b) * pr * 0.95, pr, 0, 6.283); } }
    g.fill();
    if (kind !== 'round') { g.fillStyle = 'rgb(150,150,150)'; g.beginPath(); g.arc(0, 0, wid * 0.13, 0, 6.283); g.fill(); }
    g.restore();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
export function foliageMat(tex) {
  const m = new THREE.MeshToonMaterial({ color: '#ffffff', map: tex, alphaTest: 0.5, alphaToCoverage: true, vertexColors: true, gradientMap: toonRamp(), name: 'foliage' });
  m.shadowSide = THREE.DoubleSide;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = SKY_U.uTime;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', BILL_PARS).replace('#include <beginnormal_vertex>', 'vec3 objectNormal = aNor;').replace('#include <project_vertex>', BILL_MAIN);
  };
  const d = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: tex, alphaTest: 0.5 });
  d.onBeforeCompile = (sh) => { sh.uniforms.uTime = SKY_U.uTime; sh.vertexShader = sh.vertexShader.replace('#include <common>', BILL_PARS).replace('#include <project_vertex>', BILL_MAIN); };
  return { mat: m, depth: d };
}
export const toon = (o) => new THREE.MeshLambertMaterial(o);   // 统一成写实：不再用卡通色阶
export const lam = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.72, metalness: 0, envMapIntensity: 0.4, ...o });   // 所有纯色件都有粗糙度和环境反光

// 手绘石材立面（4 窗宽 × 3 层高一张，12 米 × 10.8 米）
export function cladMat(tex) {
  if (!tex) return glass('stone');
  tex.repeat.set(1 / 12, 1 / 10.8);
  return new THREE.MeshLambertMaterial({ map: tex, emissive: '#ffffff', emissiveMap: tex, emissiveIntensity: 0.06 });
}
