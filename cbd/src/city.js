// 珠江新城 · 花城广场一带：地面、湖、江、地标塔楼、背景楼群、树、街道家具、车流
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { L, lawnSd, ellSd } from './layout.js';
import { glass, groundMat, waterMat, foliageMat, leafTex, toon, lam, STYLES, cladMat } from './mats.js';
import { makeStreet, carGeos, busGeos } from './street.js';
import { loft, rect, box, cyl, rod, place, Batch } from './geo.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { SUN_DIR } from './sky.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
let seed = 20261111;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const rr = (a, b) => a + (b - a) * rnd();
const pick = (a) => a[Math.floor(rnd() * a.length)];

function textTex(text, { w = 512, h = 128, font = 'bold 84px "Microsoft YaHei", "PingFang SC", sans-serif', color = '#fff', bg = null, sub = null } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); }
  g.fillStyle = color; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, w / 2, sub ? h * 0.42 : h / 2);
  if (sub) { g.font = `600 ${Math.round(h * 0.16)}px "Segoe UI", sans-serif`; g.fillText(sub, w / 2, h * 0.8); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function frondTex() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 192; const g = c.getContext('2d');
  g.strokeStyle = '#e8e8e8'; g.lineCap = 'round'; g.lineWidth = 7; g.beginPath(); g.moveTo(4, 96); g.lineTo(500, 96); g.stroke();
  for (let i = 0; i < 30; i++) {
    const x = 12 + i * 16, len = 86 * Math.sin(Math.PI * Math.min(1, (i + 4) / 35)) + 8, v = 196 + ((i * 37) % 60);
    g.fillStyle = `rgb(${v},${v},${v})`;
    for (const sgn of [-1, 1]) { g.beginPath(); g.moveTo(x - 6, 96); g.lineTo(x + 7, 96); g.lineTo(x + 34, 96 + sgn * len); g.lineTo(x + 26, 96 + sgn * len); g.closePath(); g.fill(); }
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function hedgeTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.fillStyle = '#2c6f30'; g.fillRect(0, 0, 128, 128);
  let s = 11; const r = () => (s = (s * 16807) % 2147483647) / 2147483647, cols = ['#3f8f35', '#52a03a', '#245f2b', '#6aae3c', '#357f30'];
  for (let i = 0; i < 260; i++) { const x = r() * 128, y = r() * 128, a = r() * 6.28; g.fillStyle = cols[Math.floor(r() * 5)]; for (const [ox, oy] of [[0, 0], [128, 0], [-128, 0], [0, 128], [0, -128]]) { g.save(); g.translate(x + ox, y + oy); g.rotate(a); g.beginPath(); g.ellipse(0, 0, 9, 4, 0, 0, 6.283); g.fill(); g.restore(); } }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1 / 1.3, 1 / 1.3); t.anisotropy = 8; return t;
}

export function buildCity(scene, tex) {
  const B = new Batch(), NS = new Batch();        // NS = 不投影的远处东西
  const colliders = [], circles = [], blockers = [];
  const std = (c, r, m = 0, e = 0.6) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m, envMapIntensity: e });
  const M = {
    white: std('#f1f2f0', 0.5), light: std('#dfe3e6', 0.62), grey: lam('#9aa3ad'), dark: std('#3d444e', 0.42, 0.2), stone: std('#e6ded0', 0.86, 0, 0.4), wood: lam('#c08f5e'),
    steel: std('#c9d2da', 0.3, 0.85, 0.9), red: lam('#d84a3a'), trunk: lam('#8d7763'), palmTrunk: lam('#b8b1a2'), hedge: toon({ color: '#ffffff', map: hedgeTex() }), branch: lam('#7d6a58'),
    lampGlow: new THREE.MeshBasicMaterial({ color: '#fff6dc' }), tower: std('#fbfaf6', 0.38, 0.1), core: lam('#8ec0e6'), pebbleA: lam('#e9e9e4', { flatShading: true }), pebbleB: lam('#4a4f58', { flatShading: true }),
  };
  // 裙楼底层的店面：两条手绘店面贴图轮流用，一条贴图 = 11 米宽 × 5.5 米高
  const SHOP_H = 5.5, shopMats = ['shopsA', 'shopsB'].map((n) => { let t = tex[n]; if (!t && tex.shopsA) { t = tex.shopsA.clone(); t.needsUpdate = true; t.offset.x = 0.5; } if (!t) return glass('shop'); t.repeat.set(1 / 11, 1 / SHOP_H); return new THREE.MeshLambertMaterial({ map: t, emissive: '#ffffff', emissiveMap: t, emissiveIntensity: 0.22 }); });
  let shopI = 0; const shopMat = () => shopMats[shopI++ % 2];
  if (tex.flowers) { const ft = tex.flowers.clone(); ft.needsUpdate = true; ft.repeat.set(1 / 3.2, 1 / 3.2); M.bloom = new THREE.MeshLambertMaterial({ map: ft }); } else M.bloom = M.hedge;
  const solid = (x0, x1, z0, z1, h = 400) => { colliders.push({ x0, x1, z0, z1 }); blockers.push({ x0, x1, z0, z1, y1: h }); };
  const plantQ = [];
  const ST = makeStreet({ scene, B, M, tex, L, colliders, circles, rnd, rr, plantQ });
  const E = L.SIDE_OUT, clad = cladMat(tex.cladding), matOf = (st) => (st === 'stone' ? clad : glass(st));
  const BRIDGE_Z = [-20, 36];

  // ================= 地面与水 =================
  const gm = groundMat(tex);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(3600, 2100).rotateX(-Math.PI / 2).translate(0, 0, L.BANK - 1050), gm);
  ground.receiveShadow = true; scene.add(ground);
  const river = new THREE.Mesh(new THREE.PlaneGeometry(3600, L.RIVER_W).rotateX(-Math.PI / 2).translate(0, -2.6, L.BANK + L.RIVER_W / 2), waterMat('#2a5a76', '#6a9fb8', 3));
  river.receiveShadow = true; scene.add(river);
  const southZ = L.BANK + L.RIVER_W;
  const south = new THREE.Mesh(new THREE.PlaneGeometry(3600, 1400).rotateX(-Math.PI / 2).translate(0, 0, southZ + 700), lam('#a9c2ae'));
  scene.add(south);
  B.add(M.stone, box(3600, 3.2, 1.2, 0, -3.2, L.BANK + 0.6)); NS.add(M.stone, box(3600, 3.2, 1.2, 0, -3.2, southZ - 0.6));
  // 江边栏杆
  for (let x = -330; x <= 330; x += 3) B.add(M.white, box(0.12, 1.1, 0.12, x, 0, L.BANK - 1.2));
  B.add(M.white, box(664, 0.1, 0.16, 0, 1.1, L.BANK - 1.2)).add(M.white, box(664, 0.06, 0.08, 0, 0.6, L.BANK - 1.2));
  // 海心沙
  NS.add(lam('#8fc47a'), box(420, 2.8, 110, 0, -2.8, L.BANK + 150)).add(M.white, box(424, 0.5, 114, 0, -3.2, L.BANK + 150));
  {
    const hz = L.BANK + 150, isleG = lam('#4fa63c', { flatShading: true }), isleP = lam('#f09abf', { flatShading: true });   // 体育场：一圈看台 + 斜撑桅杆 + 两侧树带
    NS.add(M.white, place(new THREE.TorusGeometry(40, 7, 8, 48).rotateX(Math.PI / 2).scale(1.25, 0.55, 0.8).toNonIndexed(), 0, 3, hz));
    NS.add(lam('#6fbf73'), cyl(34, 34, 0.4, 0, 0, hz, 40));
    for (let i = 0; i < 8; i++) { const a = (i / 8) * 6.283 + 0.39, x = Math.cos(a) * 52, z = Math.sin(a) * 34; NS.add(M.white, rod(V3(x * 1.25, 0, hz + z * 1.25), V3(x * 0.8, 34, hz + z * 0.8), 0.7, 6)); }
    for (let x = -196; x <= 196; x += 14) { if (Math.abs(x) < 80) continue; for (const dz of [-34, 0, 34]) NS.add(rnd() < 0.3 ? isleP : isleG, place(new THREE.IcosahedronGeometry(rr(4.5, 6.5), 1), x + rr(-3, 3), 5.5, hz + dz + rr(-4, 4))); }
  }

  // 湖
  const K = L.LAKE;
  const lake = new THREE.Mesh(new THREE.CircleGeometry(1, 64).rotateX(-Math.PI / 2).scale(K.rx, 1, K.rz).translate(K.x, 0.06, K.z), waterMat('#1c5a6e', '#4f9fa8', 1));
  lake.receiveShadow = true; scene.add(lake);
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2, x = K.x + Math.cos(a) * (K.rx + 0.4), z = K.z + Math.sin(a) * (K.rz + 0.4);
    const tx = -Math.sin(a) * K.rx, tz = Math.cos(a) * K.rz, len = Math.hypot(tx, tz) * (Math.PI * 2 / 96) + 0.08;
    B.add(M.stone, box(len, 0.42, 0.8, x, 0, z, -Math.atan2(tz, tx)));
  }
  // 喷泉
  const jets = [];
  const plume = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 256; const g = c.getContext('2d');
    for (let y = 0; y < 256; y++) { const t = 1 - y / 256, w = 5 + 24 * Math.pow(t, 1.6), a = 0.95 - 0.5 * t; const gr = g.createLinearGradient(32 - w, 0, 32 + w, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.5, `rgba(255,255,255,${a})`); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, y, 64, 1); }
    for (let i = 0; i < 90; i++) { const y = Math.random() * 120, x = 32 + (Math.random() - 0.5) * 56 * (1 - y / 256); g.fillStyle = 'rgba(255,255,255,0.8)'; g.beginPath(); g.arc(x, y, 0.8 + Math.random() * 1.6, 0, 6.3); g.fill(); }
    return new THREE.CanvasTexture(c); })();
  const jetMat = new THREE.MeshBasicMaterial({ color: '#f4fbff', map: plume, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide });
  const foamMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.5, depthWrite: false });
  for (let i = 0; i < 9; i++) {
    const z = K.z - 32 + i * 8, h = 9 + 8 * Math.sin((i / 8) * Math.PI);
    const jg = new THREE.PlaneGeometry(3.4, 1).translate(0, 0.5, 0); const j = new THREE.Mesh(jg, jetMat); j.add(new THREE.Mesh(jg, jetMat)); j.children[0].rotation.y = Math.PI / 2; j.position.set(K.x + (i % 2 ? 9 : -9), 0.05, z); j.userData = { h, ph: i * 0.7 }; scene.add(j); jets.push(j);
    const foam = new THREE.Mesh(new THREE.CircleGeometry(1.7, 20).rotateX(-Math.PI / 2), foamMat); foam.position.set(K.x + (i % 2 ? 9 : -9), 0.1, z); scene.add(foam);
  }

  // —— 湖上栈桥：沿中轴穿过湖面，木桥面 + 白色栏杆 ——
  {
    const z0 = K.z - K.rz - 1.6, z1 = K.z + K.rz + 1.6, len = z1 - z0, zc = (z0 + z1) / 2;
    B.add(M.wood, box(4.0, 0.14, len, K.x, 0.34, zc)).add(M.dark, box(4.3, 0.2, len, K.x, 0.14, zc));
    for (let z = z0 + 0.6; z < z1; z += 1.2) B.add(M.dark, box(4.0, 0.145, 0.03, K.x, 0.34, z));
    for (const sg of [-1, 1]) { B.add(M.white, box(0.07, 0.06, len, K.x + sg * 1.95, 1.38, zc)).add(M.white, box(0.05, 0.05, len, K.x + sg * 1.95, 0.9, zc)); for (let z = z0; z <= z1 + 0.01; z += 2.4) B.add(M.white, box(0.08, 0.95, 0.08, K.x + sg * 1.95, 0.48, z)); for (let z = z0 + 6; z < z1; z += 12) B.add(M.lampGlow, box(0.1, 0.1, 0.5, K.x + sg * 1.95, 0.6, z)); }
    for (let z = z0 + 4; z < z1; z += 8) for (const sg of [-1, 1]) B.add(M.dark, cyl(0.14, 0.14, 0.4, K.x + sg * 1.7, -0.1, z, 8));
  }
  // —— 南入口旱喷：地面上一片会起落的小水柱 ——
  {
    const jg0 = new THREE.PlaneGeometry(0.7, 1).translate(0, 0.5, 0);
    for (let ix = -2; ix <= 2; ix++) for (let iz = 0; iz < 5; iz++) {
      const x = ix * 1.6, z = 173.5 + iz * 1.6; B.add(M.dark, cyl(0.16, 0.16, 0.02, x, 0.004, z, 10));
      const j = new THREE.Mesh(jg0, jetMat); j.add(new THREE.Mesh(jg0, jetMat)); j.children[0].rotation.y = Math.PI / 2; j.position.set(x, 0.03, z); j.userData = { h: 1.0 + ((ix + iz + 8) % 3) * 0.6, ph: ix * 0.9 + iz * 1.7 }; scene.add(j); jets.push(j);
    }
  }
  // —— 木棉花雕塑：中轴北段，广州的市花 ——
  {
    const sz = -96, petal = new THREE.MeshLambertMaterial({ color: '#d8342a', emissive: '#a01c14', emissiveIntensity: 0.25 }), stamen = lam('#f2c230');
    B.add(M.stone, cyl(2.4, 2.6, 0.5, 0, 0, sz, 32)).add(M.dark, cyl(2.0, 2.0, 0.08, 0, 0.5, sz, 32)).add(M.steel, cyl(0.2, 0.3, 4.2, 0, 0.5, sz, 12));
    for (let i = 0; i < 5; i++) B.add(petal, place(new THREE.SphereGeometry(1, 14, 10).scale(0.85, 0.3, 1.7).translate(0, 0, 1.5).rotateX(-0.55).rotateY(i * 1.2566), 0, 4.7, sz));
    for (let i = 0; i < 9; i++) { const a = i * 0.698; B.add(stamen, rod(V3(0, 4.8, sz), V3(Math.cos(a) * 0.5, 6.0, sz + Math.sin(a) * 0.5), 0.035, 5)).add(stamen, place(new THREE.IcosahedronGeometry(0.09, 0), Math.cos(a) * 0.5, 6.0, sz + Math.sin(a) * 0.5)); }
    circles.push({ x: 0, z: sz, r: 2.8 });
  }

  // ================= 塔楼 =================
  const corners = (x, z, w, d, ry) => { const c = Math.abs(Math.cos(ry)), s = Math.abs(Math.sin(ry)), hx = (w * c + d * s) / 2, hz = (w * s + d * c) / 2; return [x - hx, x + hx, z - hz, z + hz]; };
  function tower({ x, z, w, d, h, style = 'blue', ry = 0, ch = 0, lobby = 10, lobbyStyle = 'lobby', crown = 'flat', steps = [], pod = null, far = false }) {
    if (!far) { if (!ch) ch = Math.min(w, d) * 0.08; if (crown === 'flat' && !steps.length && h > 100) steps = [{ y: h * 0.9, w: w * 0.84, d: d * 0.84 }, { y: h * 0.96, w: w * 0.64, d: d * 0.64 }]; }
    const bat = far ? NS : B, T = (g) => place(g, x, 0, z, ry);
    if (!far) {
      bat.add(lobbyStyle === 'shop' ? shopMat() : glass(lobbyStyle), T(loft([{ y: 0, pts: rect(w - 1.4, d - 1.4, ch) }, { y: lobby, pts: rect(w - 1.4, d - 1.4, ch) }], { cap: false })));
      bat.add(M.white, T(box(w + 3.5, 0.55, d + 3.5, 0, lobby, 0)));
      if (lobbyStyle === 'lobby' && lobby >= 8) ST.colonnade(x, z, w + 2.4, d + 2.4, lobby, ry);
    }
    const segs = [{ y: far ? 0 : lobby + 0.55, w, d, ox: 0, oz: 0 }, ...steps];
    segs.forEach((s, i) => {
      const y1 = i + 1 < segs.length ? segs[i + 1].y : h, pts = rect(s.w, s.d, ch, s.ox || 0, s.oz || 0), last = i === segs.length - 1;
      const top = { y: y1, pts };
      if (last && crown === 'slope') top.ys = pts.map((p) => y1 - h * 0.13 * ((p[0] - (s.ox || 0)) / s.w + 0.5));
      bat.add(matOf(style), T(loft([{ y: s.y, pts }, top])));
      if (last) {
        const ox = s.ox || 0, oz = s.oz || 0;
        if (crown === 'flat') { bat.add(M.light, T(box(s.w * 0.55, 6, s.d * 0.55, ox, y1, oz))); if (!far) ST.roofClutter(x + ox, z + oz, s.w - 1.5, s.d - 1.5, y1, ry, Math.round(x * 3 + z)); }
        if (crown === 'spire') { bat.add(M.light, T(box(s.w * 0.4, 8, s.d * 0.4, ox, y1, oz))); bat.add(M.white, T(cyl(0.5, 1.6, h * 0.14, ox, y1 + 8, oz, 8))); }
        if (crown === 'crystal') bat.add(glass(style), T(loft([{ y: y1, pts }, { y: y1 + h * 0.13, pts: rect(s.w * 0.3, s.d * 0.3, ch * 0.3, ox, oz) }])));
        if (crown === 'twin') for (const k of [-1, 1]) bat.add(M.white, T(cyl(0.6, 1.8, h * 0.17, ox + k * s.w * 0.22, y1, oz, 8)));
      }
    });
    if (pod) {
      const px = pod.ox || 0, pz = pod.oz || 0;
      bat.add(matOf(pod.style || 'stone'), T(box(pod.w, pod.h, pod.d, px, 0, pz)));
      bat.add(M.white, T(box(pod.w + 0.8, 0.7, pod.d + 0.8, px, pod.h, pz)));
      for (let y = 10.8; y < pod.h - 2; y += 10.8) bat.add(M.white, T(box(pod.w + 0.5, 0.3, pod.d + 0.5, px, y, pz)));
      const c = Math.cos(ry), sn = Math.sin(ry), [a, b2, c2, d2] = corners(x + px * c + pz * sn, z - px * sn + pz * c, pod.w, pod.d, ry); solid(a, b2, c2, d2, pod.h);
      ST.roofClutter(x + px * c + pz * sn, z - px * sn + pz * c, pod.w - 1.5, pod.d - 1.5, pod.h + 0.7, ry, 17);
    }
    const [x0, x1, z0, z1] = corners(x, z, w, d, ry);
    if (!far) colliders.push({ x0, x1, z0, z1 });
    blockers.push({ x0, x1, z0, z1, y1: h });
  }

  const domeM = lam('#4f6f7a');
  const turret = (x, z, r, h, y0 = 6.4) => {
    const pts = []; for (let i = 0; i < 28; i++) { const a = (i / 28) * 6.283; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
    B.add(clad, place(loft([{ y: y0, pts }, { y: h, pts }], { smooth: true }), x, 0, z)).add(M.white, cyl(r + 0.5, r * 0.55, 1.3, x, y0 - 1.3, z, 28));
    for (const y of [y0, y0 + (h - y0) * 0.5, h - 0.4]) B.add(M.white, cyl(r + 0.45, r + 0.45, 0.4, x, y, z, 28));
    B.add(M.light, cyl(r * 0.8, r + 0.2, 1.6, x, h, z, 28)).add(domeM, place(new THREE.SphereGeometry(r * 0.8, 20, 10, 0, 6.283, 0, 1.571), x, h + 1.6, z)).add(M.steel, cyl(0.06, 0.1, 6, x, h + 1.6 + r * 0.8, z, 6)).add(M.red, box(0.9, 0.55, 0.03, x + 0.5, h + 6.5 + r * 0.8, z));
  };
  // 挑檐：一圈出挑的檐口，下面一排小牛腿
  const cornice = (cx, cz, w, d, y) => {
    B.add(M.white, box(w + 2.4, 0.5, d + 2.4, cx, y, cz)).add(M.light, box(w + 1.4, 0.4, d + 1.4, cx, y - 0.4, cz));
    for (let u = -w / 2; u <= w / 2 + 0.01; u += 1.5) for (const sg of [-1, 1]) B.add(M.white, box(0.45, 0.5, 0.7, cx + u, y - 0.9, cz + sg * (d / 2 + 0.6)));
    for (let u = -d / 2; u <= d / 2 + 0.01; u += 1.5) for (const sg of [-1, 1]) B.add(M.white, box(0.7, 0.5, 0.45, cx + sg * (w / 2 + 0.6), y - 0.9, cz + u));
  };
  const arcade = (sx, zc, d) => {
    const xf = sx * (E - 2.5), xb = sx * (E + 20), cx = (xf + xb) / 2, w = Math.abs(xb - xf);
    B.add(clad, box(w, 15, d, cx, 5.2, zc)).add(M.white, box(w + 0.6, 0.5, d + 0.6, cx, 4.9, zc)).add(M.dark, box(16, 5.2, d, sx * (E + 12), 0, zc));
    const nb = Math.round(d / 4.3);
    for (let i = 0; i <= nb; i++) { const z = zc - d / 2 + 0.4 + i * (d - 0.8) / nb, px = sx * (E - 2.1); B.add(M.stone, box(0.7, 4.9, 0.7, px, 0, z)).add(M.dark, box(0.88, 0.4, 0.88, px, 0, z)).add(M.white, box(0.92, 0.22, 0.92, px, 4.5, z)); circles.push({ x: px, z, r: 0.55 }); if (i < nb) B.add(M.stone, box(0.5, 0.6, (d - 0.8) / nb, px, 4.3, z + (d - 0.8) / nb / 2)); }
    ST.shopRow(sx * (E + 4), zc, -sx, 0, d, { H: 4.5 });
    ST.facade(xf, zc, -sx, 0, d, 5.6, 4, 20.2, { balc: true }); ST.facade(cx, zc + d / 2, 0, 1, w, 5.6, 4, 20.2); ST.facade(cx, zc - d / 2, 0, -1, w, 5.6, 4, 20.2);
    cornice(cx, zc, w, d, 20.2);
    B.add(M.stone, box(0.6, 2.0, d * 0.44, xf, 20.7, zc)).add(M.stone, box(0.6, 1.3, d * 0.22, xf, 22.7, zc)).add(M.white, box(0.8, 0.2, d * 0.24, xf, 24.0, zc)).add(M.steel, cyl(0.05, 0.08, 4, xf, 24.2, zc, 6));
    ST.roofClutter(cx - sx * 2, zc, w - 4, d - 2, 20.7, 0, Math.round(zc) + 31);
    solid(Math.min(sx * (E + 4), xb), Math.max(sx * (E + 4), xb), zc - d / 2, zc + d / 2, 20);
  };
  // —— 西塔（国际金融中心）：圆角三角形平面，鼓腹收顶，外面一层真的斜交钢管 ——
  {
    const H = 438, x = -(E + 42), z = -124, lv = [], Rk = (t) => 31 * (0.86 + 0.16 * Math.sin(Math.PI * (0.15 + 0.85 * t))) * (1 - 0.16 * Math.pow(Math.max(0, (t - 0.84) / 0.16), 2)), rad = (a, Rr) => Rr * (1 + 0.085 * Math.cos(3 * a + 0.5));
    for (let k = 0; k <= 44; k++) {
      const t = k / 44, pts = [];
      for (let i = 0; i < 72; i++) { const a = (i / 72) * Math.PI * 2, r = rad(a, Rk(t)); pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
      lv.push({ y: 12 + t * (H - 12), pts });
    }
    B.add(glass('diag'), place(loft(lv, { smooth: true, uLen: 213.6 }), x, 0, z));
    const lp = lv[0].pts.map((p) => [p[0] * 0.92, p[1] * 0.92]);
    B.add(glass('lobby'), place(loft([{ y: 0, pts: lp }, { y: 12, pts: lp }], { smooth: true, cap: false }), x, 0, z));
    B.add(M.white, cyl(34, 34, 0.6, x, 12, z, 48)).add(M.light, cyl(9, 9, 5, x, H, z, 24)).add(M.dark, cyl(33.4, 33.4, 0.25, x, 0, z, 48));
    const NL = 16, NA = 12, P = (i, k) => { const t = k / NL, a = ((i + (k % 2) * 0.5) / NA) * Math.PI * 2, r = rad(a, Rk(t)) + 0.4; return V3(x + Math.cos(a) * r, 12 + t * (H - 12), z + Math.sin(a) * r); };
    for (let k = 0; k < NL; k++) for (let i = 0; i < NA; i++) { B.add(M.tower, rod(P(i, k), P(k % 2 ? i + 1 : i, k + 1), 0.6, 6)).add(M.tower, rod(P(i, k), P(k % 2 ? i : i - 1, k + 1), 0.6, 6)); }
    for (let i = 0; i < NA; i++) { const p = P(i, 0); B.add(M.tower, cyl(0.7, 0.9, 12, p.x, 0, p.z, 10)); circles.push({ x: p.x, z: p.z, r: 1.0 }); }
    solid(x - 27, x + 27, z - 27, z + 27, H);
    B.add(M.white, place(new THREE.TorusGeometry(Rk(1), 1.0, 8, 56).rotateX(Math.PI / 2), x, H + 0.4, z)).add(M.white, place(new THREE.TorusGeometry(Rk(0.93) + 0.3, 0.5, 6, 56).rotateX(Math.PI / 2), x, 12 + 0.93 * (H - 12), z)).add(M.dark, cyl(Rk(1) * 0.92, Rk(1) * 0.92, 0.5, x, H - 1.5, z, 40)).add(M.steel, cyl(1.4, 1.8, 3, x + 8, H + 5, z - 4, 10)).add(M.light, cyl(8.5, 8.5, 0.6, x + 8, H + 8, z - 4, 28)).add(M.white, cyl(7, 7, 0.06, x + 8, H + 8.6, z - 4, 28));
    // 裙楼商场：手绘石材立面 + 每层挑檐 + 一圈真店面
    const mx = -(E + 2 + 30), mz = -46;
    B.add(clad, box(60, 30, 80, mx, 0, mz)).add(M.white, box(61, 0.8, 81, mx, 30, mz)).add(M.light, box(40, 4, 50, mx, 30.8, mz));
    for (const y of [10.8, 21.6]) B.add(M.white, box(60.6, 0.32, 80.6, mx, y, mz));
    solid(mx - 30, mx + 30, mz - 40, mz + 40, 30);
    ST.shopRow(-(E + 2), mz, 1, 0, 80); ST.shopRow(mx, mz + 40, 0, 1, 60);
    ST.roofClutter(mx, mz, 58, 78, 30.8, 0, 5);
    cornice(mx, mz, 60, 80, 29.7); turret(-(E + 2) - 0.6, mz + 40 - 0.6, 5.6, 37); turret(-(E + 2) - 0.6, mz - 40 + 0.6, 4.6, 33);
    ST.facade(-(E + 2), mz, 1, 0, 80, 6.6, 6, 30); ST.facade(mx, mz + 40, 0, 1, 60, 6.6, 6, 30); ST.facade(mx - 30, mz, -1, 0, 80, 0.5, 8, 30, { ac: 0.3 });
    ST.blade(-(E + 2), mz + 30, 1, 0, '花城汇', '#c9485e'); ST.blade(-(E + 2), mz - 30, 1, 0, '美食街', '#d98a2b'); ST.blade(-(E + 2), mz + 4, 1, 0, '影城', '#5a62c0');
  }
  // —— 东塔（周大福金融中心）：方塔逐级收分，下段是真的白色竖向陶板 ——
  {
    const x = E + 37, z = -124;
    tower({ x, z, w: 58, d: 58, h: 530, style: 'fins', lobby: 12, crown: 'spire', ch: 0.01,
      steps: [{ y: 318, w: 58, d: 46, ox: 0, oz: -6 }, { y: 432, w: 44, d: 46, ox: -7, oz: -6 }, { y: 498, w: 32, d: 34, ox: -7, oz: -6 }],
      pod: { w: 60, d: 62, h: 36, ox: -5, oz: 63, style: 'band' } });
    for (let u = -28.2; u <= 28.21; u += 1.8) for (const sg of [-1, 1]) { B.add(M.white, box(0.2, 96, 0.5, x + u, 12.6, z + sg * 29.25)).add(M.white, box(0.5, 96, 0.2, x + sg * 29.25, 12.6, z + u)); }
    for (const [y, w2, d2, ox, oz] of [[318, 58, 58, 0, 0], [432, 58, 46, 0, -6], [498, 44, 46, -7, -6]]) B.add(M.white, box(w2 + 1.4, 1.6, d2 + 1.4, x + ox, y - 0.8, z + oz)).add(M.light, box(w2 * 0.5, 4, d2 * 0.5, x + ox + w2 * 0.2, y + 0.8, z + oz + d2 * 0.2));
    B.add(M.white, box(34, 1.2, 36, x - 7, 529.4, z - 6)).add(M.lampGlow, box(10, 6, 10, x - 7, 538.6, z - 6));
    ST.shopRow(x - 35, z + 63, -1, 0, 62); ST.shopRow(x - 5, z + 94, 0, 1, 60);
    ST.facade(x - 35, z + 63, -1, 0, 62, 6.6, 8, 36.7, { balc: true }); ST.facade(x - 5, z + 94, 0, 1, 60, 6.6, 8, 36.7, { balc: true });
    cornice(x - 5, z + 63, 60, 62, 36.4); turret(x - 35 + 0.6, z + 94 - 0.6, 5.6, 43);
    ST.blade(x - 35, z + 44, -1, 0, '天汇广场', '#2f78c8'); ST.blade(x - 35, z + 84, -1, 0, '书城', '#3f9a6a');
  }
  // —— 广州图书馆：两片相向倾斜的板楼，中间玻璃中庭 ——
  {
    const x = E + 35, z = 36;
    const slab = (ox, lean, w, h) => loft([{ y: 0, pts: rect(w, 96, 0, ox, 0) }, { y: h * 0.5, pts: rect(w, 96, 0, ox + lean * 0.5, 0) }, { y: h, pts: rect(w, 96, 0, ox + lean, 0) }]);
    B.add(glass('band'), place(slab(-14, 9, 24, 50), x, 0, z)).add(glass('band'), place(slab(14, -9, 24, 46), x, 0, z));
    B.add(glass('lobby'), box(10, 34, 80, x, 0, z)).add(M.white, box(14, 0.5, 100, x - 26, 5.2, z)).add(glass('band'), box(50, 7, 26, x, 41, z - 30)).add(M.white, box(51, 0.5, 27, x, 48, z - 30));
    for (let y = 7; y <= 49; y += 7) { B.add(M.white, box(0.9, 0.4, 97.4, x - 26.4 + 9 * y / 50, y, z)); B.add(M.white, box(0.9, 0.4, 97.4, x + 26.4 - 9 * y / 46, y * 46 / 50, z)); }
    for (let zz = z - 42; zz <= z + 42; zz += 7) B.add(M.white, cyl(0.35, 0.35, 5.2, x - 32, 0, zz, 12));
    solid(x - 27, x + 28, z - 48, z + 48, 50);
  }
  // —— 广东省博物馆：深色方盒，红色凹窗，底层架空 ——
  STYLES.museum = { panel: [6.2, 5.6], mull: [0.62, 0.55], span: 0, tint: '#b3261e', frame: '#3b4048', refl: 0.22, fin: 0.4, blinds: 0.3 };
  { const x = E + 38; B.add(glass('museum'), box(62, 36, 62, x, 8, 150)).add(glass('lobby'), box(48, 8, 48, x, 0, 150)); for (const dx of [-28, 28]) for (const dz of [-28, 28]) B.add(M.dark, box(2.4, 8, 2.4, x + dx, 0, 150 + dz)); solid(x - 24, x + 24, 126, 174, 44); ST.roofClutter(x, 150, 58, 58, 44, 0, 9);
    const mo = { hf: 6, W: 6.2, ww: 3.0, wh: 2.6, D0: 0.7, wall: lam('#3d424a'), sill: lam('#2b2f35'), wins: [new THREE.MeshLambertMaterial({ color: '#7a1a16', emissive: '#a01e16', emissiveIntensity: 0.3 }), new THREE.MeshLambertMaterial({ color: '#3a0f0e', emissive: '#5a1410', emissiveIntensity: 0.25 }), glass('navy')], ac: 0 };
    for (const [dz, y, w2, h2] of [[-20, 30, 12, 8], [6, 13, 16, 6], [19, 32, 8, 7], [-7, 21, 7, 10]]) { B.add(mo.wall, box(2.4, h2 + 1.4, w2 + 1.4, x - 32.3, y - 0.7, 150 + dz)); B.add(mo.wins[0], box(0.3, h2, w2, x - 33.4, y, 150 + dz)); B.add(mo.wall, box(2.4, h2 + 1.4, w2 + 1.4, x + dz * 0.8, y - 0.7, 181.3 + 1.0)); B.add(mo.wins[0], box(w2, h2, 0.3, x + dz * 0.8, y, 183.4)); }
    ST.facade(x - 31, 150, -1, 0, 62, 8, 6, 44, mo); ST.facade(x, 119, 0, -1, 62, 8, 6, 44, mo); ST.facade(x, 181, 0, 1, 62, 8, 6, 44, mo); }
  // —— 第二少年宫：圆筒 + 方盒 ——
  {
    const pts = [], x = -(E + 32); for (let i = 0; i < 40; i++) { const a = (i / 40) * Math.PI * 2; pts.push([Math.cos(a) * 24, Math.sin(a) * 24]); }
    B.add(glass('band'), place(loft([{ y: 0, pts }, { y: 26, pts }], { smooth: true }), x, 0, 52)).add(glass('teal'), box(36, 20, 30, x - 8, 0, 86)).add(M.white, cyl(25.5, 25.5, 0.5, x, 26, 52, 40));
    solid(x - 22, x + 22, 30, 74, 26); solid(x - 26, x + 10, 71, 101, 20);
    ST.facade(x + 10, 86, 1, 0, 30, 0.5, 5, 20, { balc: true }); ST.facade(x - 8, 101, 0, 1, 36, 0.5, 5, 20, { balc: true }); ST.roofClutter(x - 8, 86, 34, 28, 20, 0, 3);
  }
  // —— 广州大剧院：两块“砾石” ——
  const pebGlass = new THREE.MeshLambertMaterial({ color: '#27425a', emissive: '#6fa8d0', emissiveIntensity: 0.32, flatShading: true });
  const pebble = (mat, x, z, sx, sy, sz, ry, sd) => {
    const g = new THREE.IcosahedronGeometry(1, 3), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const X = p.getX(i), Y = p.getY(i), Z = p.getZ(i), hsh = (n) => { const q = Math.sin((Math.round(X * 50) * 12.9 + Math.round(Y * 50) * 78.2 + Math.round(Z * 50) * 37.7 + n + sd) * 43.7585); return q - Math.floor(q) - 0.5; };
      const k = 1 + hsh(1) * 0.12; let y = Y * k; if (y < -0.25) y = -0.25;
      p.setXYZ(i, X * k * sx, (y + 0.25) * sy, Z * k * sz);
    }
    g.computeVertexNormals(); place(g, x, 0, z, ry);
    { const p2 = g.attributes.position, gp = [];
      for (let t = 0; t < p2.count; t += 3) { const cy2 = (p2.getY(t) + p2.getY(t + 1) + p2.getY(t + 2)) / 3 / sy, cxl = (p2.getX(t) + p2.getX(t + 1) + p2.getX(t + 2)) / 3 - x; if (cy2 > 0.16 && cy2 < 0.62 && cxl > sx * 0.22) for (let k = 0; k < 3; k++) gp.push(p2.getX(t + k) + 0.3, p2.getY(t + k) + 0.06, p2.getZ(t + k)); }
      if (gp.length) { const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(gp, 3)); gg.computeVertexNormals(); gg.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(gp.length / 3 * 2), 2)); B.add(pebGlass, gg); } }
    const seams = new THREE.LineSegments(new THREE.EdgesGeometry(g, 1), new THREE.LineBasicMaterial({ color: mat === M.pebbleB ? '#8d97a6' : '#aab2bc' })); scene.add(seams);
    B.add(mat, g);
    const r = Math.max(sx, sz) * 0.78; solid(x - r, x + r, z - r * 0.8, z + r * 0.8, sy);
  };
  pebble(M.pebbleB, -(E + 50), 152, 40, 28, 30, 0.5, 3); pebble(M.pebbleA, -(E + 22), 106, 17, 14, 14, -0.3, 8);

  arcade(-1, 12, 26); arcade(1, 101, 26);

  // —— 广场两侧与花城大道以北的塔楼 ——
  tower({ x: -(E + 34), z: -318, w: 46, d: 46, h: 302, style: 'silver', crown: 'slope', ch: 3 });
  tower({ x: -(E + 104), z: -330, w: 42, d: 48, h: 196, style: 'teal' });
  tower({ x: E + 34, z: -318, w: 44, d: 44, h: 312, style: 'navy', crown: 'spire', steps: [{ y: 268, w: 34, d: 34 }] });
  tower({ x: E + 104, z: -326, w: 46, d: 40, h: 242, style: 'blue', crown: 'crystal', ch: 4 });
  // 珠江城：两道横向风槽
  tower({ x: -(E + 122), z: -150, w: 30, d: 72, h: 309, style: 'silver', steps: [{ y: 100, w: 22, d: 64 }, { y: 107, w: 30, d: 72 }, { y: 205, w: 22, d: 64 }, { y: 212, w: 30, d: 72 }] });
  tower({ x: -(E + 120), z: -36, w: 40, d: 44, h: 208, style: 'band' });
  tower({ x: -(E + 122), z: 70, w: 44, d: 40, h: 168, style: 'stone', crown: 'flat', ch: 0.01 });
  ST.facade(-(E + 100), 70, 1, 0, 40, 10.6, 6, 0, { balc: true }); ST.facade(-(E + 122), 90, 0, 1, 44, 10.6, 6, 0);
  tower({ x: -(E + 119), z: 176, w: 38, d: 46, h: 150, style: 'teal' });
  tower({ x: E + 122, z: -150, w: 44, d: 44, h: 286, style: 'fins', crown: 'crystal', ch: 5 });
  tower({ x: E + 122, z: -40, w: 42, d: 46, h: 224, style: 'blue' });
  tower({ x: E + 120, z: 64, w: 40, d: 40, h: 182, style: 'teal', crown: 'slope' });
  tower({ x: E + 118, z: 172, w: 46, d: 38, h: 142, style: 'stone', ch: 0.01 });
  ST.facade(E + 95, 172, -1, 0, 38, 10.6, 6, 0, { balc: true }); ST.facade(E + 118, 153, 0, -1, 46, 10.6, 6, 0);
  // 中轴北端：中信广场
  tower({ x: 0, z: -760, w: 54, d: 54, h: 322, style: 'silver', crown: 'twin', ch: 6, far: true });
  tower({ x: -62, z: -770, w: 30, d: 40, h: 120, style: 'stone', far: true }); tower({ x: 62, z: -770, w: 30, d: 40, h: 120, style: 'stone', far: true });

  // ================= 背景楼群（实例化）=================
  {
    const unit = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), styles = ['blue', 'fins', 'band', 'fins', 'navy'], lists = styles.map(() => []);
    const free = (x, z) => !(Math.abs(x) < 252 && z > -390 && z < L.BANK + 10) && !(Math.abs(Math.abs(x) - L.OUT_C) < 26) && !(Math.abs(z + 430) < 30) && !(Math.abs(Math.abs(x) - L.ROAD_C) < 34 && z < 0) && !(Math.abs(z - L.NR_C) < 40) && !(Math.abs(x) < 110 && z < -380);
    for (let gx = -1150; gx <= 1150; gx += 78) for (let gz = -1250; gz <= 230; gz += 78) {
      const x = gx + rr(-18, 18), z = gz + rr(-18, 18); if (!free(x, z) || rnd() < 0.22) continue;
      const dist = Math.hypot(x, z + 150), tall = Math.max(0, 1 - dist / 900);
      const h = 45 + rnd() * rnd() * (120 + 240 * tall) + 60 * tall, w = rr(28, 50), d = rr(28, 50);
      lists[Math.floor(rnd() * styles.length)].push({ x, z, w, d, h, ry: rnd() < 0.8 ? 0 : rr(-0.3, 0.3) });
    }
    for (let x = -1100; x <= 1100; x += 62) for (let row = 0; row < 4; row++) {
      if (Math.abs(x) < 90 && row < 2) continue;
      const z = southZ + 60 + row * 90 + rr(-15, 15), h = 30 + rnd() * rnd() * 150 + (row > 1 ? 30 : 0);
      if (rnd() < 0.25) continue;
      lists[Math.floor(rnd() * styles.length)].push({ x: x + rr(-12, 12), z, w: rr(26, 46), d: rr(26, 46), h, ry: 0 });
    }
    lists.forEach((l) => { for (const t of l.slice()) { l.push({ ...t, w: t.w * 0.7, d: t.d * 0.7, h: t.h * 1.1 }); if (rnd() < 0.35) l.push({ ...t, w: t.w * 0.34, d: t.d * 0.34, h: t.h * 1.22 }); } });
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
    styles.forEach((s, i) => {
      const im = new THREE.InstancedMesh(unit, glass(s), lists[i].length);
      lists[i].forEach((t, k) => {
        mtx.compose(V3(t.x, 0, t.z), q.setFromAxisAngle(V3(0, 1, 0), t.ry), V3(t.w, t.h, t.d)); im.setMatrixAt(k, mtx);
        im.setColorAt(k, c.setHSL(0.52 + rr(0, 0.12), 0.0, 1).setRGB(rr(0.75, 1.25), rr(0.85, 1.2), rr(0.9, 1.25)));
      });
      im.frustumCulled = false; scene.add(im);
    });
  }

  // ================= 广州塔 =================
  {
    const cx = 0, cz = southZ + 200, H = 454, N = 24, T = new Batch();
    const P = (i, t) => {
      const a = (i / N) * Math.PI * 2, b = a + 2.2;
      const bx = Math.cos(a) * 40, bz = Math.sin(a) * 30, tx0 = Math.cos(b) * 27, tz0 = Math.sin(b) * 20.5, tx = tx0 * 0.707 - tz0 * 0.707, tz = tx0 * 0.707 + tz0 * 0.707;
      return V3(cx + bx + (tx - bx) * t, t * H, cz + bz + (tz - bz) * t);
    };
    for (let i = 0; i < N; i++) T.add(M.tower, rod(P(i, 0), P(i, 1), 1.15, 6));
    const rings = []; for (let k = 0; k <= 34; k++) { const u = k / 34; rings.push(u + 0.06 * Math.sin(u * Math.PI * 2)); }
    rings.forEach((t, k) => { for (let i = 0; i < N; i++) { T.add(M.tower, rod(P(i, t), P(i + 1, t), 0.5, 5)); if (k < rings.length - 1) T.add(M.tower, rod(P(i, t), P(i + 1, rings[k + 1]), 0.42, 5)); } });
    T.add(M.core, cyl(7.5, 9, H, cx, 0, cz, 16));
    for (const [y, h, r] of [[18, 26, 24], [100, 22, 15], [205, 26, 12.5], [330, 30, 15], [415, 36, 19]]) T.add(M.core, cyl(r, r, h, cx, y, cz, 24));
    T.add(M.white, cyl(22, 21, 4, cx, H - 2, cz, 28)).add(M.white, cyl(0.9, 3.4, 150, cx, H, cz, 8)).add(M.red, cyl(0.7, 0.9, 20, cx, H + 150, cz, 6));
    T.build(scene, { cast: false, receive: false });
  }

  // ================= 树 =================
  const fol = { pos: [], off: [], nor: [], uv: [], col: [] }, fol2 = { pos: [], off: [], nor: [], uv: [], col: [] };
  const FLOW = ['#dc8aa6', '#e2c458', '#f1efe8', '#c9483e', '#e6b3c6', '#a58ad0'];
  const fol3 = { pos: [], off: [], nor: [], uv: [], col: [] }, GRASS = ['#6aa84a', '#5a9a44', '#7ab552', '#4f8f40'];
  const C = new THREE.Color(), GREENS = ['#3d7a3a', '#2f6b33', '#4c8a3e', '#2a5f30', '#5f9a45'], PINKS = ['#e6a3bd', '#d98aab', '#f0bccf', '#c9789c', '#ecb0c6'];
  const blob = (F, cx, cy, cz, r, tx, ty, tz, pal, n, dim = 1, ss = 0, up = false) => {
    for (let i = 0; i < n; i++) {
      const y = 1 - (2 * (i + 0.5)) / n, rad = Math.sqrt(1 - y * y), a = i * 2.39996 + rnd() * 0.6;
      let nx = Math.cos(a) * rad, ny = y, nz = Math.sin(a) * rad; if (ny < -0.55) continue;
      const k = r * rr(0.72, 1.0), px = cx + nx * k, py = cy + ny * k * 0.82, pz = cz + nz * k;
      // 法线：以整棵树的树冠中心为球心，明暗成大块
      let gx = px - tx, gy = py - ty + 0.6, gz = pz - tz; const gl = Math.hypot(gx, gy, gz) || 1; gx = gx / gl * 0.65 + nx * 0.35; gy = gy / gl * 0.65 + ny * 0.35; gz = gz / gl * 0.65 + nz * 0.35;
      const s = ss || r * 0.46 + 0.42, rot = up ? rr(-0.03, 0.03) : rnd(), shade = (0.64 + 0.44 * (ny * 0.5 + 0.5) + rr(-0.05, 0.05)) * dim;
      C.set(pick(pal)).multiplyScalar(shade);
      for (const [u, v] of [[0, 0], [1, 0], [1, 1], [0, 0], [1, 1], [0, 1]]) { F.pos.push(px, py, pz); F.off.push((u - 0.5) * 2 * s, (v - 0.5) * 2 * s, rot); F.nor.push(gx, gy, gz); F.uv.push(u, v); F.col.push(C.r, C.g, C.b); }
    }
  };
  function roundTree(x, z, sc = 1, pink = false) {
    const h = rr(3.0, 4.0) * sc, cy = h + 1.9 * sc, pal = Array.isArray(pink) ? pink : pink ? PINKS : GREENS, F = pink ? fol2 : fol;
    B.add(M.trunk, cyl(0.16 * sc, 0.27 * sc, h + 0.8, x, 0, z, 7));
    if (sc < 0.9 && sc > 0.75) { B.add(M.dark, box(1.5, 0.03, 1.5, x, 0, z)); for (let q = -2; q <= 2; q++) B.add(M.steel, box(1.3, 0.035, 0.08, x, 0, z + q * 0.28)); }
    for (let i = 0; i < 3; i++) { const a = rr(0, 6.28), e = V3(x + Math.cos(a) * 1.3 * sc, h + 1.5 * sc, z + Math.sin(a) * 1.3 * sc); B.add(M.branch, rod(V3(x, h * 0.72, z), e, 0.09 * sc, 5)); }
    blob(F, x, cy + 0.2 * sc, z, 2.0 * sc, x, cy, z, pal, 26, 0.58);
    blob(F, x, cy + 0.5 * sc, z, 2.6 * sc, x, cy, z, pal, 54);
    const n = 5; for (let i = 0; i < n; i++) { const a = (i / n) * 6.283 + rr(0, 0.8), d = rr(1.7, 2.3) * sc; blob(pink && i % 2 === 0 ? fol : F, x + Math.cos(a) * d, cy + rr(-0.7, 0.5) * sc, z + Math.sin(a) * d, rr(1.5, 2.0) * sc, x, cy, z, pink && i % 2 === 0 ? GREENS : pal, 26); }
    circles.push({ x, z, r: 0.42 });
  }
  const frondG = [], frondM = [toon({ color: '#3f8f38', side: THREE.DoubleSide }), toon({ color: '#4c9c40', side: THREE.DoubleSide })]; let palmI = 0;
  function palm(x, z, sc = 1) {
    const h = rr(9, 12) * sc;
    B.add(M.palmTrunk, cyl(0.2, 0.3, h, x, 0, z, 8)).add(M.hedge, cyl(0.2, 0.26, 1.7, x, h, z, 8));
    // 叶子不用贴图了：每片复叶 = 一根叶轴 + 两排真的小叶片，近看没有点阵
    const n = 15, top = h + 1.5, pos = [];
    for (let i = 0; i < n; i++) {
      const up = i < 5, a = (i / (up ? 5 : 10)) * 6.283 + rr(-0.25, 0.25) + (up ? 0.3 : 0), pitch = up ? rr(0.85, 1.15) : rr(0.12, 0.5), len = rr(4.0, 4.9) * sc * (up ? 0.85 : 1), droop = up ? 0.42 : rr(0.55, 0.8);
      const ca = Math.cos(a), sa = Math.sin(a), Pt = (t) => { const X = Math.cos(pitch) * len * t * (1 - 0.12 * t); return [x + ca * X, top + Math.sin(pitch) * len * t - t * t * len * droop, z + sa * X]; };
      const NL = 22;
      for (let k = 0; k < NL; k++) {
        const t0 = 0.08 + (k / NL) * 0.92, t1 = t0 + (0.92 / NL) * 0.72, p0 = Pt(t0), p1 = Pt(t1), Lf = (0.95 * Math.sin(Math.PI * Math.min(1, (t0 + 0.06) / 1.04)) + 0.1) * sc;
        for (const sg of [-1, 1]) pos.push(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2], p0[0] + ca * 0.3 * Lf - sa * sg * Lf, p0[1] - 0.32 * Lf, p0[2] + sa * 0.3 * Lf + ca * sg * Lf);
      }
      B.add(M.trunk, rod(V3(...Pt(0)), V3(...Pt(0.5)), 0.035, 4)).add(M.trunk, rod(V3(...Pt(0.5)), V3(...Pt(1)), 0.02, 4));
    }
    const fg = new THREE.BufferGeometry(); fg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); fg.computeVertexNormals(); fg.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2)); B.add(frondM[palmI++ % 2], fg);
    for (let k = 1; k < 10; k++) B.add(M.trunk, cyl(0.235, 0.245, 0.07, x, k * h / 10, z, 8));   // 树干上的环痕
    circles.push({ x, z, r: 0.42 });
  }
  // 中轴两侧的大王椰
  for (let z = -172; z <= 164; z += 13) for (const sx of [-1, 1]) { const x = sx * (L.LAWN_X0 + 2.4); if (lawnSd(x, z) < -1.0) palm(x, z); }
  // 草坪里的树
  for (let gx = L.LAWN_X0 + 8; gx <= L.LAWN_X1 - 4; gx += 8) for (let gz = -172; gz <= 164; gz += 11.5) for (const sx of [-1, 1]) {
    const x = sx * (gx + rr(-2.5, 2.5)), z = gz + rr(-3, 3); if (lawnSd(x, z) > -3.5 || rnd() < 0.42) continue;
    roundTree(x, z, rr(0.9, 1.25), rnd() < 0.1);
  }
  // 行道树
  for (let z = -210; z <= 194; z += 12) for (const x of [-(E - 1.6), -(L.PX + 4.4), L.PX + 4.4, E - 1.6]) { if (L.CROSS.some((c) => Math.abs(z - c) < 5) || BRIDGE_Z.some((b) => Math.abs(z - b) < 8) || (Math.abs(x) > L.ROAD_C && ((x < 0 && z > -4 && z < 28) || (x > 0 && z > 85 && z < 117)))) continue; roundTree(x, z + rr(-1, 1), 0.82, Math.abs(x) < L.ROAD_C && rnd() < 0.12); }
  for (let x = -300; x <= 300; x += 13) for (const z of [L.NR_C - L.NR_H - 4, L.NR_C + L.NR_H + 4, L.SR_C - L.SR_H - 4, L.SR_C + L.SR_H + 4]) {
    if (Math.abs(x) < 9 || Math.abs(Math.abs(x) - L.ROAD_C) < 15) continue; roundTree(x + rr(-1, 1), z, 0.82, false);
  }
  for (let x = -320; x <= 320; x += 16) palm(x, L.BANK - 9, 0.9);
  for (let z = -410; z <= -270; z += 15) for (const x of [-20, 20]) roundTree(x + rr(-3, 3), z, 1.2, rnd() < 0.3);
  const mkFol = (F, kind) => {
    if (!F.pos.length) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(F.pos, 3)); g.setAttribute('aOff', new THREE.Float32BufferAttribute(F.off, 3)); g.setAttribute('aNor', new THREE.Float32BufferAttribute(F.nor, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(F.nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(F.uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(F.col, 3));
    const fm = foliageMat(leafTex(kind)), m = new THREE.Mesh(g, fm.mat); m.customDepthMaterial = fm.depth; m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; scene.add(m);
  };
  {
    const fm = toon({ color: '#3f9336', map: frondTex(), alphaTest: 0.5, side: THREE.DoubleSide });
    const b = new Batch(); for (const g of frondG) b.add(fm, g); const [m] = b.build(scene); if (m) m.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: fm.map, alphaTest: 0.45 });
  }

  // ================= 街道家具 =================
  const BANNERS = [lam('#c9566c'), lam('#d9a441'), lam('#3d9aa8'), lam('#6272c4')];
  let li = 0;
  for (let z = -206; z <= 190; z += 22) for (const sx of [-1, 1]) {
    const x = sx * (L.PROM - 0.9); if (ellSd(x, z, K, K.ring + 1) < 0) continue;
    B.add(M.white, cyl(0.07, 0.1, 6.2, x, 0, z, 8)).add(M.lampGlow, cyl(0.16, 0.16, 0.9, x, 6.2, z, 8)).add(M.white, cyl(0.2, 0.2, 0.08, x, 7.1, z, 8));
    B.add(BANNERS[li++ % 4], box(0.05, 2.0, 0.7, x - sx * 0.45, 3.4, z)).add(M.white, box(0.05, 0.05, 0.9, x - sx * 0.25, 5.45, z));
    circles.push({ x, z, r: 0.25 });
    if (lawnSd(sx * (L.LAWN_X0 + 1), z + 11) < 0) {   // 长椅
      const bz = z + 11, bx = sx * (L.PROM - 1.1);
      B.add(M.wood, box(0.5, 0.07, 2.2, bx, 0.44, bz)).add(M.wood, box(0.07, 0.4, 2.2, bx + sx * 0.25, 0.5, bz)).add(M.dark, box(0.4, 0.44, 0.08, bx, 0, bz - 0.9)).add(M.dark, box(0.4, 0.44, 0.08, bx, 0, bz + 0.9));
      colliders.push({ x0: bx - 0.35, x1: bx + 0.35, z0: bz - 1.1, z1: bz + 1.1 });
    }
  }
  // 湖边一圈矮灯
  for (let i = 0; i < 28; i++) { const a = (i / 28) * 6.283, x = K.x + Math.cos(a) * (K.rx + 2.2), z = K.z + Math.sin(a) * (K.rz + 2.2); B.add(M.steel, cyl(0.09, 0.09, 0.8, x, 0, z, 6)).add(M.lampGlow, cyl(0.11, 0.11, 0.16, x, 0.8, z, 6)); }
  // 地下商场入口的玻璃亭
  const pavilion = (x, z, label) => {
    B.add(M.white, box(13, 0.35, 8, x, 4.2, z)).add(M.light, box(13.3, 0.14, 8.3, x, 4.55, z)); ST.pavilionBody(x, z, z < 0 ? 1 : -1);
    for (const [dx, dz] of [[-6, -3.6], [6, -3.6], [-6, 3.6], [6, 3.6]]) B.add(M.steel, cyl(0.12, 0.12, 4.2, x + dx, 0, z + dz, 8));
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.1), new THREE.MeshBasicMaterial({ map: textTex(label, { w: 512, h: 96, font: 'bold 64px "Microsoft YaHei", sans-serif', color: '#ffffff', bg: '#e85a71' }) }));
    sign.position.set(x, 3.5, z + (z < 0 ? 3.06 : -3.06)); if (z > 0) sign.rotation.y = Math.PI; scene.add(sign);
    solid(x - 5.5, x + 5.5, z - 3, z + 3, 4.5);
  };
  pavilion(-24, -198, '花城汇 · 北区'); pavilion(24, -198, '地铁 APM 线'); pavilion(-24, 184, '花城汇 · 南区'); pavilion(24, 184, '海心沙方向');
  // 广场题名石
  {
    B.add(M.stone, box(9, 2.3, 1.1, 0, 0.5, -186)).add(M.dark, box(10, 0.5, 2, 0, 0, -186));
    for (const s of [-1, 1]) { const t = new THREE.Mesh(new THREE.PlaneGeometry(8.2, 1.9), new THREE.MeshBasicMaterial({ map: textTex('花城广场', { w: 1024, h: 240, font: 'bold 150px "KaiTi", "STKaiti", "Microsoft YaHei", serif', color: '#c8382c', sub: 'HUACHENG SQUARE · ZHUJIANG NEW TOWN' }), transparent: true })); t.position.set(0, 1.65, -186 + s * 0.56); if (s < 0) t.rotation.y = Math.PI; scene.add(t); }
    solid(-5, 5, -187, -185, 3);
  }
  // 红绿灯与路牌
  const signal = (x, z, ry) => {
    B.add(M.dark, cyl(0.09, 0.11, 6, x, 0, z, 8)).add(M.dark, place(box(4.2, 0.12, 0.12, 2.1, 5.8, 0), x, 0, z, ry)).add(M.dark, place(box(0.36, 1.05, 0.3, 3.6, 4.7, 0), x, 0, z, ry));
    const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), new THREE.MeshBasicMaterial({ color: '#39e07a' })); lamp.position.set(3.6, 4.95, 0.16).applyAxisAngle(V3(0, 1, 0), ry).add(V3(x, 0, z)); lamp.rotation.y = ry; scene.add(lamp);
    circles.push({ x, z, r: 0.25 });
  };
  for (const sx of [-1, 1]) { signal(sx * (L.ROAD_C - L.ROAD_H - 1), L.NR_C + L.NR_H + 1, sx > 0 ? Math.PI : 0); signal(sx * (L.ROAD_C - L.ROAD_H - 1), L.SR_C - L.SR_H - 1, sx > 0 ? Math.PI : 0); signal(sx * (L.ROAD_C + L.ROAD_H + 1), L.NR_C - L.NR_H - 1, sx > 0 ? Math.PI : 0); }
  // 路名牌
  const roadSign = (x, z, ry, name, py) => {
    B.add(M.steel, cyl(0.06, 0.06, 3.4, x, 0, z, 8));
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.78), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: textTex(name, { w: 512, h: 144, font: 'bold 78px "Microsoft YaHei", sans-serif', color: '#ffffff', bg: '#1d6fd6', sub: py }) }));
    m.position.set(x, 3.0, z); m.rotation.y = ry; scene.add(m); circles.push({ x, z, r: 0.2 });
  };
  for (const sx of [-1, 1]) {
    roadSign(sx * (L.PX + 2.6), L.NR_C + L.NR_H + 2.5, 0, '花城大道', 'HUACHENG Ave.'); roadSign(sx * (L.PX + 3.2), L.NR_C + L.NR_H + 5, Math.PI / 2, sx < 0 ? '珠江西路' : '珠江东路', sx < 0 ? 'ZHUJIANG Rd. W' : 'ZHUJIANG Rd. E');
    roadSign(sx * (L.PX + 2.6), L.SR_C - L.SR_H - 2.5, 0, '临江大道', 'LINJIANG Ave.'); roadSign(sx * (L.PX + 3.2), L.SR_C - L.SR_H - 5, Math.PI / 2, sx < 0 ? '珠江西路' : '珠江东路', sx < 0 ? 'ZHUJIANG Rd. W' : 'ZHUJIANG Rd. E');
  }
  // 公交站
  const busStop = (x, z, ry) => {
    const T = (g) => place(g, x, 0, z, ry);
    B.add(M.steel, T(box(7, 0.14, 1.7, 0, 2.6, 0))).add(M.steel, T(box(0.12, 2.6, 0.12, -3.2, 0, -0.6))).add(M.steel, T(box(0.12, 2.6, 0.12, 3.2, 0, -0.6))).add(M.wood, T(box(3.2, 0.08, 0.45, -1.2, 0.45, -0.3)));
    if (tex.posters) { const p = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.46), posterMat(Math.floor(rnd() * 4))); p.position.set(1.7, 1.35, -0.55).applyAxisAngle(V3(0, 1, 0), ry).add(V3(x, 0, z)); p.rotation.y = ry; scene.add(p); }
    B.add(M.dark, T(box(2.8, 1.7, 0.1, 1.7, 0.5, -0.62)));
  };
  // 广告大屏
  const posterCache = [];
  function posterMat(i) {
    if (posterCache[i]) return posterCache[i];
    const t = tex.posters.clone(); t.needsUpdate = true; t.repeat.set(0.4875, 0.478); t.offset.set(0.006 + (i % 2) * 0.5006, i < 2 ? 0.510 : 0.011);
    return (posterCache[i] = new THREE.MeshBasicMaterial({ map: t, color: '#f2f2f2' }));
  }
  const screen = (x, y, z, w, ry, i) => {
    if (!tex.posters) return;
    const h = w * 9 / 16, m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), posterMat(i)); m.position.set(x, y, z); m.rotation.y = ry; scene.add(m);
    const f = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, h + 0.6, 0.4), M.dark); f.position.copy(m.position).add(V3(-Math.sin(ry) * 0.25, 0, -Math.cos(ry) * 0.25)); f.rotation.y = ry; scene.add(f);
  };
  busStop(-(E - 2.2), -150, Math.PI / 2); busStop(E - 2.2, -6, -Math.PI / 2); busStop(-(E - 2.2), 120, Math.PI / 2); busStop(E - 2.2, -176, -Math.PI / 2);
  screen(-(E + 0.9), 18.5, -46, 30, Math.PI / 2, 0);
  screen(E + 1.05, 22, -61, 30, -Math.PI / 2, 1); screen(E + 6.05, 26, 150, 24, -Math.PI / 2, 3); screen(-(E + 34 - 23.4), 24, -318, 22, Math.PI / 2, 2);
  // 绿篱：人行道与车道之间
  for (const x of [-(L.PX + 0.9), L.PX + 0.9]) for (let z = -208; z < 190; z += 24) { if (L.CROSS.some((c) => Math.abs(z + 10 - c) < 14)) continue; B.add(M.hedge, box(0.9, 0.6, 19.6, x, 0, z + 10)); for (let q = 0.4; q < 20; q += 0.75) blob(fol, x + rr(-0.14, 0.14), 0.6, z + q, 0.5, x, 0.1, z + q, GREENS, 8, 1, 0.42); colliders.push({ x0: x - 0.6, x1: x + 0.6, z0: z, z1: z + 20 }); }

  // 过街天桥、路中护栏、路灯、垃圾桶、共享单车
  ST.skybridge(-(E + 0.4), -(L.PX - 3), BRIDGE_Z[0], -1); ST.skybridge(L.PX - 3, E + 8, BRIDGE_Z[1], 1);
  for (const sx of [-1, 1]) {
    for (const [a, b] of [[-208, L.CROSS[0] - 6], [L.CROSS[0] + 6, L.CROSS[2] - 6], [L.CROSS[2] + 6, 192]]) ST.guardrail(sx * L.ROAD_C, a, b);
    for (let z = -196; z <= 190; z += 32) ST.streetLight(sx * (E - 0.7), z + 6, -sx);
    ST.bikeRow(sx * (L.PX + 2.0), -196, 9); ST.bikeRow(sx * (L.PX + 2.0), 150, 7); ST.bikeRow(sx * (E - 1.0), 8, 8);
    ST.bins(sx * (L.PX - 2.5), -214, 0); ST.bins(sx * (L.PX - 2.5), 196, 0); ST.bins(sx * (L.PROM + 1.0), -124, Math.PI / 2); ST.bins(sx * (L.PROM + 1.0), 80, Math.PI / 2);
  }
  for (let x = -190; x <= 190; x += 34) { if (Math.abs(Math.abs(x) - L.ROAD_C) < 14) continue; ST.streetLight(x, L.NR_C + L.NR_H + 1.2, 0); ST.streetLight(x, L.SR_C - L.SR_H - 1.2, 0); }
  let ck = 0; for (const z of [-188, -208, 174, 194]) for (const x of [-33, -19.5, 19.5, 33]) { if (Math.abs(x) < 31 && Math.abs(Math.abs(z) - 191) < 14 && Math.abs(Math.abs(x) - 24) < 7 && (z === -188 ? false : z === 174 ? false : false)) continue; ST.cafeSet(x, z, ck++); }
  ST.finishPanes();
  for (const p of plantQ) blob(fol, p.x, p.y, p.z, p.r, p.x, p.y - 0.25, p.z, GREENS, 10, 1, 0.26);   // 店门口的盆栽
  // 花带、湖边花环、草坪灌木：立体的花簇和叶簇（地面上的花纹只当底色）
  const flowAt = (px, pz) => FLOW[Math.floor(((Math.sin(px * 0.33) + Math.sin(pz * 0.19 + px * 0.11) + 2) / 4) * FLOW.length) % FLOW.length];
  const flower = (px, pz) => { if ((px * 7 + pz * 3 | 0) % 5 === 0) blob(fol, px, 0.2, pz, 0.3, px, 0, pz, GREENS, 4, 1, 0.24); else blob(fol2, px, 0.22, pz, rr(0.28, 0.4), px, 0, pz, [flowAt(px, pz)], 5, 1, 0.25); };
  for (const sx of [-1, 1]) for (let z = -176; z <= 166; z += 0.85) for (let x = L.LAWN_X0 + 1.2; x <= L.LAWN_X0 + 4.2; x += 0.95) {
    const px = sx * (x + rr(-0.3, 0.3)), pz = z + rr(-0.3, 0.3), d = lawnSd(px, pz); if (d > -0.9 || d < -4.2) continue; flower(px, pz);
  }
  for (let a = 0; a < 6.283; a += 0.022) for (const rr2 of [1.6, 2.5, 3.4]) { const px = K.x + Math.cos(a) * (K.rx + K.ring + rr2), pz = K.z + Math.sin(a) * (K.rz + K.ring + rr2); if (lawnSd(px, pz) < -0.9 && Math.abs(px) > L.LAWN_X0 + 4.4) flower(px, pz); }
  for (let i = 0; i < 260; i++) { const px = (rnd() < 0.5 ? -1 : 1) * rr(L.LAWN_X0 + 5, L.LAWN_X1 - 1), pz = rr(-176, 166), d = lawnSd(px, pz); if (d > -1.2 || d < -6) continue; blob(fol, px, 0.45, pz, rr(0.55, 0.85), px, 0.1, pz, GREENS, 12, 1, 0.5); }
  for (const [x, z] of [[-14.5, -170], [14.5, -170], [-26, -150], [26, -150], [-14.5, 160], [14.5, 160], [-28, 96], [28, 96], [-30, -92], [30, -92]]) roundTree(x, z, 1.35, ['#e0483a', '#d8342a', '#f06a4a', '#c92a22', '#e85a40']);   // 木棉
  // 草坪上的草丛（立起来的草叶，随风摆）
  for (let i = 0; i < 5600; i++) { const px = (rnd() < 0.5 ? -1 : 1) * rr(L.LAWN_X0 + 0.3, L.LAWN_X1 - 0.3), pz = rr(-177, 167); if (lawnSd(px, pz) > -0.25) continue; blob(fol3, px, 0.15, pz, 0.2, px, -1, pz, GRASS, 3, 1, rr(0.2, 0.32), true); }
  // 路缘石：真的高出路面一截
  for (const sx of [-1, 1]) for (const off of [-(L.ROAD_H + 0.13), L.ROAD_H + 0.13]) B.add(M.light, box(0.26, 0.16, L.SR_C - L.SR_H - (L.NR_C + L.NR_H), sx * (L.ROAD_C + off), 0, (L.SR_C - L.SR_H + L.NR_C + L.NR_H) / 2));
  for (const [zc, zh] of [[L.NR_C, L.NR_H], [L.SR_C, L.SR_H]]) for (const sg of [-1, 1]) for (const [a, b] of [[-250, -(L.ROAD_C + L.ROAD_H)], [-(L.ROAD_C - L.ROAD_H), L.ROAD_C - L.ROAD_H], [L.ROAD_C + L.ROAD_H, 250]]) B.add(M.light, box(b - a, 0.16, 0.26, (a + b) / 2, 0, zc + sg * (zh + 0.13)));
  // 带画面的摆件和街头小物
  let pi = 0;
  for (const sx of [-1, 1]) {
    for (const z of [-168, -100, 12, 62, 108, 166]) ST.lightbox(sx * (E - 5.0), z, Math.PI / 2, pi++);
    for (const [zz, k] of [[183.3, 0], [184.7, 1]]) ST.vending(sx * 31.2, zz, sx * Math.PI / 2, k + (sx > 0 ? 2 : 0));
    ST.vending(sx * (E - 0.9), sx > 0 ? -0.5 : -144.5, -sx * Math.PI / 2, sx > 0 ? 1 : 3); ST.vending(sx * (E - 0.9), sx > 0 ? 0.8 : -143.2, -sx * Math.PI / 2, sx > 0 ? 0 : 2);
    ST.kiosk(sx * 33.6, -198, Math.PI);   // 正面朝北，对着入口来的人
    for (const z of [-138, 28, 148]) ST.hydrant(sx * (E - 5.4), z);
    ST.postbox(sx * (L.PX + 2.4), -162); ST.cabinet(sx * (E - 0.6), 22, -sx * Math.PI / 2); ST.cabinet(sx * (E - 0.6), 140, -sx * Math.PI / 2);
    ST.locker(sx * 30, 199, Math.PI); ST.banner(sx * 15.2, -191, sx > 0 ? -0.5 : 0.5, sx > 0 ? 0 : 4); ST.banner(sx * (L.PX - 4.5), -176.5, 0, sx > 0 ? 2 : 6);
    for (let q = 0; q < 3; q++) ST.cone(sx * (L.PX - 1.2), BRIDGE_Z[sx < 0 ? 0 : 1] + 13.6 + q * 0.8);
  }
  // 北入口和南入口的圆形花坛
  for (const [x, z] of [[-12.5, -197], [12.5, -197], [-12.5, -209], [12.5, -209], [-12.5, 178], [12.5, 178], [-12.5, 190], [12.5, 190]]) {
    B.add(M.stone, cyl(3.1, 3.1, 0.55, x, 0, z, 28)).add(M.bloom, cyl(2.7, 2.7, 0.2, x, 0.55, z, 28)); for (let q = 0; q < 14; q++) { const a = q * 0.449, r2 = 1.2 + (q % 3) * 0.55; blob(fol2, x + Math.cos(a) * r2, 0.9, z + Math.sin(a) * r2, 0.34, x, 0.4, z, [FLOW[q % FLOW.length]], 5, 1, 0.26); } circles.push({ x, z, r: 3.2 });
    roundTree(x, z, 0.95, true);
  }
  // 楼前花池：石台 + 绿篱 + 小树
  for (const sx of [-1, 1]) for (let z = -206; z <= 190; z += 16) {
    const x = sx * (E + 3.4); if (colliders.some((c) => x > c.x0 - 3 && x < c.x1 + 3 && z > c.z0 - 4 && z < c.z1 + 4)) continue;
    B.add(M.stone, box(2.6, 0.5, 7, x, 0, z)).add(M.bloom, box(2.1, 0.32, 6.5, x, 0.5, z)); for (let q = -2.8; q <= 2.8; q += 0.7) for (const dx of [-0.55, 0.55]) blob(fol2, x + dx, 0.95, z + q, 0.34, x + dx, 0.5, z + q, [FLOW[Math.floor(rnd() * FLOW.length)]], 5, 1, 0.26); colliders.push({ x0: x - 1.3, x1: x + 1.3, z0: z - 3.5, z1: z + 3.5 });
    roundTree(x, z, 0.7, rnd() < 0.15);
  }
  mkFol(fol, 'round'); mkFol(fol2, 'flower'); mkFol(fol3, 'grass');
  for (const m of B.build(scene)) if (m.material === M.branch) m.userData.noAO = true;
  NS.build(scene, { cast: false, receive: false });

  // ================= 车流 =================
  const cg = carGeos(), NC = 40, envI = { envMapIntensity: 1.0 };
  const carsA = new THREE.InstancedMesh(cg.body, new THREE.MeshStandardMaterial({ roughness: 0.22, metalness: 0.35, ...envI }), NC);
  const carsB = new THREE.InstancedMesh(cg.detail, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.18, metalness: 0.2, ...envI }), NC);
  const bg = busGeos(), NBUS = 5;
  const busA = new THREE.InstancedMesh(bg.body, new THREE.MeshStandardMaterial({ roughness: 0.3, metalness: 0.2, ...envI }), NBUS);
  const busB = new THREE.InstancedMesh(bg.detail, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.2, metalness: 0.2, ...envI }), NBUS);
  for (const m of [carsA, carsB, busA, busB]) { m.castShadow = true; m.frustumCulled = false; scene.add(m); }
  const CAR_COLORS = ['#eceeee', '#eceeee', '#c9cdd2', '#c9cdd2', '#23272d', '#23272d', '#5a626c', '#7a2a26', '#27405e', '#8a8f96'];   // 真实街上常见的车漆：白、银、黑、灰为主
  // 环线：沿广场外圈的矩形（右侧通行），t 为沿线距离
  const loopPath = (off, cw) => {
    const x = L.ROAD_C + off * (cw ? -1 : 1), z0 = L.NR_C + off * (cw ? 1 : -1), z1 = L.SR_C + off * (cw ? -1 : 1), r = 7;
    const pts = cw ? [[-x, z1], [-x, z0], [x, z0], [x, z1]] : [[-x, z0], [-x, z1], [x, z1], [x, z0]];   // cw：西侧北行→花城大道东行→东侧南行→临江大道西行
    const segs = []; let total = 0;
    for (let i = 0; i < 4; i++) { const a = pts[i], b = pts[(i + 1) % 4], len = Math.hypot(b[0] - a[0], b[1] - a[1]); segs.push({ a, b, len, s: total }); total += len; }
    return { total, at: (t) => {
      t = ((t % total) + total) % total; const sg = segs.find((s) => t < s.s + s.len) || segs[3], u = t - sg.s, dx = (sg.b[0] - sg.a[0]) / sg.len, dz = (sg.b[1] - sg.a[1]) / sg.len;
      let px = sg.a[0] + dx * u, pz = sg.a[1] + dz * u, yaw = Math.atan2(dx, dz);
      const nx = segs[(segs.indexOf(sg) + 1) % 4], ndx = (nx.b[0] - nx.a[0]) / nx.len, ndz = (nx.b[1] - nx.a[1]) / nx.len, left = sg.len - u;
      if (left < r) { const k = 1 - left / r, e = k * k * 0.5; px += ndx * e * r; pz += ndz * e * r; let dy = Math.atan2(ndx, ndz) - yaw; if (dy > Math.PI) dy -= 6.283; if (dy < -Math.PI) dy += 6.283; yaw += dy * k * 0.5; }
      const pv = segs[(segs.indexOf(sg) + 3) % 4], pdx = (pv.b[0] - pv.a[0]) / pv.len, pdz = (pv.b[1] - pv.a[1]) / pv.len;
      if (u < r) { const k = 1 - u / r, e = k * k * 0.5; px -= pdx * e * r; pz -= pdz * e * r; let dy = Math.atan2(pdx, pdz) - yaw; if (dy > Math.PI) dy -= 6.283; if (dy < -Math.PI) dy += 6.283; yaw += dy * k * 0.5; }
      return [px, pz, yaw];
    } };
  };
  const paths = [loopPath(2, true), loopPath(6, true), loopPath(2, false), loopPath(6, false)];
  const straight = (z, dir) => ({ total: 1300, at: (t) => { t = ((t % 1300) + 1300) % 1300; return [dir * (t - 650), z, dir > 0 ? Math.PI / 2 : -Math.PI / 2]; } });
  paths.push(straight(L.NR_C + 10, 1), straight(L.NR_C - 10, -1));
  const cars = [], buses = [];
  for (let i = 0; i < NBUS; i++) { const p = paths[[1, 3, 4, 5, 1][i]]; buses.push({ p, t: rnd() * p.total, v: rr(6.5, 8) }); busA.setColorAt(i, C.set(i % 2 ? '#f4f6f4' : '#ffe9a8')); }
  for (let i = 0; i < NC; i++) {
    const p = paths[i % paths.length], c = { p, t: rnd() * p.total, v: rr(8, 12.5) };
    cars.push(c); carsA.setColorAt(i, C.set(pick(CAR_COLORS)));
  }
  paths.forEach((p, pi) => { const list = [...cars.filter((c) => c.p === p), ...buses.filter((b) => b.p === p)].sort(() => rnd() - 0.5), v = 8 + (pi % 3) * 0.8; list.forEach((o, k) => { o.t = (k + rr(0.15, 0.45)) * p.total / list.length; o.v = v; }); });
  const cm = new THREE.Matrix4(), cq = new THREE.Quaternion(), UP = V3(0, 1, 0), ONE = V3(1, 1, 1);
  const moveCars = (dt) => {
    for (let i = 0; i < NC; i++) {
      const c = cars[i]; c.t += c.v * dt; const [x, z, yaw] = c.p.at(c.t);
      cm.compose(V3(x, 0.02, z), cq.setFromAxisAngle(UP, yaw), ONE); carsA.setMatrixAt(i, cm); carsB.setMatrixAt(i, cm);
    }
    for (let i = 0; i < NBUS; i++) { const c = buses[i]; c.t += c.v * dt; const [x, z, yaw] = c.p.at(c.t); cm.compose(V3(x, 0.02, z), cq.setFromAxisAngle(UP, yaw), ONE); busA.setMatrixAt(i, cm); busB.setMatrixAt(i, cm); }
    carsA.instanceMatrix.needsUpdate = carsB.instanceMatrix.needsUpdate = busA.instanceMatrix.needsUpdate = busB.instanceMatrix.needsUpdate = true;
  };
  moveCars(0);

  // ================= 飞鸟 =================
  const birdG = new THREE.BufferGeometry();
  birdG.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, -0.22, -0.75, 0.1, 0.08, 0, 0, 0.26, 0, 0, -0.22, 0, 0, 0.26, 0.75, 0.1, 0.08], 3)); birdG.computeVertexNormals();
  const NB = 26, birds = new THREE.InstancedMesh(birdG, new THREE.MeshBasicMaterial({ color: '#fbfcff', side: THREE.DoubleSide }), NB), bd = [];
  for (let i = 0; i < NB; i++) { const g = i % 3; bd.push({ cx: [0, -40, 30][g] + rr(-12, 12), cz: [10, 150, -120][g] + rr(-12, 12), r: rr(24, 60), h: rr(22, 60), sp: rr(0.16, 0.3) * (rnd() < 0.5 ? 1 : -1), ph: rr(0, 6.28), fl: rr(5, 8) }); }
  birds.frustumCulled = false; scene.add(birds);
  const bs = V3(1, 1, 1);
  const moveBirds = (t) => {
    for (let i = 0; i < NB; i++) {
      const b = bd[i], a = b.ph + t * b.sp, x = b.cx + Math.cos(a) * b.r, z = b.cz + Math.sin(a) * b.r * 0.8, y = b.h + Math.sin(t * 0.4 + b.ph) * 3;
      const dx = -Math.sin(a) * Math.sign(b.sp), dz = Math.cos(a) * 0.8 * Math.sign(b.sp);
      cm.compose(V3(x, y, z), cq.setFromAxisAngle(UP, Math.atan2(-dx, -dz)), bs.set(1.5 * (0.55 + 0.45 * Math.abs(Math.sin(t * b.fl + b.ph))), 1.5, 1.5)); birds.setMatrixAt(i, cm);
    }
    birds.instanceMatrix.needsUpdate = true;
  };

  return {
    colliders, circles, blockers, cars,
    update(dt, t) {
      moveCars(dt); moveBirds(t);
      for (const j of jets) { const k = 0.72 + 0.28 * Math.sin(t * 1.3 + j.userData.ph) + 0.05 * Math.sin(t * 9 + j.userData.ph * 3); j.scale.set(1, j.userData.h * k, 1); }
    },
  };
}
