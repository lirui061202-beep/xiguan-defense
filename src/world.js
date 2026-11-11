// 关卡：黄昏的西关骑楼街 + 荔枝湾涌（写实向：照片立面切出真实凹凸、照片面片杂物、无纯色材质）
import * as THREE from 'three';
import { Builder, scaleUV } from './build.js';
import * as T from './tex.js';
import { rnd, rr, pick, srand } from './tex.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const PI = Math.PI;

export const SUN_DIR = V3(-0.8, 0.3, -0.42).normalize(); // 指向太阳（西偏北，低角度）

function hipGeo(w, d, h, tw, td) {
  const b = [[-w / 2, 0, -d / 2], [w / 2, 0, -d / 2], [w / 2, 0, d / 2], [-w / 2, 0, d / 2]];
  const t = [[-tw / 2, h, -td / 2], [tw / 2, h, -td / 2], [tw / 2, h, td / 2], [-tw / 2, h, td / 2]];
  const pos = [], uv = [], s = 2.5;
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4, ul = (i % 2 ? d : w) / s, vl = Math.hypot(h, (i % 2 ? (w - tw) : (d - td)) / 2) / s;
    pos.push(...b[j], ...b[i], ...t[i], ...b[j], ...t[i], ...t[j]);
    uv.push(0, 0, ul, 0, ul, vl, 0, 0, ul, vl, 0, vl);
  }
  pos.push(...t[0], ...t[3], ...t[2], ...t[0], ...t[2], ...t[1]); uv.push(0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.computeVertexNormals();
  return g;
}

// 立面照片里窗洞/阳台/空调的位置（像素，[x0,y0,x1,y1,深度]；深度>0 内凹，<0 外凸）
const px = (w, h, list) => list.map(([x0, y0, x1, y1, d]) => [x0 / w, y0 / h, x1 / w, y1 / h, d]);
const RECTS = {
  A: px(1448, 1086, [[197, 78, 409, 398, 0.24], [618, 78, 832, 398, 0.24], [1042, 78, 1256, 398, 0.24], [197, 645, 411, 1000, 0.24], [618, 645, 834, 1000, 0.24], [1042, 645, 1256, 1000, 0.24],
    [0, 538, 1448, 600, -0.24], [460, 245, 578, 340, -0.34], [880, 845, 998, 935, -0.34], [8, 0, 94, 1086, -0.1], [1354, 0, 1440, 1086, -0.1]]),
  B: px(1448, 1086, [[128, 150, 344, 440, 0.2], [455, 150, 668, 440, 0.2], [792, 150, 1006, 440, 0.2], [1118, 150, 1334, 440, 0.2], [128, 660, 344, 950, 0.2], [455, 660, 668, 950, 0.2], [792, 660, 1006, 950, 0.2], [1118, 660, 1334, 950, 0.2],
    [60, 516, 1400, 550, -0.3], [112, 440, 1350, 462, -0.1], [112, 950, 1350, 972, -0.1]]),
  C: px(1448, 1086, [[203, 125, 437, 384, 0.22], [622, 125, 853, 384, 0.22], [1030, 125, 1262, 384, 0.22], [198, 660, 432, 914, 0.22], [618, 660, 850, 914, 0.22], [1030, 660, 1264, 914, 0.22],
    [137, 384, 497, 532, -0.5], [552, 384, 912, 532, -0.5], [968, 384, 1330, 532, -0.5], [137, 914, 497, 1037, -0.5], [552, 914, 912, 1037, -0.5], [968, 914, 1330, 1037, -0.5]]),
  tea: px(1536, 614, [[68, 55, 375, 190, 0.18], [412, 55, 748, 190, 0.18], [790, 55, 1130, 190, 0.18], [1168, 55, 1468, 190, 0.18], [72, 335, 328, 495, 0.18], [362, 335, 592, 495, 0.18], [945, 335, 1175, 495, 0.18], [1212, 335, 1468, 495, 0.18], [630, 335, 905, 605, 0.3]]),
};

// 把一张立面照片切成带真实凹凸的网格：返回 { wall, win, side } 三块几何体（面朝 +z，x 居中，y 从 0 起）
function facadeGeo(W, H, rects, flip) {
  const us = new Set([0, 1]), vs = new Set([0, 1]);
  const rec = rects.filter((r) => r[4] > 0), pro = rects.filter((r) => r[4] < 0);
  for (const r of rec) { us.add(r[0]); us.add(r[2]); vs.add(r[1]); vs.add(r[3]); }
  const U = [...us].sort((a, b) => a - b), Vv = [...vs].sort((a, b) => a - b);
  const out = { wall: { p: [], t: [] }, win: { p: [], t: [] }, side: { p: [], t: [] } };
  const X = (u) => (u - 0.5) * W * (flip ? -1 : 1), Y = (v) => (1 - v) * H;
  // 四边形：a b c d 逆时针（从可见面看），uv 可选
  const quad = (o, a, b, c, d, ua, ub, uc, ud) => {
    const order = flip ? [a, c, b, a, d, c] : [a, b, c, a, c, d], uo = flip ? [ua, uc, ub, ua, ud, uc] : [ua, ub, uc, ua, uc, ud];
    for (let i = 0; i < 6; i++) { o.p.push(...order[i]); o.t.push(...uo[i]); }
  };
  const face = (o, u0, v0, u1, v1, z) => quad(o, [X(u0), Y(v1), z], [X(u1), Y(v1), z], [X(u1), Y(v0), z], [X(u0), Y(v0), z], [u0, 1 - v1], [u1, 1 - v1], [u1, 1 - v0], [u0, 1 - v0]);
  for (let i = 0; i < U.length - 1; i++) for (let j = 0; j < Vv.length - 1; j++) {
    const uc = (U[i] + U[i + 1]) / 2, vc = (Vv[j] + Vv[j + 1]) / 2;
    if (rec.some((r) => uc > r[0] && uc < r[2] && vc > r[1] && vc < r[3])) continue;
    face(out.wall, U[i], Vv[j], U[i + 1], Vv[j + 1], 0);
  }
  const s = 3; // 侧壁贴图按米铺
  const sideQuads = (u0, v0, u1, v1, z0, z1, inward) => { // z0 靠墙面，z1 远端
    const xa = X(u0), xb = X(u1), ya = Y(v1), yb = Y(v0), dz = Math.abs(z1 - z0) / s, hh = (yb - ya) / s, ww = Math.abs(xb - xa) / s;
    const q = (a, b, c, d, w2, h2) => (inward ? quad(out.side, d, c, b, a, [0, h2], [w2, h2], [w2, 0], [0, 0]) : quad(out.side, a, b, c, d, [0, 0], [w2, 0], [w2, h2], [0, h2]));
    q([xa, ya, z0], [xa, ya, z1], [xa, yb, z1], [xa, yb, z0], dz, hh);   // 左
    q([xb, ya, z1], [xb, ya, z0], [xb, yb, z0], [xb, yb, z1], dz, hh);   // 右
    q([xa, yb, z1], [xb, yb, z1], [xb, yb, z0], [xa, yb, z0], ww, dz);   // 上
    q([xa, ya, z0], [xb, ya, z0], [xb, ya, z1], [xa, ya, z1], ww, dz);   // 下
  };
  for (const [u0, v0, u1, v1, d] of rec) { face(out.win, u0, v0, u1, v1, -d); sideQuads(u0, v0, u1, v1, 0, -d, false); }
  for (const [u0, v0, u1, v1, d] of pro) { face(out.wall, u0, v0, u1, v1, -d); sideQuads(u0, v0, u1, v1, 0, -d, false); }
  const mk = (o) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(o.p, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(o.t, 2)); g.computeVertexNormals(); return g; };
  return { wall: mk(out.wall), win: out.win.p.length ? mk(out.win) : null, side: out.side.p.length ? mk(out.side) : null };
}

function reliefGeo(canvas, W, H, depth, cols) {
  const rows = Math.round(cols * H / W), c = document.createElement('canvas'); c.width = cols; c.height = rows; const g = c.getContext('2d'); g.drawImage(canvas, 0, 0, cols, rows);
  const a = g.getImageData(0, 0, cols, rows).data, solid = (i, j) => i >= 0 && j >= 0 && i < cols && j < rows && a[(j * cols + i) * 4 + 3] > 70;
  const F = { p: [], t: [] }, Sd = { p: [], t: [] }, cw = W / cols, ch = H / rows, zf = depth / 2, X = (i) => -W / 2 + i * cw, Y = (j) => H - j * ch;
  const quad = (o, p0, p1, p2, p3, u0, u1, u2, u3) => { o.p.push(...p0, ...p1, ...p2, ...p0, ...p2, ...p3); o.t.push(...u0, ...u1, ...u2, ...u0, ...u2, ...u3); };
  for (let j = 0; j < rows; j++) { let i = 0; while (i < cols) { if (!solid(i, j)) { i++; continue; } let k = i; while (k < cols && solid(k, j)) k++;
    const x0 = X(i), x1 = X(k), y0 = Y(j + 1), y1 = Y(j), u0 = i / cols, u1 = k / cols, v0 = 1 - (j + 1) / rows, v1 = 1 - j / rows;
    quad(F, [x0, y0, zf], [x1, y0, zf], [x1, y1, zf], [x0, y1, zf], [u0, v0], [u1, v0], [u1, v1], [u0, v1]);
    quad(F, [x1, y0, -zf], [x0, y0, -zf], [x0, y1, -zf], [x1, y1, -zf], [u1, v0], [u0, v0], [u0, v1], [u1, v1]); i = k; } }
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) { if (!solid(i, j)) continue; const x0 = X(i), x1 = X(i + 1), y0 = Y(j + 1), y1 = Y(j), U = [(i + 0.5) / cols, 1 - (j + 0.5) / rows];
    if (!solid(i - 1, j)) quad(Sd, [x0, y0, -zf], [x0, y0, zf], [x0, y1, zf], [x0, y1, -zf], U, U, U, U);
    if (!solid(i + 1, j)) quad(Sd, [x1, y0, zf], [x1, y0, -zf], [x1, y1, -zf], [x1, y1, zf], U, U, U, U);
    if (!solid(i, j - 1)) quad(Sd, [x0, y1, zf], [x1, y1, zf], [x1, y1, -zf], [x0, y1, -zf], U, U, U, U);
    if (!solid(i, j + 1)) quad(Sd, [x0, y0, -zf], [x1, y0, -zf], [x1, y0, zf], [x0, y0, zf], U, U, U, U); }
  const mk = (o) => { const ge = new THREE.BufferGeometry(); ge.setAttribute('position', new THREE.Float32BufferAttribute(o.p, 3)); ge.setAttribute('uv', new THREE.Float32BufferAttribute(o.t, 2)); ge.computeVertexNormals(); return ge; };
  return { face: mk(F), side: mk(Sd) };
}

export function buildWorld(scene, A, sky, opt = {}) {
  srand(4242);
  const B = new Builder(scene);
  const HOR = sky.horizon;
  // ---------- 材质（全部带照片贴图，不留纯色面） ----------
  const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0, ...o });
  const P = (name, uv, po = {}, mo = {}) => { const m = new THREE.MeshStandardMaterial({ ...A.pbr(name, po), roughness: 1, metalness: 0, ...mo }); m.userData.uv = uv; return m; };
  const plasterMaps = A.pbr('plaster', { normal: 1.6, rough: 0.9, roughK: 0.3 });
  const plasterCache = new Map();
  const plaster = (hex) => { if (!plasterCache.has(hex)) { const m = new THREE.MeshStandardMaterial({ ...plasterMaps, color: hex, roughness: 1 }); m.userData.uv = 4; plasterCache.set(hex, m); } return plasterCache.get(hex); };
  const texMat = (map, o = {}) => new THREE.MeshStandardMaterial({ map, roughness: 0.8, ...o });
  const glow = (map, intensity = 1.4, o = {}) => new THREE.MeshStandardMaterial({ map, emissiveMap: map, emissive: '#ffffff', emissiveIntensity: intensity, roughness: 0.6, ...o });
  const lac = A.has('lacquer') ? 'lacquer' : 'wood';
  const metal = (c, o = {}) => P('rustmetal', 1.5, { normal: 2, rough: 0.5, roughK: 0.5 }, { color: c, metalness: 0.6, ...o });

  const M = {
    paving: P('paving', 3.2, { normal: 2.4, rough: 0.78, roughK: 0.5 }),
    stone: plaster('#a39a8a'), stoneDark: plaster('#756f65'), trim: plaster('#c9c1b2'), concrete: P('concrete', 3, { normal: 2.4, rough: 0.9, roughK: 0.3 }),
    arcade: P('concrete', 2.2, { normal: 2.0, rough: 0.7, roughK: 0.4 }, { color: '#b5aea2' }),
    wood: P('wood', 2, { normal: 2.2, rough: 0.6, roughK: 0.4, desat: 0.35 }, { color: '#cfc2b4' }), woodDark: P('wood', 2, { normal: 2.2, rough: 0.6, roughK: 0.4 }, { color: '#7d6a60' }),
    red: P(lac, 1.6, { normal: 2.2, rough: 0.45, roughK: 0.5 }, A.has('lacquer') ? {} : { color: '#a8483c' }), redDark: P(lac, 1.6, { normal: 2.2, rough: 0.5, roughK: 0.5 }, { color: A.has('lacquer') ? '#9a8a84' : '#7a3a30' }),
    gold: metal('#c9a24a', { metalness: 0.85 }),
    tileGreen: P('rooftile', 2.4, { normal: 3, rough: 0.34, roughK: 0.5 }),
    tileGray: P('rooftile', 2.4, { normal: 3, rough: 0.7, roughK: 0.4, desat: 1, gain: 0.85 }, { color: '#9aa3a6' }),
    brick: P('brick', 2.6, { normal: 2.2, rough: 0.9, roughK: 0.3 }),
    roofFloor: plaster('#6a5a52'),
    bark: P('bark', 2.2, { normal: 3, rough: 0.95, roughK: 0.3 }),
    foliage: P('foliage', 5, { normal: 2.4, rough: 0.6, roughK: 0.5 }, { color: '#8f9c80' }),
    lantern: std('#a8281a', { emissive: '#ff4a1c', emissiveIntensity: 0.9, roughness: 0.6 }),
    bulb: std('#fff0cf', { emissive: '#ffd9a0', emissiveIntensity: 1.5 }),
    rope: std('#1c1a18'), iron: metal('#4a4d50'), steel: metal('#b0b4b6', { metalness: 0.75 }),
    land: plaster('#6f705f'),
    sandbag: P('sandbags', 1.7, { normal: 3.2, rough: 0.92, roughK: 0.3 }),
    drumRed: P('container', 1.6, { normal: 1.2, rough: 0.55, roughK: 0.5 }, { color: '#b05a4a', metalness: 0.3 }), drumBlue: P('container', 1.6, { normal: 1.2, rough: 0.55, roughK: 0.5 }, { color: '#5f7f9c', metalness: 0.3 }),
    crate: new THREE.MeshStandardMaterial({ ...A.pbr('crate', { repeat: false, size: 512, normal: 2.6, rough: 0.82, roughK: 0.3 }), roughness: 1 }),
    balu: A.has('balustrade') ? (() => { const m = P('balustrade', 0.85, { repeat: true, size: 1024, normal: 2.6, rough: 0.85, roughK: 0.3 }); for (const k of ['map', 'normalMap', 'roughnessMap']) m[k].repeat.set(0.5, 1); return m; })() : null,
    cont: ['#c9cdd0', '#a8665a', '#6a86a0', '#84987e'].map((c) => P('container', 2.6, { normal: 1.6, rough: 0.62, roughK: 0.5 }, { color: c, metalness: 0.25 })),
  };
  M.rope.userData.noRecv = true; if (!M.balu) M.balu = M.stoneDark;
  const reflU = { tRefl: { value: null }, reflMatrix: { value: new THREE.Matrix4() }, reflOn: { value: 0 } };

  // 麻石路面：按世界坐标铺积水（低粗糙度 + 压平法线 + 变暗）
  M.paving.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, reflU);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWp;').replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWp=(modelMatrix*vec4(transformed,1.)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWp; float pud; uniform sampler2D tRefl; uniform mat4 reflMatrix; uniform float reflOn;
        float hsh(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hsh(i),hsh(i+vec2(1,0)),f.x),mix(hsh(i+vec2(0,1)),hsh(i+vec2(1,1)),f.x),f.y); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        pud=smoothstep(.56,.68, vn(vWp.xz*.16)*.65+vn(vWp.xz*.45+7.)*.35) * step(vWp.y, 0.05) * step(-0.05, vWp.y);
        float dirt=vn(vWp.xz*.07+3.)*.6+vn(vWp.xz*.31)*.4;
        diffuseColor.rgb*=mix(1.,.42,pud)*mix(.72,1.08,smoothstep(.25,.75,dirt));`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,.035,pud);')
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal=normalize(mix(normal,normalize(vNormal),pud*.96));')
      .replace('#include <opaque_fragment>', `if(reflOn>.5 && pud>.01){ vec4 rc=reflMatrix*vec4(vWp.x,0.,vWp.z,1.); vec2 ruv=clamp(rc.xy/rc.w,.002,.998);
          vec3 rcol=texture2D(tRefl,ruv).rgb; float fr=.3+.7*pow(1.-clamp(dot(normalize(vViewPosition),normal),0.,1.),3.); outgoingLight=mix(outgoingLight,rcol,pud*fr*.88); }
        #include <opaque_fragment>`);
  };

  // ---------- 地面 ----------
  const G = (w, d, x, z) => B.cbox(M.paving, w, 3, d, x, -3, z);
  G(48, 29.5, -16, 19.25); G(32, 20, 24, 24);
  G(48, 29.5, -16, -19.25); G(32, 20, 24, -24);
  for (const s of [1, -1]) {
    B.box(M.stone, 48, 0.12, 0.6, -16, 0, s * 4.8);
    B.box(M.stone, 0.6, 0.12, 9.5, 8.3, 0, s * 9.25);
    B.box(M.stone, 32, 0.12, 0.6, 24, 0, s * 14.3);
    for (let x = -38; x < 8; x += 5) { B.cbox(M.stoneDark, 0.4, 0.75, 0.4, x, 0, s * 4.8); B.box(M.stone, 0.48, 0.1, 0.48, x, 0.75, s * 4.8); }
    for (let x = 10; x < 40; x += 5) { B.cbox(M.stoneDark, 0.4, 0.75, 0.4, x, 0, s * 14.3); B.box(M.stone, 0.48, 0.1, 0.48, x, 0.75, s * 14.3); }
  }
  B.col(1, 70, 72, -40.5, -5, 0); B.col(1, 70, 72, 40.5, -5, 0); B.col(84, 70, 1, 0, -5, -34.5); B.col(84, 70, 1, 0, -5, 34.5);
  for (const s of [1, -1]) {
    B.box(M.balu, 0.3, 0.95, 20, 39.6, 0, s * 24); B.box(M.stoneDark, 0.44, 0.1, 20, 39.6, 0.95, s * 24);
  }
  B.box(M.land, 560, 3, 1200, -320.2, -3.05, 0);
  B.box(M.land, 80.4, 3, 566, -0.2, -3.05, 317.2); B.box(M.land, 80.4, 3, 566, -0.2, -3.05, -317.2);
  B.box(M.land, 700, 3, 1600, 760, -3.2, 0);
  B.box(M.brick, 1.2, 4.5, 9.6, -40.2, -1.5, 0); B.box(M.balu, 0.3, 0.9, 9.6, -39.8, 3, 0);
  B.cbox(M.brick, 0.6, 4, 13.5, -39.7, 0, -11.25); B.cbox(M.brick, 2.4, 5, 0.6, 11, 0, -33.7);
  B.cbox(M.brick, 10, 3, 0.6, 35, 0, 33.7);

  // ---------- 石拱桥 ----------
  {
    const hs = [0.35, 0.7, 1.0, 1.25, 1.4, 1.4, 1.25, 1.0, 0.7, 0.35];
    for (let i = 0; i < 10; i++) {
      const z = -5.4 + i * 1.2, h = hs[i], edge = i < 2 || i > 7;
      const y0 = edge ? -2.6 : h - 0.55 - (i === 2 || i === 7 ? 0.5 : 0);
      B.cbox(M.concrete, 4, h - y0, 1.2, -13, y0, z);
      B.box(M.paving, 3.4, 0.04, 1.2, -13, h, z);
      for (const sx of [-1.85, 1.85]) B.cbox(M.balu, 0.26, 0.85, 1.2, -13 + sx, h, z);
    }
    for (const sx of [-1.85, 1.85]) for (const sz of [-6.2, 6.2]) { B.cbox(M.stone, 0.45, 1.3, 0.45, -13 + sx, 0, sz); B.box(M.stoneDark, 0.55, 0.12, 0.55, -13 + sx, 1.3, sz); }
  }

  // ---------- 带凹凸的照片立面 ----------
  const fMaps = {}, sMaps = {};
  for (const k of ['A', 'B', 'C']) fMaps[k] = A.pbr('facade' + k, { repeat: false, size: 1024, normal: 1.8, rough: 0.82, roughK: 0.3 });
  for (const k of ['A', 'B', 'C']) sMaps[k] = A.pbr('shop' + (k === 'C' && !A.has('shopC') ? 'B' : k), { repeat: false, size: 1024, normal: 1.6, rough: 0.7, roughK: 0.4 });
  const sideMat = plaster('#8f887c');
  // 在 Builder 当前坐标系里放一面立面：中心 x、底 y、墙面 z，面朝 ry 旋转后的 +z
  function facade(maps, rects, W, H, x, y, z, ry, o = {}) {
    const g = facadeGeo(W, H, rects, !!o.flip), tint = o.tint || '#ffffff';
    B.add(new THREE.MeshStandardMaterial({ ...maps, color: tint, roughness: 1, ...(o.emis ? { emissiveMap: maps.map, emissive: '#ffffff', emissiveIntensity: o.emis * 0.35 } : {}) }), g.wall, x, y, z, 0, ry, 0);
    if (g.win) B.add(new THREE.MeshStandardMaterial({ map: maps.map, normalMap: maps.normalMap, color: tint, roughness: o.glass ?? 0.32, ...(o.emis ? { emissiveMap: maps.map, emissive: '#ffffff', emissiveIntensity: o.emis } : {}) }), g.win, x, y, z, 0, ry, 0);
    if (g.side) B.add(sideMat, g.side, x, y, z, 0, ry, 0);
  }

  // ---------- 骑楼 ----------
  function qilou(x, z, ry, W, H, o) {
    B.push(x, 0, z, ry);
    const up = H - 4, D = 10, wall = plaster(o.color);
    B.cbox(wall, W, up, D - 0.9, 0, 4, D / 2 + 0.45); B.col(W, up, 0.9, 0, 4, 0.45);
    for (const sx of [-1, 1]) B.box(M.trim, 0.14, up, 0.92, sx * (W / 2 - 0.07), 4, 0.46);
    facade(fMaps[o.f], RECTS[o.f], W - 0.1, up - 0.1, 0, 4.05, 0.3, PI, { flip: o.flip, tint: o.tint });
    B.cbox(plaster('#6f675c'), W, 4, D - 3, 0, 0, 3 + (D - 3) / 2);
    const sm = sMaps[o.s];
    B.plane(new THREE.MeshStandardMaterial({ ...sm, emissiveMap: sm.map, emissive: '#ffffff', emissiveIntensity: o.s === 'C' ? 0.04 : 0.28, roughness: 1 }), W - 0.9, 3.5, 0, 1.75, 2.955, PI, 0, !!o.flip);
    B.plane(texMat(T.signTex(o.shop, { bg: o.signBg || '#3a1512', fg: '#c9aa62', border: '#8a6c2f', worn: true }), { roughness: 0.6 }), Math.min(W * 0.5, [...o.shop].length * 0.95 + 0.5), 0.62, 0, 3.27, 2.94, PI);
    B.box(M.arcade, W, 0.02, 3.2, 0, 0, 1.4); // 骑楼下的水泥地
    for (const sx of [-1, 1]) {
      const cx = sx * (W / 2 - 0.4);
      B.cbox(M.trim, 0.7, 3.5, 0.7, cx, 0, 0.4); B.box(M.stoneDark, 0.9, 0.55, 0.9, cx, 0, 0.4); B.box(M.trim, 0.94, 0.22, 0.94, cx, 3.3, 0.4);
    }
    B.box(M.trim, W, 0.5, 0.75, 0, 3.5, 0.4);
    B.box(plaster('#7d766c'), W, 0.06, 3, 0, 3.94, 1.5);
    B.box(M.roofFloor, W - 0.05, 0.05, D - 0.05, 0, H, D / 2);
    B.cbox(M.trim, W, 0.55, 0.3, 0, H, 0.15); B.cbox(wall, W, 0.55, 0.3, 0, H, D - 0.15);
    const pw = W * 0.4;
    B.box(M.trim, pw, 0.85, 0.3, 0, H + 0.55, 0.15); B.box(M.trim, pw * 0.55, 0.45, 0.3, 0, H + 1.4, 0.15);
    B.box(M.trim, W + 0.24, 0.22, 0.6, 0, H - 0.22, 0.05);
    B.box(M.trim, W + 0.12, 0.2, 0.5, 0, 3.96, 0.1);
    if (o.neon) {
      const n = [...o.neon].length, sx = (o.vside || 1) * (W / 2 - 0.95);
      B.box(glow(T.neonTex(o.neon, o.neonC || '#ff5a3c'), 1.5), 0.16, 0.74 * n + 0.3, 0.8, sx, 4.6, -0.6);
      B.box(M.iron, 0.06, 0.06, 0.6, sx, 4.6 + 0.74 * n + 0.3, -0.05); B.box(M.iron, 0.06, 0.06, 0.6, sx, 4.62, -0.05);
    }
    B.cyl(M.iron, 0.05, 0.05, up, (o.vside || 1) * -(W / 2 - 0.5), 4, 0.18, 6);
    B.pop();
  }
  const COL = ['#b9ad8a', '#93a696', '#b89388', '#96a5b2', '#b9a166', '#b99a80', '#a094aa', '#9ea888'];
  const south = [
    [-32, -24, 10.4, { color: COL[3], f: 'B', s: 'B', shop: '老士多', neon: '士多', neonC: '#4ac8ff' }],
    [-24, -15, 11.2, { color: COL[0], f: 'A', s: 'A', shop: '凉茶铺' }],
    [-15, -7, 10.6, { color: COL[2], f: 'C', s: 'C', shop: '云吞面', flip: true }],
    [-7, 2, 11.6, { color: COL[1], f: 'B', s: 'A', shop: '双皮奶', neon: '糖水', neonC: '#ff4f7a', vside: -1, tint: '#e9f0e0', flip: true }],
    [2, 10, 10.4, { color: COL[4], f: 'A', s: 'B', shop: '肠粉王', tint: '#f3e6c8', flip: true }],
    [10, 19, 11.4, { color: COL[6], f: 'C', s: 'A', shop: '烧腊档', tint: '#e6dcf0' }],
    [19, 30, 10.8, { color: COL[5], f: 'B', s: 'C', shop: '煲仔饭', tint: '#f0dcc6' }],
  ];
  for (const [x0, x1, H, o] of south) qilou((x0 + x1) / 2, 24, 0, x1 - x0, H, o);
  qilou(-32, 10.5, -PI / 2, 9, 11.2, { color: COL[7], f: 'C', s: 'A', shop: '钵仔糕', tint: '#e2e8cf' });
  qilou(-32, 19.5, -PI / 2, 9, 10.4, { color: COL[2], f: 'A', s: 'C', shop: '牛杂档', tint: '#eed6cc' });
  // 东北角：一排朝南的骑楼（原戏台位置）
  qilou(16.5, -24, PI, 9, 10.8, { color: COL[4], f: 'A', s: 'C', shop: '五金行', tint: '#e8e0cf' });
  qilou(25.5, -24, PI, 9, 11.4, { color: COL[2], f: 'C', s: 'B', shop: '海味铺', flip: true, neon: '海味', neonC: '#ffb23c' });
  qilou(35, -24, PI, 10, 10.4, { color: COL[1], f: 'B', s: 'A', shop: '药材行', tint: '#dfe6d8' });
  B.cbox(plaster(COL[0]), 8, 11.6, 10, -36, 0, 29); B.cbox(M.brick, 8, 9, 1.5, -36, 0, 5.25); B.box(M.tileGray, 8.4, 0.3, 1.9, -36, 9, 5.25);
  for (const [x, h] of [[-2.5, 11.6], [14.5, 11.4], [-19.5, 11.2], [24, 10.8]]) { B.cyl(M.steel, 0.9, 0.9, 1.5, x + 2.4, h + 0.5, 30.5, 14); for (const a of [0, 2.1, 4.2]) B.box(M.iron, 0.08, 0.5, 0.08, x + 2.4 + Math.cos(a) * 0.7, h, 30.5 + Math.sin(a) * 0.7); }

  // ---------- 掩体与杂物（方盒子 + 照片） ----------
  const crate = (x, y, z, s = 1.1) => { B.cbox(M.crate, s, s, s, x, y, z); };
  const drum = (x, z, m = M.drumRed) => { B.cyl(m, 0.3, 0.3, 0.9, x, 0, z, 16); B.cyl(M.iron, 0.31, 0.31, 0.03, x, 0.3, z, 16); B.cyl(M.iron, 0.31, 0.31, 0.03, x, 0.6, z, 16); B.col(0.56, 0.9, 0.56, x, 0, z); };
  function sandbags(x, z, len, alongX = true, rows = 3) {
    const h = rows * 0.3; B.cbox(M.sandbag, alongX ? len : 0.62, h, alongX ? 0.62 : len, x, 0, z); B.box(M.sandbag, alongX ? len - 0.5 : 0.46, 0.15, alongX ? 0.46 : len - 0.5, x, h, z);
  }
  function container(x, z, alongX, ci, y = 0) {
    const L = 6.06, H = 2.59, W = 2.44, w = alongX ? L : W, d = alongX ? W : L;
    B.cbox(M.cont[ci], w, H, d, x, y, z);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box(M.iron, 0.14, H, 0.14, x + sx * (w / 2 - 0.05), y, z + sz * (d / 2 - 0.05));
    B.box(M.iron, w + 0.04, 0.12, d + 0.04, x, y, z); B.box(M.iron, w + 0.04, 0.1, d + 0.04, x, y + H - 0.08, z);
    const ex = alongX ? x + L / 2 + 0.03 : x, ez = alongX ? z : z + L / 2 + 0.03;
    for (const o of [-0.6, -0.2, 0.2, 0.6]) B.cyl(M.steel, 0.022, 0.022, H - 0.3, alongX ? ex : x + o, y + 0.15, alongX ? z + o : ez, 6);
  }
  function barrier(x, z, alongX = true) { const w = alongX ? 2.2 : 0.55, d = alongX ? 0.55 : 2.2; B.cbox(M.concrete, w, 0.45, d, x, 0, z); B.cbox(M.concrete, alongX ? 2.2 : 0.3, 0.5, alongX ? 0.3 : 2.2, x, 0.45, z); }
  crate(9.2, 0, 20.6); crate(10.3, 0, 20.9, 0.8); crate(-23.8, 0, 9.2); crate(11.8, 0, -20);
  crate(-19, 0, 18); crate(-19, 1.1, 18, 0.9); crate(-17.8, 0, 18.3, 0.9); crate(21, 0, 17); crate(22.1, 0, 17.2, 0.8); crate(-24, 0, -8); crate(-24, 1.1, -8, 0.8); crate(-22.9, 0, -7.6);
  crate(5, 0, -10); crate(6.1, 0, -10.2, 0.9); crate(37.5, 0, 22.5); crate(28.6, 0, -15.6, 0.9);
  container(35.4, 27, false, 1); container(35.4, 27.3, false, 2, 2.59); container(33.2, 31.6, true, 0); container(33, -17.6, true, 3); container(-33, -9, false, 2); container(-26, 13.2, true, 1);
  drum(-10.5, 20.5); drum(-9.8, 21.1, M.drumBlue); drum(18, 21.5, M.drumBlue); drum(-29.6, -13.2); drum(-28.9, -12.7, M.drumBlue); drum(9.5, -17); drum(29.2, -19.8, M.drumBlue); drum(36, 17);
  sandbags(-13, 9.5, 4.4); sandbags(-13, -9.6, 4.4); sandbags(-1, -13.5, 5, true); sandbags(-21, 13, 3.6, false); sandbags(14, 20, 3.6, false); sandbags(28, 17.5, 4.2); sandbags(22, -17.5, 4.2); sandbags(-6, -9, 3.6, false);
  barrier(-26, 21); barrier(-3, 19, false); barrier(12, 16.6); barrier(30, 20, false); barrier(-12, -15); barrier(17, -20.5); barrier(36, -20.5);

  // ---------- 大榕树（立体树干 + 照片树冠） ----------
  const leafSpots = [], treeSpots = [];
  const tree = (x, z, h, kind) => { treeSpots.push([x, z, h, kind]); B.col(0.8, h * 0.6, 0.8, x, 0, z); };
  const TREE = { x: -6, z: 13 };
  {
    const { x, z } = TREE;
    B.push(x, 0, z);
    B.cyl(M.bark, 1.15, 1.75, 5, 0, 0, 0, 14); B.cyl(M.bark, 0.95, 1.15, 5.5, 0, 5, 0, 14);
    for (let i = 0; i < 9; i++) { const a = i * 0.7 + 0.3, r = 1.45; B.cyl(M.bark, 0.2, 0.6, 3.8, Math.cos(a) * r, 0, Math.sin(a) * r, 8, { rz: Math.cos(a) * 0.25, rx: -Math.sin(a) * 0.25 }); }
    for (let i = 0; i < 7; i++) { const a = i * 0.9, r = 3.6; B.rod(M.bark, 0.3, V3(0, 9, 0), V3(Math.cos(a) * r, 10.6 + (i % 2), Math.sin(a) * r), 8); }
    for (let i = 0; i < 26; i++) {
      const a = i * 2.4, r = i < 8 ? rr(0, 2.5) : rr(3.5, 7.4), y = i < 8 ? rr(12.6, 14.8) : rr(10.8, 13), rad = rr(2.0, 3.1), ox = Math.cos(a) * r, oz = Math.sin(a) * r;
      B.blob(M.foliage, rad, ox, y, oz, 1.15, 0.72, 1.15, 0.22, i * 1.7);
      for (let k = 0; k < 26; k++) { const u = rnd() * 6.28, v = rr(-0.5, 1), q = Math.sqrt(1 - v * v); leafSpots.push([x + ox + Math.cos(u) * q * rad * 1.16, y + v * rad * 0.76, z + oz + Math.sin(u) * q * rad * 1.16, rr(0.9, 1.7)]); }
    }
    for (let i = 0; i < 26; i++) { const a = rnd() * 6.28, r = rr(3.4, 7.2), len = rr(2.5, 6.5); B.cyl(M.rope, 0.03, 0.015, len, Math.cos(a) * r, 10.8 - len, Math.sin(a) * r, 4); }
    B.col(2.7, 10, 2.7, 0, 0, 0);
    B.pop();
    B.cyl(M.concrete, 3.0, 3.1, 0.45, x, 0, z, 24); B.col(1.6, 0.45, 6, x - 2.2, 0, z); B.col(1.6, 0.45, 6, x + 2.2, 0, z); B.col(6, 0.45, 1.6, x, 0, z - 2.2); B.col(6, 0.45, 1.6, x, 0, z + 2.2);
  }
  for (const [x, z, h] of [[-22, 7.5, 12], [3, 8, 11], [29, 17, 10], [-36.5, -14.5, 11], [-21, -9, 11], [10, -8, 10]]) tree(x, z, h, 'streettree');
  for (const [x, z, h] of [[15, -16.5, 10.5], [37.5, -15.6, 10], [38, 19.5, 9.5], [-36, 7, 10]]) tree(x, z, h, 'kapoktree');

  // ---------- 电线、路灯 ----------
  const wire = (a, b, sag = 0.6) => { const mid = a.clone().lerp(b, 0.5); mid.y -= sag * 2; B.add(M.rope, new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a, mid, b), 14, 0.018, 3)); };
  for (let i = 0; i < 7; i++) { wire(V3(-30 + i * 9, 9.0 + (i % 2) * 0.5, 23.7), V3(-21 + i * 9, 8.7, 23.7), 0.35); wire(V3(-30 + i * 9, 8.4, 23.75), V3(-21 + i * 9, 8.2 + (i % 2) * 0.4, 23.75), 0.5); }
  wire(V3(-31.8, 9, 8), V3(-10, 9.5, 23.8), 1.2); wire(V3(-31.8, 8.4, 16), V3(-22, 9.3, 23.8), 0.6); wire(V3(2, 9.3, 23.8), V3(12, 6.2, 14.5), 0.5); wire(V3(-31.7, 8.2, 14), V3(-31.7, 8.6, 22), 0.4);
  for (let i = 0; i < 3; i++) wire(V3(12.5 + i * 9, 8.8, -23.7), V3(21 + i * 9, 8.5, -23.7), 0.4);
  wire(V3(10, 8.2, -22), V3(21, 8.8, -23.7), 0.5); wire(V3(-11, 8, -21.8), V3(-16, 5.2, -18), 0.5);
  const lampPos = [[-18, 15.5], [12, 15.5], [-2, -13], [22, -19], [-27, -12], [33, 21]];
  const lamps = [];
  for (const [x, z] of lampPos) {
    B.cyl(M.iron, 0.07, 0.1, 5.2, x, 0, z, 8); B.cyl(M.iron, 0.16, 0.2, 0.5, x, 0, z, 8); B.box(M.iron, 0.9, 0.06, 0.06, x + 0.4, 5.1, z);
    B.cyl(M.iron, 0.24, 0.1, 0.22, x + 0.8, 4.92, z, 10); B.sph(M.bulb, 0.13, x + 0.8, 4.88, z, 1, 1, 1, 1); B.col(0.3, 5.2, 0.3, x, 0, z);
    lamps.push(V3(x + 0.8, 4.7, z));
  }

  // ---------- 石牌坊（照片浮雕，见下）、石碑 ----------
  for (const x of [-16.45, -9.6]) B.col(1.35, 6.4, 1.2, x, 0, -7.6);
  B.cbox(M.stoneDark, 0.7, 2.0, 0.4, -17.2, 0, 6.4); B.plane(texMat(T.signTex('荔枝湾', { vertical: true, bg: '#6a655a', fg: '#8a2a1c', border: '#6a655a', worn: true }), { roughness: 0.9 }), 0.6, 1.8, -17.2, 1.05, 6.61, 0);

  // ---------- 得闲茶楼 ----------
  const manchu = A.pbr('manchu', { size: 512, normal: 2, rough: 0.3, roughK: 0.3 });
  const winMat = new THREE.MeshStandardMaterial({ ...manchu, color: '#b9b0a4', emissiveMap: manchu.map, emissive: '#ffe2b0', emissiveIntensity: 0.22, roughness: 1 });
  const winPlane = (w, h, x, y, z, ry = 0) => { const g = new THREE.PlaneGeometry(w, h); scaleUV(g, Math.max(1, Math.round(w / h)), 1); B.add(winMat, g, x, y, z, 0, ry, 0); };
  {
    const cx = -1, zf = -22, wallM = plaster('#b3a27e');
    B.cbox(wallM, 22, 8.4, 11.1, cx, 0, -28.45); B.col(22, 8.4, 0.6, cx, 0, -22.6);
    for (const sx of [-1, 1]) B.box(wallM, 0.3, 8.4, 0.62, cx + sx * 10.86, 0, -22.6);
    const tm = A.pbr('teahouse', { repeat: false, size: 1536, normal: 1.7, rough: 0.72, roughK: 0.3 });
    facade(tm, RECTS.tea, 21.9, 8.35, cx, 0.02, zf - 0.3, 0, { emis: 0.9, glass: 0.4 });
    B.plane(texMat(T.signTex('得闲茶楼', { bg: '#12382b', fg: '#c9aa62', border: '#8a6c2f', worn: true }), { roughness: 0.5 }), 5.2, 1.45, cx, 3.75, zf + 2.72, 0);
    for (const x of [-11.4, -6.4, -3.4, 1.4, 4.4, 9.4]) { B.cbox(M.red, 0.5, 4.2, 0.5, x, 0, zf + 2.3); B.box(M.stoneDark, 0.8, 0.5, 0.8, x, 0, zf + 2.3); }
    B.cbox(M.wood, 22, 0.3, 2.7, cx, 4.2, zf + 1.35);
    B.box(M.redDark, 22, 0.35, 0.3, cx, 3.85, zf + 2.55);
    for (let x = -11.8; x <= 9.81; x += 0.6) B.box(M.redDark, 0.07, 0.9, 0.07, x, 4.5, zf + 2.6);
    B.cbox(M.redDark, 22, 0.12, 0.16, cx, 5.4, zf + 2.6); B.col(22, 0.9, 0.16, cx, 4.5, zf + 2.6);
    B.cbox(M.redDark, 0.16, 1.0, 2.6, -11.9, 4.5, zf + 1.3); B.cbox(M.redDark, 0.16, 1.0, 2.6, 9.9, 4.5, zf + 1.3);
    for (const x of [-11.4, -3.4, 4.4, 9.4]) B.box(M.red, 0.3, 3.9, 0.3, x, 4.5, zf + 2.3);
    B.add(M.tileGreen, hipGeo(25.5, 16.5, 1.3, 16, 8.4), cx, 8.4, -28.6);
    B.col(24, 0.5, 15, cx, 8.4, -28.6); B.col(18, 0.5, 10, cx, 8.9, -28.6);
    B.cbox(wallM, 13, 2.4, 7.6, cx, 9.4, -28.6);
    B.add(M.tileGreen, hipGeo(16.5, 11, 2.0, 7, 0.5), cx, 11.8, -28.6);
    B.col(15, 0.7, 10, cx, 11.8, -28.6); B.col(9, 0.7, 5, cx, 12.5, -28.6);
    B.box(M.tileGreen, 7.4, 0.3, 0.5, cx, 13.75, -28.6);
  }

  // ---------- 西关大屋院子 ----------
  function wokEar(d, hw, rh, th) {
    const s = new THREE.Shape();
    s.moveTo(-d / 2, 0); s.lineTo(-d / 2, hw);
    s.quadraticCurveTo(-d * 0.42, hw + rh * 0.55, -d * 0.2, hw + rh * 0.8);
    s.bezierCurveTo(-d * 0.24, hw + rh * 1.55, d * 0.24, hw + rh * 1.55, d * 0.2, hw + rh * 0.8);
    s.quadraticCurveTo(d * 0.42, hw + rh * 0.55, d / 2, hw); s.lineTo(d / 2, 0); s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: th, bevelEnabled: false, curveSegments: 12 });
    g.translate(0, 0, -th / 2); g.rotateY(PI / 2); scaleUV(g, 0.3); return g;
  }
  {
    B.cbox(M.brick, 10.5, 5, 0.6, -34.75, 0, -18); B.cbox(M.brick, 10.5, 5, 0.6, -21.25, 0, -18);
    B.cbox(M.brick, 3, 1.8, 0.6, -28, 3.2, -18); B.cbox(M.brick, 0.6, 5, 16.6, -16, 0, -26);
    B.box(M.tileGray, 24.6, 0.25, 1.0, -28, 5, -18); B.box(M.tileGray, 1.0, 0.25, 16.6, -16, 5, -26);
    B.box(M.concrete, 3.6, 0.3, 0.9, -28, 3.05, -18); B.box(M.concrete, 0.35, 3.1, 0.8, -29.7, 0, -18); B.box(M.concrete, 0.35, 3.1, 0.8, -26.3, 0, -18);
    B.plane(texMat(T.signTex('西关大屋', { bg: '#2a1810', fg: '#c9aa62', border: '#8a6c2f', worn: true })), 2.6, 0.75, -28, 4.0, -17.68, 0);
    B.cbox(M.brick, 20, 5.2, 6, -28, 0, -31);
    const tri = new THREE.Shape(); tri.moveTo(-3.6, 0); tri.lineTo(3.6, 0); tri.lineTo(0, 2.4); tri.closePath();
    const roof = new THREE.ExtrudeGeometry(tri, { depth: 20, bevelEnabled: false }); roof.translate(0, 0, -10); roof.rotateY(PI / 2); scaleUV(roof, 0.4);
    B.add(M.tileGray, roof, -28, 5.2, -31);
    for (const x of [-38.2, -17.8]) B.add(M.brick, wokEar(7, 5.2, 2.6, 0.5), x, 0, -31);
    for (const x of [-34, -28, -22]) { winPlane(2.0, 2.6, x, 2.2, -27.97); B.box(M.woodDark, 2.3, 0.14, 0.14, x, 3.52, -27.95); B.box(M.woodDark, 2.3, 0.14, 0.14, x, 0.88, -27.95); }
    for (let i = 0; i < 9; i++) B.cyl(M.woodDark, 0.09, 0.09, 3.0, -31.1, 0.3 + i * 0.33, -17.6, 8, { rz: PI / 2 });
  }

  B.finish();
  const colliders = B.colliders;

  // ---------- 照片面片：叶簇、整树、街道杂物、地面贴花 ----------
  const cardMat = (cut, o = {}) => new THREE.MeshStandardMaterial({ map: cut.tex, alphaTest: 0.5, alphaToCoverage: true, roughness: 0.9, ...o });
  const upNormals = (geo) => { const n = geo.attributes.normal; for (let i = 0; i < n.count; i++) n.setXYZ(i, 0, 1, 0); const ix = Array.from(geo.index.array), rev = []; for (let i = 0; i < ix.length; i += 3) rev.push(ix[i], ix[i + 2], ix[i + 1]); geo.setIndex(ix.concat(rev)); return geo; };
  {
    const cut = A.cutout('leafcard', 'b', { width: 512, bleed: [40, 70, 30] }), lt = cut ? cut.tex : T.leafTex();
    const mat = new THREE.MeshStandardMaterial({ map: lt, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.6, color: cut ? '#a9b498' : '#6f8658' });
    const im = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), mat, leafSpots.length), d = new THREE.Object3D();
    leafSpots.forEach(([x, y, z, sc], i) => { d.position.set(x, y, z); d.rotation.set(rr(-0.7, 0.7), rnd() * 6.28, rr(-0.5, 0.5)); d.scale.setScalar(sc * (cut ? 1.5 : 1)); d.updateMatrix(); im.setMatrixAt(i, d.matrix); });
    im.castShadow = true; im.receiveShadow = false; im.userData.noAO = true;
    im.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: lt, alphaTest: 0.5 });
    scene.add(im);
  }
  {
    const cuts = { kapoktree: A.cutout('kapoktree', 'b', { width: 1024, bleed: [70, 40, 30] }), streettree: A.cutout('streettree', 'b', { width: 1254, bleed: [40, 60, 30] }) };
    const all = [...treeSpots]; if (cuts.streettree) all.push([TREE.x, TREE.z, 14.5, 'streettree']); // 大榕树再叠一层照片树冠
    for (const [x, z, h, kind] of all) {
      const cut = cuts[kind]; if (!cut) continue;
      const Ht = h * 1.25, Wd = Ht * cut.aspect, geo = upNormals(new THREE.PlaneGeometry(Wd, Ht)); geo.translate(0, Ht / 2 - Ht * 0.02, 0);
      const mat = cardMat(cut, { color: kind === 'kapoktree' ? '#cfc2bc' : '#c9c9bc', emissiveMap: cut.tex, emissive: '#ffffff', emissiveIntensity: 0.06 });
      const dm = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: cut.tex, alphaTest: 0.5 }), r0 = rnd() * 3;
      for (let k = 0; k < 3; k++) { const m = new THREE.Mesh(geo, mat); m.position.set(x, 0, z); m.rotation.y = r0 + k * 1.047; m.castShadow = k === 0; m.customDepthMaterial = dm; m.userData.noAO = true; scene.add(m); }
    }
  }
  // 石牌坊：照片按轮廓挤出 0.9 米厚
  {
    const cut = A.cutout('paifang', 'm', { width: 1448, bleed: [118, 116, 108] });
    if (cut) {
      const W = 10.28, H = W / cut.aspect, ge = reliefGeo(cut.canvas, W, H, 0.9, 220);
      const f = new THREE.Mesh(ge.face, new THREE.MeshStandardMaterial({ map: cut.tex, alphaTest: 0.5, alphaToCoverage: true, roughness: 0.95 })), sd = new THREE.Mesh(ge.side, new THREE.MeshStandardMaterial({ map: cut.tex, roughness: 0.95, color: '#b9b6ae' }));
      for (const m of [f, sd]) { m.position.set(-13, 0, -7.6); m.castShadow = m.receiveShadow = true; scene.add(m); }
      const tt = T.textTex('西关', '#2a130c');
      for (const s of [1, -1]) { const q = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 0.74), new THREE.MeshStandardMaterial({ map: tt, transparent: true, depthWrite: false, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2 })); q.position.set(-13, 5.78, -7.6 + s * 0.455); q.rotation.y = s > 0 ? 0 : PI; scene.add(q); }
    }
  }
  // 地面污渍（把杂物“压”在地上）
  const stainTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); const gr = g.createRadialGradient(64, 64, 4, 64, 64, 62); gr.addColorStop(0, 'rgba(0,0,0,0.75)'); gr.addColorStop(0.6, 'rgba(0,0,0,0.35)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); for (let i = 0; i < 14; i++) { g.globalCompositeOperation = 'destination-out'; g.fillStyle = `rgba(0,0,0,${rr(0.2, 0.6)})`; g.beginPath(); g.arc(rr(10, 118), rr(10, 118), rr(4, 16), 0, 7); g.fill(); } return new THREE.CanvasTexture(c); })();
  const stains = [];
  const stain = (x, z, sx, sz = sx, y = 0.012) => stains.push([x, y, z, sx, sz]);
  // 固定朝向的面片（贴墙停放的电动车等）
  function card(cut, x, z, h, ry, y = 0) {
    if (!cut) return; const w = h * cut.aspect, geo = upNormals(new THREE.PlaneGeometry(w, h)); geo.translate(0, h / 2, 0);
    const m = new THREE.Mesh(geo, cardMat(cut)); m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = true; m.receiveShadow = true; m.userData.noAO = true;
    m.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: cut.tex, alphaTest: 0.5 }); scene.add(m);
    stain(x, z, w * 1.1, 1.2);
  }
  // 始终绕竖轴朝向相机的面片（盆栽、凳子、垃圾桶、电线杆）
  const sprites = [];
  function sprite(cut, x, z, h, y = 0, col = 0) {
    if (!cut) return; const w = h * cut.aspect, geo = upNormals(new THREE.PlaneGeometry(w, h)); geo.translate(0, h / 2, 0);
    const m = new THREE.Mesh(geo, cardMat(cut)); m.position.set(x, y, z); m.receiveShadow = true; m.userData.noAO = true; scene.add(m); sprites.push(m);
    stain(x, z, Math.max(1, w * 0.9)); if (col) colliders.push({ min: V3(x - col, y, z - col), max: V3(x + col, y + h * 0.8, z + col) });
  }
  {
    const C = (n, w, bleed) => A.cutout(n, 'b', { width: w, bleed });
    const sc = C('scooters', 1024, [40, 40, 44]), pl = C('plants', 768, [50, 70, 40]), st = C('stools', 768, [90, 50, 45]), bn = C('bins', 768, [50, 60, 50]), po = C('pole', 512, [50, 50, 50]);
    // 电动车：停在骑楼柱外侧
    for (const x of [-28, -19.5, -3, 6, 14.5, 24.5]) card(sc, x, 23.15, 1.25, PI);
    card(sc, -31.2, 10.5, 1.25, -PI / 2); card(sc, -31.2, 19.5, 1.25, -PI / 2);
    for (const x of [16.5, 34]) card(sc, x, -23.15, 1.25, 0);
    // 盆栽
    for (const [x, z] of [[-23.4, 23.3], [-7.6, 23.3], [10.6, 23.3], [19.6, 23.3], [-31.3, 15], [12.6, -23.3], [30.6, -23.3], [-10.6, -19.2], [9, -19.2], [-17, -18.9]]) sprite(pl, x, z, 1.5);
    // 折叠桌和塑料凳
    for (const [x, z] of [[-7, -16.5], [5.5, -16.8], [-21, 20.5], [14, 18], [26, -20.5]]) sprite(st, x, z, 1.15, 0, 0.5);
    // 垃圾桶和纸箱
    for (const [x, z] of [[-31, 6.2], [1.2, 23.2], [29.2, 23.4], [10.8, -24.5], [-17.2, -19.4], [38.6, -22.6], [-38.6, 16]]) sprite(bn, x, z, 1.35, 0, 0.45);
    // 电线杆
    for (const [x, z] of [[-24, 22.6], [2, 22.6], [19, 22.6], [21, -22.6], [-31.4, 5.8], [8.8, -20.8]]) sprite(po, x, z, 9.5, 0, 0.22);
  }
  // 井盖、落叶、污渍
  {
    const flat = (tex, o = {}) => new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -2, ...o });
    const place = (mat, x, z, w, d = w, y = 0.012, ry = rnd() * 6.28) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat); m.rotation.set(-PI / 2, 0, ry); m.position.set(x, y, z); m.receiveShadow = true; scene.add(m); };
    if (A.has('manhole')) {
      const c = A.canvas('manhole', 256, 256), g = c.getContext('2d'); g.globalCompositeOperation = 'destination-in'; const gr = g.createRadialGradient(128, 128, 96, 128, 128, 127); gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const mm = flat(t, { metalness: 0.3, roughness: 0.6 });
      for (const [x, z] of [[-24, 17], [-9, 19], [8, 19.5], [22, 19], [-20, -12], [2, -11], [20, -20], [32, 22]]) place(mm, x, z, 1.1, 1.1, 0.013, pick([0, PI / 2]));
    }
    const lv = A.cutout('leaves', 'b', { width: 512, bleed: [90, 70, 40] });
    if (lv) { const lm = flat(lv.tex, { alphaTest: 0.3, transparent: false, depthWrite: true, color: '#8f8676' }); for (const [tx, tz] of [[TREE.x, TREE.z], ...treeSpots.map((s) => [s[0], s[1]])]) for (let i = 0; i < 5; i++) { const a = rnd() * 6.28, r = rr(1.5, 6.5); const x = tx + Math.cos(a) * r, z = tz + Math.sin(a) * r; if (Math.abs(x) < 39 && Math.abs(z) < 33 && !(Math.abs(z) < 4.6 && x < 8) && !(Math.abs(z) < 14.2 && x > 8)) place(lm, x, z, rr(0.9, 1.5), undefined, 0.014); } }
    // 墙根、柱脚和随机油渍
    for (let x = -31; x < 30; x += rr(2.2, 4.5)) stain(x, 23.6 + rr(-0.2, 0.3), rr(1.6, 3.2), rr(0.8, 1.4));
    for (let x = 13; x < 39; x += rr(2.2, 4.5)) stain(x, -23.6 + rr(-0.3, 0.2), rr(1.6, 3.2), rr(0.8, 1.4));
    for (let z = 7; z < 23; z += rr(2.2, 4)) stain(-31.6, z, rr(0.8, 1.4), rr(1.6, 3));
    for (let i = 0; i < 36; i++) { const x = rr(-38, 38), z = rr(-32, 32); if ((Math.abs(z) < 5.2 && x < 8.6) || (Math.abs(z) < 14.8 && x > 7.6)) continue; stain(x, z, rr(0.8, 2.6)); }
    const sm = new THREE.MeshBasicMaterial({ map: stainTex, color: '#0c0a08', transparent: true, opacity: 0.42, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 });
    const im = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), sm, stains.length), d = new THREE.Object3D();
    stains.forEach(([x, y, z, sx, sz], i) => { d.position.set(x, y, z); d.rotation.set(-PI / 2, 0, rnd() * 6.28); d.scale.set(sx, sz, 1); d.updateMatrix(); im.setMatrixAt(i, d.matrix); });
    im.userData.noAO = true; scene.add(im);
  }

  // ---------- 路灯点光 ----------
  if (!opt.lite) { for (const p of lamps) { const l = new THREE.PointLight('#ffc98a', 40, 20, 2); l.position.copy(p); scene.add(l); } const l = new THREE.PointLight('#ff9a5c', 34, 16, 2); l.position.set(-1, 3.0, -18.4); scene.add(l); }

  // ---------- 水面（偏浑的河涌水） ----------
  const waterMat = new THREE.ShaderMaterial({
    uniforms: { t: { value: 0 }, camPos: { value: V3(0, 0, 0) }, fogC: { value: HOR.clone() }, sunDir: { value: SUN_DIR }, fogD: { value: 0.003 }, skyMap: { value: sky.tex } },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }',
    fragmentShader: `
      uniform float t, fogD; uniform vec3 camPos, fogC, sunDir; uniform sampler2D skyMap; varying vec3 vW;
      vec3 skyAt(vec3 d){ vec2 uv=vec2(atan(d.z,d.x)/6.2831853+.5, asin(clamp(d.y,-1.,1.))/3.14159265+.5); vec3 c=texture2D(skyMap,uv).rgb; float lm=dot(c,vec3(.3,.55,.15)); c=mix(vec3(lm),c,.85); return pow(c,vec3(1.12))*1.9; }
      float h(vec2 p){ return sin(p.x*1.3+t*1.1)*.33+sin(p.y*1.7-t*.9)*.33+sin((p.x+p.y)*.7+t*.6)*.33; }
      float hh(vec2 p){ return h(p*.9)+.5*h(p*2.3+7.)+.2*h(p*6.1-2.); }
      void main(){
        vec2 p=vW.xz; float d=length(camPos-vW);
        float fw=fwidth(p.x)+fwidth(p.y); float lod=clamp(1.-fw*1.6,0.,1.)*clamp(1.-d/140.,0.,1.);
        float e=.1, n0=hh(p);
        float wind=smoothstep(-.25,.45,h(p*.045+t*.02)); float amp=mix(.35,1.5,wind)*lod;
        vec3 N=normalize(vec3((n0-hh(p+vec2(e,0.)))*amp,1.,(n0-hh(p+vec2(0.,e)))*amp));
        vec3 V=normalize(camPos-vW); vec3 R=reflect(-V,N);
        float fres=.03+.97*pow(clamp(1.-dot(V,N),0.0001,1.),5.);
        vec3 col=mix(vec3(.018,.03,.022),vec3(.05,.07,.045),.5+.5*n0*lod);
        float sd=max(dot(normalize(vec3(R.x,max(R.y,.02),R.z)),sunDir),0.0001);
        vec3 skyc=mix(skyAt(normalize(vec3(R.x,max(R.y,.04),R.z))), fogC, .2)*mix(1.,.72,wind) + vec3(1.,.6,.3)*pow(sd,6.)*.35;
        col=mix(col,skyc,fres);
        col+=vec3(1.,.72,.38)*pow(sd,420.)*10.*lod + vec3(1.,.6,.3)*pow(sd,60.)*.6*fres;
        float f=1.-exp(-pow(d*fogD,2.)); col=mix(col,fogC,f);
        gl_FragColor=vec4(col,1.);
      }`,
  });
  const water = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), waterMat); water.rotation.x = -PI / 2; water.position.set(300, -1.0, 0); scene.add(water);

  // ---------- 天穹 ----------
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { map: { value: sky.tex }, sunDir: { value: SUN_DIR }, hor: { value: HOR.clone() } },
    vertexShader: 'varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform sampler2D map; uniform vec3 sunDir, hor; varying vec3 vD;
      void main(){ vec3 d=normalize(vD);
        vec2 uv=vec2(atan(d.z,d.x)/6.2831853+.5, asin(clamp(d.y,-1.,1.))/3.14159265+.5);
        vec3 col=texture2D(map,uv).rgb; float lm=dot(col,vec3(.3,.55,.15)); col=mix(vec3(lm),col,.85); col=pow(col,vec3(1.12))*1.9;
        float s=max(dot(d,sunDir),0.0001); col+=vec3(1.,.62,.3)*pow(s,24.)*.8 + vec3(1.,.8,.5)*pow(s,90.)*2.2;
        col=mix(col,hor,smoothstep(.09,-.01,d.y)*.92);
        gl_FragColor=vec4(col,1.); }`,
  });
  const skyMesh = new THREE.Mesh(new THREE.SphereGeometry(2200, 48, 24), skyMat); skyMesh.userData.noAO = true; scene.add(skyMesh);

  // ---------- 外围城区 ----------
  {
    const N = 170, geo = new THREE.BoxGeometry(1, 1, 1); scaleUV(geo, 1.5, 1.5);
    const ap = A.pbr('apartment', { size: 512, normal: 1.4, rough: 0.85, roughK: 0.2 });
    const walls = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ ...ap, emissiveMap: ap.map, emissive: '#ffffff', emissiveIntensity: 0.22, roughness: 1 }), N), roofs = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), M.roofFloor, N);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), col = new THREE.Color();
    let n = 0;
    while (n < N) {
      const x = rr(-125, 36), z = rr(-120, 120);
      if (x > -47 && Math.abs(z) < 41) continue;
      const tall = false;
      const w = rr(8, 16), d = rr(8, 16), h = tall ? rr(24, 60) : rr(7, 14);
      m4.compose(V3(x, h / 2, z), q, V3(w, h, d)); walls.setMatrixAt(n, m4);
      col.set(pick(['#d8cfc0', '#c9c2b6', '#b9bcbf', '#d2c4b0', '#c6b9aa', '#aeb6b8'])); walls.setColorAt(n, col);
      m4.compose(V3(x, h + 0.3, z), q, V3(w + 0.8, 0.6, d + 0.8)); roofs.setMatrixAt(n, m4);
      n++;
    }
    walls.instanceColor.needsUpdate = true; scene.add(walls, roofs);
    const B2 = new Builder(scene);
    for (let i = 0; i < 60; i++) { let x, z; do { x = rr(-120, 39); z = rr(-110, 110); } while (x > -44 && Math.abs(z) < 38); const s = rr(3.5, 6.5); B2.blob(M.foliage, s, x, s * 0.9, z, 1, 0.85, 1, 0.25, i); }
    for (const [x, z, ry] of [[-10, -42, 0], [-46, -12, PI / 2], [34, 42, 0], [-48, 20, PI / 2]]) {
      B2.push(x, 0, z, ry);
      B2.box(M.brick, 14, 6, 7, 0, 0, 0);
      const tri = new THREE.Shape(); tri.moveTo(-4, 0); tri.lineTo(4, 0); tri.lineTo(0, 2.6); tri.closePath();
      const roof = new THREE.ExtrudeGeometry(tri, { depth: 14, bevelEnabled: false }); roof.translate(0, 0, -7); roof.rotateY(PI / 2); scaleUV(roof, 0.4);
      B2.add(M.tileGray, roof, 0, 6, 0);
      B2.add(M.brick, wokEar(7.6, 6, 2.8, 0.5), -7.1, 0, 0); B2.add(M.brick, wokEar(7.6, 6, 2.8, 0.5), 7.1, 0, 0);
      B2.pop();
    }
    B2.finish();
  }

  // ---------- 远景：照片背景（预先揉进雾色） ----------
  const tower = { glow: null };
  {
    const hazeMat = (tex, haze, gain, rep) => new THREE.ShaderMaterial({ side: THREE.BackSide, fog: false, uniforms: { map: { value: tex }, fogC: { value: HOR.clone() }, haze: { value: haze }, gain: { value: gain }, rep: { value: rep } },
      vertexShader: 'uniform float rep; varying vec2 vUv; void main(){ vUv=vec2((1.-uv.x)*rep,uv.y); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'uniform sampler2D map; uniform vec3 fogC; uniform float haze, gain; varying vec2 vUv; void main(){ vec4 t=texture2D(map,vUv); if(t.a<0.5) discard; float h=haze*(1.-.3*vUv.y); gl_FragColor=vec4(mix(t.rgb*gain,fogC,h),1.); }' });
    const arc = (cut, R, cx, cz, mid, span, rep, haze, gain, y0) => { if (!cut) return 0; cut.tex.wrapS = THREE.MirroredRepeatWrapping; cut.tex.needsUpdate = true; const h = (R * span / rep) / cut.aspect;
      const m = new THREE.Mesh(new THREE.CylinderGeometry(R, R, h, 72, 1, true, mid - span / 2, span), hazeMat(cut.tex, haze, gain, rep)); m.position.set(cx, y0 + h / 2, cz); m.userData.noAO = true; scene.add(m); return h; };
    const east = A.cutout('skylineEast', 'm', { width: 1774, bleed: [150, 140, 130] }), city = A.cutout('skylineCity', 'm', { width: 1774, bleed: [140, 135, 128] });
    const R = 520, span = 1.745, hE = arc(east, R, 0, 0, PI / 2, span, 1, 0.5, 1.0, -3);
    arc(city, 175, -5, 0, PI * 1.5, 4.363, 6, 0.3, 0.9, -1);
    // 通关时的彩虹灯：叠在照片里广州塔的位置
    if (hE) { const c = document.createElement('canvas'); c.width = 32; c.height = 256; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 256, 0, 0); for (let i = 0; i <= 10; i++) gr.addColorStop(i / 10, `hsl(${330 - i * 30},100%,60%)`); g.fillStyle = gr; g.fillRect(0, 0, 32, 256); const hg = g.createLinearGradient(0, 0, 32, 0); hg.addColorStop(0, 'rgba(0,0,0,1)'); hg.addColorStop(0.5, 'rgba(0,0,0,0)'); hg.addColorStop(1, 'rgba(0,0,0,1)'); g.globalCompositeOperation = 'destination-out'; g.fillStyle = hg; g.fillRect(0, 0, 32, 256);
      const th = PI / 2 + span / 2 - 0.595 * span, w = 0.03 * span * R, hh = hE * 0.41, t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), new THREE.MeshBasicMaterial({ map: t, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, color: new THREE.Color(2.2, 2.2, 2.2), toneMapped: false }));
      m.position.set(Math.sin(th) * (R - 4), -3 + hh / 2, Math.cos(th) * (R - 4)); m.lookAt(0, m.position.y, 0); m.visible = false; m.userData.noAO = true; scene.add(m); tower.glow = m; }
  }

  // ---------- 接口 ----------
  const state = { party: false };
  function update(dt, t, camPos) {
    waterMat.uniforms.t.value = t; waterMat.uniforms.camPos.value.copy(camPos);
    skyMesh.position.set(camPos.x, 0, camPos.z);
    for (const m of sprites) m.rotation.y = Math.atan2(camPos.x - m.position.x, camPos.z - m.position.z);
    if (state.party && tower.glow) tower.glow.material.opacity = 0.75 + Math.sin(t * 2.2) * 0.2;
  }
  function party() { state.party = true; if (tower.glow) tower.glow.visible = true; }
  function setFog(density) { waterMat.uniforms.fogD.value = density; }

  const spawns = [V3(-37, 0, 15), V3(-36, 0, -8), V3(-28, 0, -24), V3(37.5, 0, 22), V3(37, 0, -20), V3(14.5, 0, -26), V3(-37, 0, 22), V3(30, 0, 22), V3(26, 0, -26)];
  const airSpawns = [V3(60, 26, 0), V3(-10, 30, 50), V3(-60, 28, -10), V3(20, 30, -55), V3(70, 22, 30)];

  return { refl: reflU, colliders, movers: [], update, party, setFog, spawns, airSpawns, spawn: { pos: V3(-1, 0.01, -15.5), yaw: PI }, tree: TREE, horizon: HOR };
}
