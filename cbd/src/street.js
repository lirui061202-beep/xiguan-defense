// 近景建模：店面开间、大堂柱廊、过街天桥、护栏、路灯、单车、垃圾桶、汽车和公交的车身
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, cyl, rod, place } from './geo.js';
import { lam, toon } from './mats.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const stripeTex = (a, b) => { const c = document.createElement('canvas'); c.width = 64; c.height = 8; const g = c.getContext('2d'); for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? a : b; g.fillRect(i * 8, 0, 8, 8); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t; };

export function makeStreet({ scene, B, M, tex, L, colliders, circles, rnd, rr, plantQ = [] }) {
  // ---------- 店面：全部建模（门、橱窗、室内陈设、灯箱招牌、挑牌、灯笼、立牌），只有招牌上的字是画出来的 ----------
  const txt = (text, bg, fg = '#ffffff', w = 512, h = 128, font = 'bold 84px "Microsoft YaHei", "PingFang SC", sans-serif', sub = '') => {
    const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = Math.max(3, h * 0.03); g.strokeRect(h * 0.07, h * 0.07, w - h * 0.14, h - h * 0.14);
    g.fillStyle = fg; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, w / 2, sub ? h * 0.42 : h * 0.53);
    if (sub) { g.font = '600 ' + Math.round(h * 0.15) + 'px "Segoe UI", sans-serif'; g.globalAlpha = 0.9; g.fillText(sub, w / 2, h * 0.8); g.globalAlpha = 1; }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
  };
  const emis = (t, k = 0.32) => new THREE.MeshLambertMaterial({ map: t, emissive: '#ffffff', emissiveMap: t, emissiveIntensity: k });
  const glow = (c, k = 0.7) => new THREE.MeshLambertMaterial({ color: c, emissive: c, emissiveIntensity: k });
  const warm = (c, k = 0.42) => new THREE.MeshLambertMaterial({ color: c, emissive: c, emissiveIntensity: k });   // 店里的东西自带一点暖光，像开着灯
  const wood = warm('#c79a66'), woodD = warm('#8a6446', 0.3), white = warm('#f6f0e4', 0.5), floorIn = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); for (let r = 0; r < 8; r++) for (let q = 0; q < 3; q++) { const v = 196 + ((r * 7 + q * 13) % 5) * 9; g.fillStyle = 'rgb(' + v + ',' + Math.round(v * 0.82) + ',' + Math.round(v * 0.6) + ')'; g.fillRect(((q * 48 + r * 20) % 128), r * 16, 47, 15); g.fillRect(((q * 48 + r * 20) % 128) - 128, r * 16, 47, 15); } const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1 / 1.6, 1 / 1.6); return new THREE.MeshLambertMaterial({ map: t, emissive: '#ffffff', emissiveMap: t, emissiveIntensity: 0.38 }); })(), frameM = lam('#2b3a52'), potM = lam('#f3f1ec'), bush = toon({ color: '#4c9c3c' });
  const lanternM = glow('#d8342a', 0.55), gold = lam('#e0b354'), breadM = warm('#d9a55a'), crateM = lam('#3f86e0'), chalk = lam('#2f3a36');
  const BLOOM = [warm('#f08fb0', 0.3), warm('#f6d04a', 0.3), warm('#ffffff', 0.3), warm('#e0483a', 0.3), warm('#b58fe8', 0.3)];
  const glassPane = new THREE.MeshLambertMaterial({ color: '#bfe3f7', transparent: true, opacity: 0.07, emissive: '#cfe6f5', emissiveIntensity: 0.1, depthWrite: false });
  const KINDS = [
    { n: '花城咖啡', en: 'HUACHENG COFFEE · since 2019', c: '#3f8f6a', icon: '咖啡', kit: 'cafe', wall: '#e9dcc6', awn: ['#3f8f6a', '#eafff3'] },
    { n: '悦读书店', en: 'YUEDU BOOKS & STATIONERY', c: '#2c4f86', icon: '書', kit: 'shelf', wall: '#d8cdb8', goods: ['#b5523c', '#3f6fa8', '#d9b45a', '#5a8f6a', '#e8e2d2'] },
    { n: '粤点茶楼', en: 'CANTONESE TEA HOUSE', c: '#a83232', icon: '茶', kit: 'tea', wall: '#e2c9a0', awn: ['#a83232', '#f5d9a0'] },
    { n: '便利24', en: 'CONVENIENCE STORE · OPEN 24H', c: '#e8762a', icon: '24', kit: 'shelf', wall: '#f1f1ee', goods: ['#e04a3a', '#f2c230', '#3f9fe0', '#5fbf6a', '#ffffff'] },
    { n: '木棉花艺', en: 'KAPOK FLORIST', c: '#d96a92', icon: '花', kit: 'flower', wall: '#f3e6e0', awn: ['#d96a92', '#ffffff'] },
    { n: '潮玩星球', en: 'TOY PLANET · FIGURES & HOBBY', c: '#7a5fd0', icon: '玩', kit: 'shelf', wall: '#e6e0f3', goods: ['#f29abf', '#8f6fe0', '#62c3a5', '#f2c230', '#5fb0f0'] },
    { n: '珠江面包房', en: 'PEARL RIVER BAKERY', c: '#8a5a3c', icon: '包', kit: 'bakery', wall: '#f3e7d2', awn: ['#8a5a3c', '#fff3dc'] },
    { n: '云朵奶茶', en: 'CLOUD MILK TEA', c: '#3f9fe0', icon: '奶茶', kit: 'cafe', wall: '#e3f0f8' },
  ].map((k) => ({ ...k, sign: emis(txt(k.n, k.c, '#ffffff', 512, 128, 'bold 74px "Microsoft YaHei", "PingFang SC", sans-serif', k.en)), openM: emis(txt('营业中 OPEN', '#fffdf5', k.c, 256, 64, 'bold 34px "Microsoft YaHei", sans-serif'), 0.5), box: lam(k.c), neon: glow(k.c, 0.9), wallM: warm(k.wall, 0.55), iconM: emis(txt(k.icon, '#fffdf5', k.c, 128, 128, 'bold ' + (k.icon.length > 1 ? 50 : 82) + 'px "Microsoft YaHei", sans-serif'), 0.4), goodsM: (k.goods || []).map((c) => warm(c, 0.4)), awnM: k.awn ? new THREE.MeshLambertMaterial({ map: stripeTex(k.awn[0], k.awn[1]), side: THREE.DoubleSide }) : null }));
  const panes = [];
  let shopI = 0;
  // 沿一条立面线排店：(cx, cz) 是线的中点，(nx, nz) 是朝外的法线，len 是长度
  function shopRow(cx, cz, nx, nz, len, { H = 5.6, D = 2.6 } = {}) {
    const th = Math.atan2(nx, nz), ux = Math.cos(th), uz = -Math.sin(th), n = Math.max(1, Math.round(len / 5.4)), W = len / n;
    const T = (g, u) => place(g, cx + ux * u, 0, cz + uz * u, th);
    for (let i = 0; i <= n; i++) { const pu = -len / 2 + i * W; B.add(wallM, T(box(0.5, H, D + 0.2, 0, 0, D / 2), pu)).add(M.dark, T(box(0.62, 0.45, D + 0.32, 0, 0, D / 2), pu)).add(sillM, T(box(0.64, 0.16, D + 0.34, 0, 4.26, D / 2), pu)).add(M.lampGlow, T(box(0.2, 0.34, 0.06, 0, 3.2, D + 0.13), pu)).add(M.dark, T(box(0.26, 0.05, 0.1, 0, 3.56, D + 0.14), pu)); }
    B.add(M.white, T(box(len + 0.9, 0.3, D + 0.9, 0, H, D / 2 + 0.2), 0)).add(M.light, T(box(len + 0.5, 0.5, D, 0, H + 0.3, D / 2), 0)).add(M.dark, T(box(len, 0.18, D + 0.5, 0, 0, D / 2 + 0.25), 0));
    for (let i = 0; i < n; i++) {
      const k = KINDS[shopI++ % KINDS.length], u = -len / 2 + (i + 0.5) * W, w = W - 0.5, zf = D - 0.3, xd = w / 2 - 1.25;   // zf 玻璃面；xd 门的合页位置
      const A = (m, g) => B.add(m, T(g, u)), Pn = (g) => panes.push(T(g, u));
      // 室内壳：后墙、地面、吊顶和灯带
      A(k.wallM, box(w, 4.3, 0.1, 0, 0.18, 0.06)); A(floorIn, box(w, 0.06, D - 0.2, 0, 0.18, D / 2 - 0.1)); A(white, box(w, 0.1, D - 0.3, 0, 4.3, D / 2 - 0.15));
      for (const lx of [-w / 4, w / 4]) A(M.lampGlow, box(1.2, 0.04, 0.16, lx, 4.27, D / 2 - 0.2));
      const wl = -w / 2 + 0.06, ww = xd - 0.1 - wl, wc = wl + ww / 2;
      A(woodD, box(w, 0.95, 0.05, 0, 0.2, 0.13)); A(wood, box(w, 0.05, 0.08, 0, 1.15, 0.14));
      if (POST) { A(woodD, box(0.62, 0.86, 0.03, xd + 0.5, 2.2, 0.12)); A(POST[(i * 2 + 1) % POST.length], new THREE.PlaneGeometry(0.54, 0.78).translate(xd + 0.5, 2.63, 0.14)); A(POST[(i + 4) % POST.length], new THREE.PlaneGeometry(0.5, 0.72).translate(wl + 0.42, 1.2, zf + 0.012)); }
      A(k.openM, new THREE.PlaneGeometry(0.72, 0.18).translate(xd + 0.55, 3.45, zf + 0.012)); A(k.neon, box(0.9, 0.03, 0.03, wc, 3.0, zf + 0.06));
      k.flagM = k.flagM || emis(vText(k.n.slice(0, 4), k.c), 0.18);
      A(M.steel, box(0.03, 0.03, 0.62, -w / 2 - 0.25, 3.3, D + 0.4)); for (const sg of [1, -1]) A(k.flagM, new THREE.PlaneGeometry(0.44, 1.7).rotateY(sg > 0 ? Math.PI / 2 : -Math.PI / 2).translate(-w / 2 - 0.25 + sg * 0.006, 2.42, D + 0.48));
      for (let q = 0; q < 9; q++) A(BLOOM[q % BLOOM.length], new THREE.PlaneGeometry(0.2, 0.28).rotateZ(Math.PI).translate(-w / 2 + 0.5 + q * (w - 1) / 8, 4.12 - Math.sin((q / 8) * Math.PI) * 0.16, D + 0.32));
      A(lanternM, box(1.2, 0.03, 0.7, xd + 0.55, 0.18, D + 0.25));
      const W2 = (lx, lz) => ({ x: cx + ux * (u + lx) + nx * lz, z: cz + uz * (u + lx) + nz * lz });
      plantQ.push({ ...W2(-w / 2 + 0.45, D + 0.45), y: 0.86, r: 0.36 }); A(potM, cyl(0.2, 0.15, 0.5, xd + 1.45, 0.18, D + 0.4, 10)); A(woodD, cyl(0.03, 0.03, 0.7, xd + 1.45, 0.6, D + 0.4, 5)); plantQ.push({ ...W2(xd + 1.45, D + 0.4), y: 1.55, r: 0.5 });
      // 橱窗：窗台、竖梃、横档、玻璃
      A(M.stone, box(ww, 0.5, 0.16, wc, 0.18, zf)); A(frameM, box(ww, 0.08, 0.1, wc, 3.05, zf)); A(frameM, box(w, 0.1, 0.1, 0, 4.22, zf));
      for (const fx of [wl + 0.04, wc, xd - 0.14]) A(frameM, box(0.07, 3.6, 0.1, fx, 0.66, zf));
      Pn(new THREE.PlaneGeometry(ww, 3.56).translate(wc, 2.46, zf)); Pn(new THREE.PlaneGeometry(1.2, 1.1).translate(xd + 0.55, 3.66, zf));
      // 门：门框 + 一扇半开的玻璃门（门梃、门冒头、拉手）
      A(frameM, box(0.09, 3.0, 0.12, xd - 0.05, 0.18, zf)); A(frameM, box(0.09, 3.0, 0.12, xd + 1.16, 0.18, zf)); A(frameM, box(1.3, 0.09, 0.12, xd + 0.55, 3.1, zf));
      const ang = i % 3 === 0 ? -0.9 : i % 3 === 1 ? -0.25 : 0, leaf = (g) => g.rotateY(ang).translate(xd, 0.2, zf);
      A(frameM, leaf(box(0.07, 2.85, 0.05, 0.035, 0, 0))); A(frameM, leaf(box(0.07, 2.85, 0.05, 1.06, 0, 0))); A(frameM, leaf(box(1.1, 0.09, 0.05, 0.55, 0, 0))); A(frameM, leaf(box(1.1, 0.09, 0.05, 0.55, 2.76, 0)));
      A(M.steel, leaf(box(0.035, 0.6, 0.09, 0.92, 0.95, 0))); Pn(leaf(new THREE.PlaneGeometry(0.96, 2.66).translate(0.55, 1.42, 0)));
      // 灯箱招牌 + 霓虹线 + 两盏射灯
      A(k.box, box(w, 1.05, 0.34, 0, 4.4, D - 0.1)); A(k.sign, new THREE.PlaneGeometry(w - 0.3, 0.86).translate(0, 4.925, D + 0.08)); A(k.neon, box(w - 0.2, 0.05, 0.05, 0, 4.36, D + 0.1));
      for (const lx of [-w / 4, w / 4]) { A(M.steel, rod(V3(lx, 5.5, D + 0.05), V3(lx, 5.72, D + 0.5), 0.02, 5)); A(M.lampGlow, box(0.3, 0.06, 0.12, lx, 5.68, D + 0.55)); }
      // 挑出的圆牌（两面有字）
      A(M.steel, box(0.05, 0.05, 0.75, w / 2 + 0.25, 3.95, D + 0.45)); A(k.box, new THREE.CylinderGeometry(0.44, 0.44, 0.1, 20).rotateZ(Math.PI / 2).translate(w / 2 + 0.25, 3.5, D + 0.72));
      for (const sg of [-1, 1]) A(k.iconM, new THREE.PlaneGeometry(0.62, 0.62).rotateY(sg * Math.PI / 2).translate(w / 2 + 0.25 + sg * 0.055, 3.5, D + 0.72));
      if (k.awnM) { const g = new THREE.PlaneGeometry(w, 1.5); g.rotateX(-Math.PI / 2 + 0.42); g.translate(0, 4.05, D + 0.62); g.attributes.uv.array.forEach((v, q, arr) => { if (q % 2 === 0) arr[q] = v * Math.round(w / 0.9); }); A(k.awnM, g); }
      // —— 室内陈设 ——
      const shelf = (x, z, wd, mats, hh = 2.0) => { A(woodD, box(wd, hh, 0.05, x, 0.24, z - 0.14)); const rows = Math.round(hh / 0.5); for (let r = 0; r < rows; r++) { A(wood, box(wd, 0.04, 0.3, x, 0.24 + r * 0.5, z)); A(white, box(wd, 0.03, 0.01, x, 0.245 + r * 0.5, z + 0.155)); for (let j = 0; j < Math.floor(wd / 0.27); j++) A(mats[Math.floor(rnd() * mats.length)], box(0.19, 0.2 + rnd() * 0.14, 0.17, x - wd / 2 + 0.15 + j * 0.27, 0.28 + r * 0.5, z + 0.02)); } };
      const table = (x, z) => { A(wood, cyl(0.4, 0.4, 0.04, x, 0.74, z, 14)); A(M.steel, cyl(0.035, 0.035, 0.56, x, 0.2, z, 6)); for (const sg of [-1, 1]) { A(woodD, box(0.36, 0.04, 0.36, x + sg * 0.62, 0.62, z)); A(woodD, box(0.04, 0.42, 0.36, x + sg * 0.79, 0.64, z)); A(M.steel, box(0.3, 0.42, 0.3, x + sg * 0.62, 0.2, z)); } };
      const pend = (x, z, y = 3.3) => { A(M.dark, box(0.02, 4.3 - y, 0.02, x, y, z)); A(M.lampGlow, place(new THREE.IcosahedronGeometry(0.15, 1), x, y, z)); };
      const lantern = (x, y, z) => { A(lanternM, cyl(0.2, 0.2, 0.42, x, y, z, 12)); A(gold, cyl(0.1, 0.1, 0.06, x, y + 0.42, z, 8)); A(gold, cyl(0.1, 0.1, 0.06, x, y - 0.06, z, 8)); A(lanternM, box(0.03, 0.28, 0.03, x, y - 0.34, z)); };
      const pot = (x, z, m, y = 0.2, r = 0.2) => { A(potM, cyl(0.15, 0.11, 0.26, x, y, z, 8)); A(m, place(new THREE.IcosahedronGeometry(r, 1), x, y + 0.4, z)); };
      const cx0 = -w / 2 + 1.25;
      if (k.kit === 'cafe') {
        A(woodD, box(2.0, 1.0, 0.55, cx0, 0.2, 0.55)); A(white, box(2.1, 0.05, 0.62, cx0, 1.2, 0.55)); A(M.dark, box(0.5, 0.42, 0.38, cx0 - 0.5, 1.25, 0.55)); for (let q = 0; q < 3; q++) A(white, cyl(0.05, 0.04, 0.1, cx0 + 0.2 + q * 0.18, 1.25, 0.6, 8));
        A(chalk, box(1.7, 0.75, 0.04, cx0, 2.6, 0.13)); for (let q = 0; q < 3; q++) A(white, box(1.1 - q * 0.2, 0.035, 0.01, cx0 - 0.1, 3.1 - q * 0.18, 0.16));
        if (MENU) for (let q = 0; q < 2; q++) A(MENU[(5 + q + i) % MENU.length], new THREE.PlaneGeometry(0.62, 0.62).translate(xd - 1.3 + q * 0.72, 2.7, 0.13));
        table(xd - 0.9, 1.25); pend(cx0 - 0.4, 0.7); pend(cx0 + 0.5, 0.7); pend(xd - 0.9, 1.25, 3.0);
      } else if (k.kit === 'shelf') {
        shelf(-0.3, 0.32, Math.min(w - 1.6, 3.2), k.goodsM); shelf(cx0 - 0.2, 1.25, 1.5, k.goodsM, 1.5);
        A(white, box(0.9, 0.95, 0.5, xd + 0.4, 0.2, 0.6)); A(M.dark, box(0.3, 0.26, 0.26, xd + 0.4, 1.15, 0.6));
      } else if (k.kit === 'tea') {
        if (MENU) for (let q = 0; q < 3; q++) A(MENU[q], new THREE.PlaneGeometry(0.5, 0.5).translate(-0.56 + q * 0.56, 3.2, 0.2));
        table(-w / 4, 1.05); table(xd - 0.6, 1.35); lantern(-w / 4, 3.3, 1.05); lantern(xd - 0.6, 3.3, 1.35);
        A(woodD, box(w * 0.7, 2.3, 0.06, 0, 0.3, 0.14)); for (let q = -3; q <= 3; q++) A(gold, box(0.04, 2.2, 0.02, q * w * 0.1, 0.35, 0.19)); A(gold, box(w * 0.7, 0.04, 0.02, 0, 1.6, 0.19));
      } else if (k.kit === 'flower') {
        for (let q = 0; q < 3; q++) { A(wood, box(2.2, 0.06, 0.4, cx0, 0.5 + q * 0.45, 0.9 - q * 0.36)); for (let j = 0; j < 5; j++) pot(cx0 - 0.88 + j * 0.44, 0.9 - q * 0.36, BLOOM[Math.floor(rnd() * BLOOM.length)], 0.56 + q * 0.45, 0.17); }
        A(wood, box(0.08, 1.4, 0.08, cx0 - 1.05, 0.2, 0.2)); A(wood, box(0.08, 1.4, 0.08, cx0 + 1.05, 0.2, 0.2)); pend(xd - 0.6, 1.2); A(bush, place(new THREE.IcosahedronGeometry(0.3, 1), xd - 0.9, 3.6, 0.5)); A(bush, place(new THREE.IcosahedronGeometry(0.26, 1), xd, 3.7, 0.9));
      } else {   // 面包房：玻璃柜 + 面包 + 后墙货架
        A(woodD, box(2.2, 0.55, 0.6, cx0, 0.2, 1.1)); A(white, box(2.2, 0.04, 0.6, cx0, 1.15, 1.1)); Pn(new THREE.PlaneGeometry(2.2, 0.4).translate(cx0, 0.95, 1.4));
        for (let q = 0; q < 7; q++) A(breadM, place(new THREE.IcosahedronGeometry(1, 1).scale(0.15, 0.09, 0.1), cx0 - 0.9 + q * 0.3, 0.84, 1.1 + (q % 2) * 0.12));
        shelf(-0.2, 0.32, Math.min(w - 1.8, 3.0), [breadM, lam('#c98a48'), lam('#e8c98a')], 2.0); pend(cx0, 1.1, 3.1);
      }
      // —— 门口的东西 ——
      A(potM, cyl(0.17, 0.12, 0.3, -w / 2 + 0.45, 0.18, D + 0.45, 10));
      if (k.kit === 'cafe' || k.kit === 'bakery') { for (const sg of [-1, 1]) A(chalk, box(0.55, 0.9, 0.04, wc, 0.2, D + 0.75 + sg * 0.14).rotateX(0)); A(wood, box(0.6, 0.05, 0.36, wc, 1.1, D + 0.75)); A(white, box(0.36, 0.04, 0.01, wc, 0.85, D + 0.92)); A(white, box(0.28, 0.04, 0.01, wc, 0.7, D + 0.92)); }
      if (k.kit === 'tea') { lantern(-w / 4, 3.6, D + 0.35); lantern(w / 4 - 0.4, 3.6, D + 0.35); }
      if (k.kit === 'flower') for (let q = 0; q < 4; q++) { A(M.steel, cyl(0.16, 0.13, 0.36, wc - 0.7 + q * 0.46, 0.18, D + 0.5, 8)); A(BLOOM[q % BLOOM.length], place(new THREE.IcosahedronGeometry(0.22, 1), wc - 0.7 + q * 0.46, 0.72, D + 0.5)); }
      if (k.n === '便利24') { A(crateM, box(0.6, 0.36, 0.42, wc + 0.5, 0.18, D + 0.5)); A(crateM, box(0.6, 0.36, 0.42, wc + 0.52, 0.54, D + 0.5)); A(lam('#e04a3a'), box(0.6, 0.36, 0.42, wc - 0.2, 0.18, D + 0.5)); }
      if (k.kit === 'shelf' && k.n !== '便利24') { A(wood, box(1.0, 0.5, 0.5, wc, 0.18, D + 0.5)); for (let q = 0; q < 4; q++) A(k.goodsM[q % k.goodsM.length], box(0.2, 0.26, 0.05, wc - 0.36 + q * 0.24, 0.68, D + 0.5)); }
    }
    const hx = Math.abs(ux) * len / 2 + Math.abs(nx) * (D / 2 + 0.3), hz = Math.abs(uz) * len / 2 + Math.abs(nz) * (D / 2 + 0.3), mx = cx + nx * (D / 2), mz = cz + nz * (D / 2);
    colliders.push({ x0: mx - hx, x1: mx + hx, z0: mz - hz, z1: mz + hz });
  }
  const finishPanes = () => { if (!panes.length) return; const m = new THREE.Mesh(mergeGeometries(panes.map((g) => (g.index ? g.toNonIndexed() : g))), glassPane); m.renderOrder = 5; scene.add(m); };

  // ---------- 大堂柱廊：沿矩形一圈圆柱 ----------
  function colonnade(x, z, w, d, h, ry = 0, step = 6.5) {
    const T = (g) => place(g, x, 0, z, ry), pts = [];
    for (const [a, b, len, ax] of [[-1, -1, w, 'x'], [-1, 1, w, 'x'], [-1, -1, d, 'z'], [1, -1, d, 'z']]) {
      const n = Math.max(1, Math.round(len / step));
      for (let i = 0; i <= n; i++) pts.push(ax === 'x' ? [-w / 2 + (i / n) * w, b * d / 2] : [a * w / 2, -d / 2 + (i / n) * d]);
    }
    const seen = new Set();
    for (const [px, pz] of pts) { const k = px.toFixed(1) + ',' + pz.toFixed(1); if (seen.has(k)) continue; seen.add(k); B.add(M.white, T(cyl(0.42, 0.42, h, px, 0, pz, 14))).add(M.light, T(cyl(0.55, 0.55, 0.3, px, 0, pz, 14))); }
  }

  // ---------- 过街天桥：桥面、玻璃栏板、立柱、楼梯 ----------
  function skybridge(x0, x1, z, stairDir) {
    const y = 5.4, len = x1 - x0, cx = (x0 + x1) / 2;
    B.add(M.white, box(len, 0.5, 4.4, cx, y, z)).add(M.light, box(len, 0.16, 4.8, cx, y - 0.16, z));
    for (const dz of [-2.1, 2.1]) { B.add(M.steel, box(len, 0.07, 0.09, cx, y + 1.6, z + dz)); panes.push(place(new THREE.PlaneGeometry(len, 1.1).translate(0, y + 1.05, 0), cx, 0, z + dz)); for (let x = x0; x <= x1 + 0.01; x += 2.4) B.add(M.steel, box(0.06, 1.15, 0.06, x, y + 0.5, z + dz)); }
    for (const x of [x0 + 1.2, x1 - 1.2]) for (const dz of [-1.5, 1.5]) { B.add(M.white, cyl(0.32, 0.38, y, x, 0, z + dz, 12)); circles.push({ x, z: z + dz, r: 0.45 }); }
    // 楼梯：公园一侧，沿南北方向下到地面
    const sx = stairDir > 0 ? x0 + 1.4 : x1 - 1.4, run = 10.5, steps = 18;
    for (let i = 0; i < steps; i++) B.add(M.light, box(2.6, 0.3, run / steps + 0.02, sx, y - (i + 1) * (y / steps), z + 2.2 + (i + 0.5) * (run / steps)));
    for (const dx of [-1.3, 1.3]) B.add(M.steel, rod(V3(sx + dx, y + 1.1, z + 2.2), V3(sx + dx, 1.1, z + 2.2 + run), 0.04, 6));
    colliders.push({ x0: sx - 1.4, x1: sx + 1.4, z0: z + 2.2, z1: z + 2.2 + run });
  }

  // ---------- 路中护栏（带花箱）、路灯、垃圾桶、共享单车 ----------
  const flowerBox = [lam('#4f8048'), lam('#b0607a'), lam('#5c8c50')];   // 花箱以绿植为主，偶尔一箱花
  function guardrail(x, z0, z1) {
    const len = z1 - z0, cz = (z0 + z1) / 2;
    B.add(M.white, box(0.05, 0.05, len, x, 0.95, cz)).add(M.white, box(0.05, 0.05, len, x, 0.35, cz));
    for (let z = z0; z <= z1 + 0.01; z += 2.5) B.add(M.white, box(0.07, 1.0, 0.07, x, 0, z));
    for (let z = z0 + 0.17; z < z1; z += 0.5) B.add(M.white, box(0.025, 0.6, 0.025, x, 0.35, z));
    let k = 0; for (let z = z0 + 1.25; z < z1; z += 5) { B.add(M.dark, box(0.36, 0.2, 1.3, x, 0.95, z)).add(flowerBox[k++ % 3], box(0.44, 0.22, 1.4, x, 1.12, z)).add(bush, box(0.4, 0.1, 1.36, x, 1.05, z)); }
  }
  function streetLight(x, z, dir) {
    B.add(M.steel, cyl(0.07, 0.12, 9.5, x, 0, z, 8)).add(M.steel, cyl(0.16, 0.16, 0.9, x, 0, z, 8));
    B.add(M.steel, rod(V3(x, 9.3, z), V3(x + dir * 2.6, 9.9, z), 0.05, 6)).add(M.dark, box(0.9, 0.12, 0.34, x + dir * 2.9, 9.84, z)).add(M.lampGlow, box(0.7, 0.04, 0.24, x + dir * 2.9, 9.8, z));
    circles.push({ x, z, r: 0.22 });
  }
  const binG = lam('#3f9d57'), binB = lam('#4a7fd0');
  function bins(x, z, ry = 0) {
    for (const [dx, m] of [[-0.34, binG], [0.34, binB]]) B.add(m, place(box(0.6, 0.9, 0.5, dx, 0.1, 0), x, 0, z, ry)).add(M.dark, place(box(0.64, 0.08, 0.54, dx, 1.0, 0), x, 0, z, ry));
    B.add(M.steel, place(box(1.5, 0.1, 0.6, 0, 0, 0), x, 0, z, ry)); circles.push({ x, z, r: 0.6 });
  }
  const bikeCols = [lam('#f7c531'), lam('#2fb7c9'), lam('#3f86e0')];
  function bikeRow(x, z, n, ry = 0) {
    for (let i = 0; i < n; i++) {
      const m = bikeCols[Math.floor(rnd() * 3)], T = (g) => place(place(g, 0, 0, (i - (n - 1) / 2) * 0.62, 0.12), x, 0, z, ry);
      for (const wx of [-0.52, 0.52]) B.add(M.dark, T(new THREE.TorusGeometry(0.31, 0.035, 6, 16).translate(wx, 0.34, 0)));
      B.add(m, T(rod(V3(-0.52, 0.34, 0), V3(-0.15, 0.82, 0), 0.03, 5))).add(m, T(rod(V3(-0.15, 0.82, 0), V3(0.38, 0.84, 0), 0.03, 5))).add(m, T(rod(V3(0.38, 0.84, 0), V3(0.52, 0.34, 0), 0.03, 5)))
        .add(m, T(rod(V3(-0.15, 0.82, 0), V3(0.05, 0.36, 0), 0.03, 5))).add(m, T(rod(V3(0.05, 0.36, 0), V3(0.52, 0.34, 0), 0.025, 5))).add(m, T(rod(V3(0.4, 0.8, 0), V3(0.36, 1.02, 0), 0.025, 5)))
        .add(M.dark, T(box(0.05, 0.04, 0.46, 0.36, 1.02, 0))).add(M.dark, T(box(0.24, 0.05, 0.14, -0.2, 0.86, 0))).add(m, T(box(0.26, 0.2, 0.3, 0.62, 0.7, 0)));
    }
    const hw = n * 0.31 + 0.3; colliders.push(ry ? { x0: x - hw, x1: x + hw, z0: z - 0.9, z1: z + 0.9 } : { x0: x - 0.9, x1: x + 0.9, z0: z - hw, z1: z + hw });
  }

  // 屋顶：女儿墙、楼梯间、空调外机、水箱、管道、天线、停机坪
  const padM = lam('#6f7a84'), greenRoof = lam('#5f8a55');
  function roofClutter(x, z, w, d, y, ry = 0, seed = 1) {
    const T = (g) => place(g, x, 0, z, ry); let s = Math.abs(seed) * 9301 + 49297; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (const [bw, bd, ox, oz] of [[w, 0.4, 0, -d / 2 + 0.2], [w, 0.4, 0, d / 2 - 0.2], [0.4, d, -w / 2 + 0.2, 0], [0.4, d, w / 2 - 0.2, 0]]) B.add(M.light, T(box(bw, 1.2, bd, ox, y, oz)));
    B.add(M.light, T(box(5.5, 3.4, 4.2, (r() - 0.5) * w * 0.5, y, (r() - 0.5) * d * 0.5)));
    if (r() < 0.5) B.add(greenRoof, T(box(w * 0.3, 0.25, d * 0.28, (r() - 0.5) * w * 0.4, y, (r() - 0.5) * d * 0.4)));
    const n = Math.min(16, Math.round(w * d / 150) + 4);
    for (let i = 0; i < n; i++) {
      const ux = (r() - 0.5) * (w - 7), uz = (r() - 0.5) * (d - 7), k = r();
      if (k < 0.55) B.add(M.steel, T(box(2.3, 1.4, 1.5, ux, y + 0.35, uz))).add(M.dark, T(cyl(0.55, 0.55, 0.1, ux, y + 1.75, uz, 10))).add(M.dark, T(box(2.1, 0.35, 1.3, ux, y, uz)));
      else if (k < 0.75) B.add(M.white, T(cyl(1.3, 1.3, 2.6, ux, y + 0.7, uz, 14))).add(M.dark, T(box(2.3, 0.7, 2.3, ux, y, uz)));
      else if (k < 0.9) B.add(M.dark, T(box(3.4, 0.14, 2.0, ux, y + 0.7, uz))).add(M.steel, T(box(0.1, 0.7, 0.1, ux - 1.4, y, uz))).add(M.steel, T(box(0.1, 0.7, 0.1, ux + 1.4, y, uz)));
      else B.add(M.steel, T(box(0.3, 0.3, Math.min(d * 0.5, 14), ux, y + 0.4, uz)));
    }
    if (r() < 0.65) { const ax = (r() - 0.5) * w * 0.5, az = (r() - 0.5) * d * 0.5; B.add(M.steel, T(cyl(0.08, 0.16, 10, ax, y, az, 6))).add(M.red, T(cyl(0.14, 0.14, 0.6, ax, y + 10, az, 6))); }
    if (w > 34 && d > 34 && r() < 0.6) B.add(padM, T(cyl(7.5, 7.5, 0.6, w * 0.22, y + 2.4, -d * 0.2, 28))).add(M.white, T(cyl(6.2, 6.2, 0.05, w * 0.22, y + 3.0, -d * 0.2, 28))).add(padM, T(cyl(5.6, 5.6, 0.06, w * 0.22, y + 3.02, -d * 0.2, 28))).add(M.steel, T(cyl(1.2, 1.6, 2.4, w * 0.22, y, -d * 0.2, 10)));
  }
  // 竖向招牌：从立面挑出来的灯箱，两面有竖排字
  const vText = (text, bg) => { const c = document.createElement('canvas'); c.width = 128; c.height = 128 * text.length + 32; const g = c.getContext('2d'); g.fillStyle = bg; g.fillRect(0, 0, c.width, c.height); g.fillStyle = '#fff'; g.font = 'bold 96px "Microsoft YaHei", sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; [...text].forEach((ch, i) => g.fillText(ch, 64, 80 + i * 128)); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
  function blade(x, z, nx, nz, text, bg, y = 7.5) {
    const th = Math.atan2(nx, nz), h = 1.5 * text.length + 0.6, t = vText(text, bg), m = new THREE.MeshLambertMaterial({ map: t, emissive: '#ffffff', emissiveMap: t, emissiveIntensity: 0.35 });
    const T = (g) => place(g, x + nx * 1.1, 0, z + nz * 1.1, th);
    B.add(M.dark, T(box(0.36, h + 0.3, 1.7, 0, y - 0.15, 0))).add(M.steel, T(box(0.12, 0.12, 0.8, 0, y + h * 0.8, -1.0))).add(M.steel, T(box(0.12, 0.12, 0.8, 0, y + h * 0.2, -1.0)));
    for (const sg of [-1, 1]) B.add(m, T(new THREE.PlaneGeometry(1.5, h).rotateY(sg * Math.PI / 2).translate(sg * 0.19, y + h / 2, 0)));
  }
  // ---------- 真凹窗立面：墙垛、窗下墙、过梁、窗台、每层腰线、退进去的玻璃、零星的空调外机 ----------
  const wallT = tex.paving ? (() => { const t = tex.paving.clone(); t.needsUpdate = true; t.repeat.set(1 / 2.6, 1 / 1.3); return t; })() : null;
  const wallM = new THREE.MeshLambertMaterial({ map: wallT, color: '#e6d6bc' }), sillM = lam('#f1eadc'), WINS = [];
  if (tex.cladding) for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {   // 手绘立面图里的 12 扇窗各裁一张，当作玻璃后面的室内
    const t = tex.cladding.clone(); t.needsUpdate = true; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.repeat.set(165 / 1254, 217 / 1254); t.offset.set((75 + c * 313.7) / 1254, 1 - (118 + r * 392 + 217) / 1254);
    WINS.push(new THREE.MeshLambertMaterial({ map: t, emissive: '#ffffff', emissiveMap: t, emissiveIntensity: 0.14 }));
  }
  function facade(cx, cz, nx, nz, len, y0, floors, topTo, { hf = 3.6, W = 3.0, ww = 1.7, wh = 2.25, D0 = 0.55, wall = wallM, sill = sillM, wins = WINS, balc = false, ac = 0.13 } = {}) {
    const th = Math.atan2(nx, nz), ux = Math.cos(th), uz = -Math.sin(th), n = Math.max(1, Math.round(len / W)), w = len / n, H = floors * hf, sp = hf - wh - 0.25;
    const T = (g, u, nn) => place(g, cx + ux * u + nx * nn, 0, cz + uz * u + nz * nn, th);
    for (let i = 0; i <= n; i++) { const edge = i === 0 || i === n, pw = edge ? (w - ww) / 2 : w - ww, u = -len / 2 + i * w + (i === 0 ? pw / 2 : i === n ? -pw / 2 : 0); B.add(wall, T(box(pw, H, D0, 0, y0, 0), u, D0 / 2)); }
    for (let f = 0; f < floors; f++) {
      const yb = y0 + f * hf;
      B.add(sill, T(box(len + 0.3, 0.16, D0 + 0.28, 0, yb - 0.08, 0), 0, D0 / 2 + 0.1));
      for (let i = 0; i < n; i++) {
        const u = -len / 2 + (i + 0.5) * w;
        B.add(wall, T(box(ww, sp, D0, 0, yb, 0), u, D0 / 2)).add(wall, T(box(ww, 0.25, D0, 0, yb + sp + wh, 0), u, D0 / 2));
        B.add(sill, T(box(ww + 0.24, 0.1, 0.3, 0, yb + sp - 0.1, 0), u, D0 + 0.1));
        B.add(wins.length ? wins[Math.floor(rnd() * wins.length)] : M.dark, T(new THREE.PlaneGeometry(ww, wh).translate(0, yb + sp + wh / 2, 0), u, 0.1));
        B.add(frameM, T(box(0.06, wh, 0.06, 0, yb + sp, 0), u, 0.16)).add(frameM, T(box(ww, 0.06, 0.06, 0, yb + sp + wh * 0.62, 0), u, 0.16));
        if (balc && (i + f * 2) % 5 === 0) {   // 小阳台：挑板 + 栏杆
          B.add(sill, T(box(ww + 0.6, 0.12, 0.95, 0, yb + sp - 0.22, 0), u, D0 + 0.42));
          B.add(frameM, T(box(ww + 0.6, 0.05, 0.05, 0, yb + sp + 0.85, 0), u, D0 + 0.87));
          for (let k = -3; k <= 3; k++) B.add(frameM, T(box(0.03, 0.95, 0.03, k * (ww + 0.5) / 6, yb + sp - 0.1, 0), u, D0 + 0.87));
        } else if (rnd() < ac) B.add(M.light, T(box(0.85, 0.58, 0.42, 0.25, yb + sp - 0.78, 0), u, D0 + 0.24)).add(M.dark, T(cyl(0.2, 0.2, 0.03, 0.25, yb + sp - 0.6, 0.22, 10).rotateX(0), u, D0 + 0.24)).add(M.steel, T(box(0.95, 0.05, 0.5, 0.25, yb + sp - 0.84, 0), u, D0 + 0.24));
      }
    }
    B.add(sill, T(box(len + 0.7, 0.45, D0 + 0.55, 0, y0 + H, 0), 0, D0 / 2 + 0.15));
    if (topTo > y0 + H + 0.45) B.add(wall, T(box(len, topTo - (y0 + H + 0.45), D0, 0, y0 + H + 0.45, 0), 0, D0 / 2));
  }
  // ---------- 遮阳伞茶座 ----------
  const paraA = lam('#2fa39c'), paraB = lam('#f2ead8'), tableM = lam('#f4f1ea'), chairM = lam('#c98f5a');
  function cafeSet(x, z, k = 0) {
    B.add(M.steel, cyl(0.03, 0.03, 2.5, x, 0, z, 6)).add(k % 2 ? paraB : paraA, place(new THREE.ConeGeometry(1.7, 0.6, 8, 1, true), x, 2.6, z)).add(M.dark, cyl(0.28, 0.28, 0.06, x, 0, z, 10));
    B.add(tableM, cyl(0.48, 0.48, 0.05, x, 0.72, z, 16)).add(M.steel, cyl(0.04, 0.04, 0.72, x, 0, z, 6));
    for (let i = 0; i < 3; i++) { const a = i * 2.094 + k, cx2 = x + Math.cos(a) * 0.95, cz2 = z + Math.sin(a) * 0.95, ry = -a + Math.PI / 2; B.add(chairM, place(box(0.42, 0.05, 0.42, 0, 0.45, 0), cx2, 0, cz2, ry)).add(chairM, place(box(0.42, 0.45, 0.05, 0, 0.5, 0.2), cx2, 0, cz2, ry)).add(M.steel, place(box(0.36, 0.45, 0.36, 0, 0, 0), cx2, 0, cz2, ry)); }
    circles.push({ x, z, r: 1.25 });
  }
  // ---------- 带画面的摆件：画面是 Codex 出的图，壳体是模型 ----------
  const sheet = (name, cols, rows) => { const t = tex[name]; if (!t) return null; const out = []; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const k = t.clone(); k.needsUpdate = true; k.wrapS = k.wrapT = THREE.ClampToEdgeWrapping; k.repeat.set(0.92 / cols, 0.92 / rows); k.offset.set((c + 0.04) / cols, 1 - (r + 0.96) / rows); out.push(emis(k, 0.3)); } return out; };
  const POST = sheet('props1', 3, 2), VEND = sheet('vend', 4, 1), MENU = sheet('menu', 4, 2);
  const VC = [lam('#2f7fd0'), lam('#d8402f'), lam('#f2c230'), lam('#3aa76a')], kioskM = lam('#3f8f6a'), orange = lam('#f07a24'), postG = lam('#2f8a4e'), hydR = lam('#d8342a'), grayC = lam('#aab2b8');
  const boxCol = (x, z, hw, hd, ry) => { const s = Math.abs(Math.sin(ry)), c = Math.abs(Math.cos(ry)), a = hw * c + hd * s, b = hw * s + hd * c; colliders.push({ x0: x - a, x1: x + a, z0: z - b, z1: z + b }); };
  function lightbox(x, z, ry, i) {            // 落地灯箱广告，双面
    const T = (g) => place(g, x, 0, z, ry);
    B.add(M.dark, T(box(1.56, 0.26, 0.42, 0, 0, 0))).add(M.steel, T(box(1.46, 2.12, 0.16, 0, 0.26, 0))).add(M.dark, T(box(1.56, 0.09, 0.22, 0, 2.38, 0))).add(M.lampGlow, T(box(1.3, 0.03, 0.2, 0, 2.34, 0)));
    for (const sg of [1, -1]) B.add(POST ? POST[(i + (sg > 0 ? 0 : 3)) % POST.length] : M.dark, T(new THREE.PlaneGeometry(1.3, 1.95).rotateY(sg > 0 ? 0 : Math.PI).translate(0, 1.3, sg * 0.085)));
    boxCol(x, z, 0.8, 0.25, ry);
  }
  function vending(x, z, ry, i) {             // 自动售货机
    const T = (g) => place(g, x, 0, z, ry);
    B.add(VC[i % 4], T(box(1.1, 1.9, 0.8, 0, 0.08, 0))).add(M.dark, T(box(1.16, 0.08, 0.86, 0, 0, 0))).add(M.light, T(box(1.18, 0.07, 0.9, 0, 1.98, 0))).add(M.lampGlow, T(box(1.0, 0.05, 0.05, 0, 1.92, 0.43)));
    B.add(VEND ? VEND[i % VEND.length] : M.dark, T(new THREE.PlaneGeometry(1.0, 1.76).translate(0, 1.02, 0.405))).add(M.dark, T(box(0.5, 0.16, 0.06, 0, 0.3, 0.42)));
    boxCol(x, z, 0.6, 0.45, ry);
  }
  function banner(x, z, ry, i) {              // 易拉宝：菜品或海报
    const T = (g) => place(g, x, 0, z, ry), m = MENU ? MENU[i % MENU.length] : POST ? POST[i % POST.length] : M.dark;
    B.add(M.steel, T(box(0.9, 0.05, 0.32, 0, 0, 0))).add(M.steel, T(box(0.03, 1.9, 0.03, 0, 0.05, -0.05))).add(white, T(box(0.86, 1.86, 0.02, 0, 0.12, -0.02)));
    B.add(m, T(new THREE.PlaneGeometry(0.8, 0.8).translate(0, 1.5, 0))).add(MENU ? MENU[(i + 3) % MENU.length] : m, T(new THREE.PlaneGeometry(0.8, 0.8).translate(0, 0.62, 0)));
    circles.push({ x, z, r: 0.45 });
  }
  const kioskSign = emis(txt('报刊亭', '#2f7a5a'));
  function kiosk(x, z, ry) {                  // 报刊亭：亭身、柜台、雨棚、杂志架
    const T = (g) => place(g, x, 0, z, ry);
    B.add(kioskM, T(box(2.8, 1.0, 1.9, 0, 0, 0))).add(kioskM, T(box(2.8, 1.5, 0.1, 0, 1.0, -0.9))).add(kioskM, T(box(0.1, 1.5, 1.9, -1.35, 1.0, 0))).add(kioskM, T(box(0.1, 1.5, 1.9, 1.35, 1.0, 0)));
    B.add(white, T(box(3.4, 0.16, 2.7, 0, 2.5, 0.2))).add(kioskM, T(box(3.0, 0.5, 0.12, 0, 2.66, 1.3))).add(kioskSign, T(new THREE.PlaneGeometry(2.6, 0.42).translate(0, 2.91, 1.37))).add(wood, T(box(2.9, 0.06, 0.5, 0, 1.0, 1.05)));
    for (let q = 0; q < 5; q++) { B.add(POST ? POST[q % POST.length] : M.dark, T(new THREE.PlaneGeometry(0.46, 0.66).rotateX(-0.35).translate(-1.1 + q * 0.55, 0.5, 1.02))); B.add(POST ? POST[(q + 2) % POST.length] : M.dark, T(new THREE.PlaneGeometry(0.4, 0.56).translate(-1.1 + q * 0.55, 1.75, -0.83))); }
    for (let q = 0; q < 6; q++) B.add(q % 2 ? orange : VC[q % 4], T(cyl(0.05, 0.05, 0.2, -1.1 + q * 0.2, 1.06, 0.95, 8)));
    boxCol(x, z, 1.5, 1.3, ry);
  }
  function hydrant(x, z) { B.add(hydR, cyl(0.11, 0.13, 0.6, x, 0, z, 10)).add(hydR, cyl(0.15, 0.15, 0.08, x, 0.6, z, 10)).add(hydR, place(new THREE.IcosahedronGeometry(0.1, 1), x, 0.72, z)).add(M.steel, box(0.34, 0.1, 0.1, x, 0.36, z)); circles.push({ x, z, r: 0.25 }); }
  function cone(x, z) { B.add(M.dark, box(0.36, 0.04, 0.36, x, 0, z)).add(orange, place(new THREE.ConeGeometry(0.15, 0.62, 12), x, 0.35, z)).add(white, cyl(0.075, 0.105, 0.12, x, 0.3, z, 12)); }
  function postbox(x, z) { B.add(postG, cyl(0.27, 0.27, 1.15, x, 0.1, z, 16)).add(postG, place(new THREE.SphereGeometry(0.27, 16, 8, 0, 6.283, 0, 1.57), x, 1.25, z)).add(M.dark, cyl(0.3, 0.3, 0.1, x, 0, z, 16)).add(M.dark, box(0.3, 0.04, 0.02, x, 1.0, z + 0.27)).add(gold, box(0.2, 0.12, 0.01, x, 0.72, z + 0.275)); circles.push({ x, z, r: 0.4 }); }
  function cabinet(x, z, ry) { const T = (g) => place(g, x, 0, z, ry); B.add(M.dark, T(box(1.1, 0.12, 0.5, 0, 0, 0))).add(grayC, T(box(1.0, 1.3, 0.42, 0, 0.12, 0))).add(M.light, T(box(1.06, 0.05, 0.48, 0, 1.42, 0))); for (let q = 0; q < 4; q++) B.add(M.dark, T(box(0.36, 0.02, 0.01, -0.24, 1.1 + q * 0.06, 0.215))); B.add(M.steel, T(box(0.02, 1.2, 0.01, 0, 0.16, 0.215))); boxCol(x, z, 0.55, 0.28, ry); }
  function locker(x, z, ry) {                 // 快递柜
    const T = (g) => place(g, x, 0, z, ry);
    B.add(grayC, T(box(2.6, 2.0, 0.5, 0, 0.05, 0))).add(orange, T(box(2.6, 0.22, 0.52, 0, 2.05, 0))).add(M.dark, T(box(2.66, 0.05, 0.56, 0, 0, 0)));
    for (let q = 1; q < 6; q++) B.add(M.dark, T(box(0.015, 1.96, 0.01, -1.3 + q * 0.433, 0.07, 0.256))); for (let q = 1; q < 5; q++) B.add(M.dark, T(box(2.56, 0.015, 0.01, 0, 0.05 + q * 0.4, 0.256)));
    B.add(M.lampGlow, T(box(0.36, 0.26, 0.01, 0, 1.3, 0.262))); boxCol(x, z, 1.35, 0.3, ry);
  }
  // ---------- 地下入口的玻璃亭：钢框、玻璃、下行扶梯口、站牌 ----------
  const pitM = new THREE.MeshBasicMaterial({ color: '#0b0e12' }), rubber = lam('#1b1f24'), metroM = emis(txt('花城汇 · APM', '#1f5fb8', '#ffffff', 256, 64, 'bold 30px "Microsoft YaHei", sans-serif'), 0.4);
  function pavilionBody(x, z, face) {       // face：+1 开口朝南，-1 朝北
    const hw = 5.5, hd = 3, H = 4.2;
    for (let u = -hw; u <= hw + 0.01; u += 2.2) for (const sg of [-1, 1]) { if (sg === face && Math.abs(u) < 2.3) continue; B.add(frameM, box(0.08, H, 0.08, x + u, 0, z + sg * hd)); }
    for (let w = -hd; w <= hd + 0.01; w += 2.0) for (const sg of [-1, 1]) B.add(frameM, box(0.08, H, 0.08, x + sg * hw, 0, z + w));
    for (const y of [0.0, 1.1, 4.1]) { for (const sg of [-1, 1]) { B.add(frameM, box(0.07, 0.08, hd * 2, x + sg * hw, y, z)); if (sg !== face) B.add(frameM, box(hw * 2, 0.08, 0.07, x, y, z + sg * hd)); } }
    B.add(frameM, box(hw * 2, 0.08, 0.07, x, 4.1, z + face * hd)).add(frameM, box(3.1, 0.08, 0.07, x - 3.95, 1.1, z + face * hd)).add(frameM, box(3.1, 0.08, 0.07, x + 3.95, 1.1, z + face * hd));
    for (const sg of [-1, 1]) { panes.push(place(new THREE.PlaneGeometry(hd * 2, H).rotateY(Math.PI / 2), x + sg * hw, H / 2, z)); if (sg !== face) panes.push(place(new THREE.PlaneGeometry(hw * 2, H), x, H / 2, z + sg * hd)); }
    for (const sg of [-1, 1]) panes.push(place(new THREE.PlaneGeometry(3.1, H), x + sg * 3.95, H / 2, z + face * hd));
    // 扶梯口：黑色的坑 + 两道斜下去的玻璃栏板和扶手 + 中间的不锈钢隔板
    B.add(pitM, box(4.2, 0.03, 4.6, x, 0.01, z - face * 0.3));
    for (const dx of [-2.1, 0, 2.1]) { const a = V3(x + dx, 1.05, z + face * 2.0), b = V3(x + dx, 0.12, z - face * 2.6); B.add(rubber, rod(a, b, 0.05, 6)); B.add(M.steel, rod(V3(a.x, 0.55, a.z), V3(b.x, -0.3, b.z), 0.025, 5)); B.add(M.steel, box(0.1, 1.05, 0.1, x + dx, 0, z + face * 2.0)); }
    for (let q = 0; q < 6; q++) for (const dx of [-1.05, 1.05]) B.add(M.steel, box(1.7, 0.03, 0.38, x + dx, 0.03 - q * 0.001, z + face * (1.7 - q * 0.42)));
    B.add(M.lampGlow, box(8, 0.05, 0.2, x, 4.05, z)).add(M.lampGlow, box(8, 0.05, 0.2, x, 4.05, z - 1.6)).add(M.lampGlow, box(8, 0.05, 0.2, x, 4.05, z + 1.6));
    // 站牌立柱
    const px = x + 4.3, pz = z + face * 4.2; B.add(M.dark, box(0.9, 0.2, 0.4, px, 0, pz)).add(lam('#1f5fb8'), box(0.8, 3.0, 0.24, px, 0.2, pz)).add(M.lampGlow, box(0.8, 0.06, 0.26, px, 3.2, pz));
    for (const sg of [-1, 1]) B.add(metroM, place(new THREE.PlaneGeometry(0.72, 0.18).rotateY(sg > 0 ? 0 : Math.PI), px, 2.7, pz + sg * 0.125));
    circles.push({ x: px, z: pz, r: 0.55 });
  }
  return { pavilionBody, shopRow, finishPanes, colonnade, skybridge, guardrail, streetLight, bins, bikeRow, roofClutter, blade, facade, cafeSet, lightbox, vending, banner, kiosk, hydrant, cone, postbox, cabinet, locker, get MENU() { return MENU; } };
}

// ---------- 车身：侧面轮廓挤出，有车头、风挡和后备箱的形状 ----------
const tintG = (g, hex) => { g = g.index ? g.toNonIndexed() : g; const c = new THREE.Color(hex), n = g.attributes.position.count, arr = new Float32Array(n * 3); for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(arr, 3)); return g; };
const prof = (pts, width, bevel = 0.07) => {
  const sh = new THREE.Shape(); pts.forEach(([z, y], i) => (i ? sh.lineTo(z, y) : sh.moveTo(z, y))); sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: width - bevel * 2, bevelEnabled: true, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2, steps: 1 });
  g.translate(0, 0, -(width - bevel * 2) / 2); g.rotateY(-Math.PI / 2); return g.index ? g.toNonIndexed() : g;   // 轮廓的横轴变成车的前后方向（+z 朝前）
};
export function carGeos() {
  const body = mergeGeometries([
    prof([[-2.2, 0.34], [-2.24, 0.78], [-1.9, 0.9], [-1.2, 0.93], [1.0, 0.9], [1.9, 0.8], [2.26, 0.66], [2.24, 0.34]], 1.84),
    prof([[-0.95, 1.4], [0.45, 1.4], [0.5, 1.46], [-1.0, 1.46]], 1.5, 0.04),
  ]);
  const wheel = new THREE.CylinderGeometry(0.34, 0.34, 0.26, 14).rotateZ(Math.PI / 2), hub = new THREE.CylinderGeometry(0.19, 0.19, 0.28, 10).rotateZ(Math.PI / 2);
  const parts = [tintG(prof([[-1.62, 0.9], [-1.02, 1.42], [0.5, 1.42], [1.22, 0.9]], 1.66, 0.05), '#182230')];
  for (const [wx, wz] of [[-0.84, 1.42], [0.84, 1.42], [-0.84, -1.42], [0.84, -1.42]]) { parts.push(tintG(wheel.clone().translate(wx, 0.34, wz), '#14171b')); parts.push(tintG(hub.clone().translate(wx, 0.34, wz), '#c9ced6')); }
  for (const sx of [-0.62, 0.62]) { parts.push(tintG(new THREE.BoxGeometry(0.44, 0.13, 0.08).translate(sx, 0.7, 2.24), '#fffbe6')); parts.push(tintG(new THREE.BoxGeometry(0.44, 0.11, 0.08).translate(sx, 0.76, -2.23), '#ff4a3d')); }
  parts.push(tintG(new THREE.BoxGeometry(1.2, 0.16, 0.06).translate(0, 0.5, 2.25), '#20252c'));
  return { body, detail: mergeGeometries(parts) };
}
export function busGeos() {
  const body = mergeGeometries([new THREE.BoxGeometry(2.5, 2.5, 11).translate(0, 1.7, 0).toNonIndexed(), new THREE.BoxGeometry(2.3, 0.2, 9).translate(0, 3.05, 0).toNonIndexed()]);
  const wheel = new THREE.CylinderGeometry(0.48, 0.48, 0.3, 14).rotateZ(Math.PI / 2);
  const parts = [tintG(new THREE.BoxGeometry(2.54, 0.95, 9.6).translate(0, 2.15, -0.2), '#1b2634'), tintG(new THREE.BoxGeometry(2.3, 1.3, 0.1).translate(0, 2.0, 5.48), '#1b2634'), tintG(new THREE.BoxGeometry(2.52, 0.34, 11.02).translate(0, 0.72, 0), '#2d7fd6'), tintG(new THREE.BoxGeometry(1.5, 0.3, 0.1).translate(0, 2.8, 5.5), '#ffb020')];
  for (const [wx, wz] of [[-1.12, 3.6], [1.12, 3.6], [-1.12, -3.4], [1.12, -3.4]]) parts.push(tintG(wheel.clone().translate(wx, 0.48, wz), '#14171b'));
  return { body, detail: mergeGeometries(parts) };
}
