// 载入 Codex 生成的写实贴图，并在浏览器里推导法线 / 粗糙度贴图
import * as THREE from 'three';

const NAMES = ['paving', 'plaster', 'brick', 'rooftile', 'wood', 'bark', 'foliage', 'manchu', 'facadeA', 'facadeB', 'facadeC', 'shopA', 'shopB', 'sky', 'sky2', 'container', 'sandbags', 'crate', 'concrete', 'rustmetal', 'apartment', 'teahouse', 'lacquer', 'shopC', 'manhole', 'balustrade'];
const CUTOUTS = ['gunHip', 'gunAds', 'leafcard', 'kapoktree', 'streettree', 'scooters', 'plants', 'stools', 'bins', 'pole', 'leaves', 'paifang', 'skylineEast', 'skylineCity'];
const FALLBACK = { lacquer: '#7a2a22', shopC: '#77706a', manhole: '#4a4744', container: '#8a8f92', sandbags: '#6f6650', crate: '#8a6a48', concrete: '#8c8a86', rustmetal: '#5a5f58', apartment: '#b5ab9c', teahouse: '#c9b58c', paving: '#8d8676', plaster: '#d8d2c4', brick: '#75838a', rooftile: '#2f7f62', wood: '#6b4127', bark: '#6a5a4a', foliage: '#3c7a3a', manchu: '#7a3b22', facadeA: '#d9c58f', facadeB: '#a8c4b2', facadeC: '#d3a393', shopA: '#5a3a26', shopB: '#77706a', sky: '#f0b27a' };

export async function loadAssets(opt = {}) {
  const img = {};
  await Promise.all([...NAMES, ...CUTOUTS].map((n) => new Promise((res) => {
    const i = new Image(); i.onload = () => { img[n] = i; res(); }; i.onerror = () => { img[n] = null; res(); };
    i.src = `./assets/tex/${n}.${CUTOUTS.includes(n) ? 'png' : 'jpg'}`;
  })));
  if (img.sky2) img.sky = img.sky2;
  return new Assets(img, opt);
}

function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

export class Assets {
  constructor(img, opt = {}) { this.img = img; this.cache = new Map(); this.lite = !!opt.lite; } // lite（手机）：贴图减半，省显存
  has(n) { return !!this.img[n]; }
  // 把图画进 canvas（缺图时用纯色+噪点兜底）
  canvas(name, w, h) {
    const c = mk(w, h), g = c.getContext('2d'), im = this.img[name];
    if (im) g.drawImage(im, 0, 0, w, h);
    else {
      g.fillStyle = FALLBACK[name] || '#888'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(${Math.random() < 0.5 ? 0 : 255},${Math.random() < 0.5 ? 0 : 255},${Math.random() < 0.5 ? 0 : 255},0.05)`; g.fillRect(Math.random() * w, Math.random() * h, 3, 3); }
    }
    return c;
  }
  // 色键抠像：key = 'g' 绿幕 / 'b' 蓝幕；返回带透明通道的贴图（缺图返回 null）
  cutout(name, key = 'g', o = {}) {
    const im = this.img[name]; if (!im) return null;
    const W = Math.round((o.width || im.width) * (this.lite ? 0.5 : 1)), H = Math.round(W * im.height / im.width), c = mk(W, H), g = c.getContext('2d'); g.drawImage(im, 0, 0, W, H);
    const id = g.getImageData(0, 0, W, H), d = id.data, lo = o.lo ?? 18, hi = o.hi ?? 60, bl = o.bleed || [40, 40, 40];
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], gg = d[i + 1], b = d[i + 2];
      const k = key === 'g' ? gg - Math.max(r, b) : key === 'm' ? Math.min(r, b) - gg : b - Math.max(r, gg);
      let a = 1 - Math.min(1, Math.max(0, (k - lo) / (hi - lo))); a = a * a * (3 - 2 * a);
      if (key === 'g') { if (gg > Math.max(r, b)) d[i + 1] = Math.max(r, b); } else if (key === 'm') { if (k > 0) { d[i] = Math.min(r, gg + 12); d[i + 2] = Math.min(b, gg + 12); } } else if (b > Math.max(r, gg)) d[i + 2] = Math.max(r, gg);
      if (a < 0.02) { d[i] = bl[0]; d[i + 1] = bl[1]; d[i + 2] = bl[2]; }
      d[i + 3] = a * 255;
    }
    g.putImageData(id, 0, 0);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    return { tex: t, aspect: W / H, canvas: c };
  }
  // 返回 { map, normalMap, roughnessMap }
  pbr(name, o = {}) {
    const key = name + JSON.stringify(o);
    if (this.cache.has(key)) return this.cache.get(key);
    const im = this.img[name], W = Math.min(o.size || 1024, this.lite ? 512 : 4096), H = Math.round(W * (im ? im.height / im.width : (o.aspect || 1)));
    const c = this.canvas(name, W, H), g = c.getContext('2d'), src = g.getImageData(0, 0, W, H), d = src.data;
    const lum = new Float32Array(W * H);
    for (let i = 0; i < W * H; i++) lum[i] = (d[i * 4] * 0.299 + d[i * 4 + 1] * 0.587 + d[i * 4 + 2] * 0.114) / 255;
    const wrap = o.repeat !== false, s = o.normal ?? 2.0;
    const nc = mk(W, H), ng = nc.getContext('2d'), nd = ng.createImageData(W, H);
    const rc = mk(W, H), rg = rc.getContext('2d'), rd = rg.createImageData(W, H);
    const r0 = o.rough ?? 0.85, rk = o.roughK ?? 0.5;
    const at = (x, y) => { if (wrap) { x = (x + W) % W; y = (y + H) % H; } else { x = Math.max(0, Math.min(W - 1, x)); y = Math.max(0, Math.min(H - 1, y)); } return lum[y * W + x]; };
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) + 0.5 * (at(x + 2, y) - at(x - 2, y));
      const dy = (at(x, y + 1) - at(x, y - 1)) + 0.5 * (at(x, y + 2) - at(x, y - 2));
      let nx = -dx * s, ny = dy * s, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
      const i = (y * W + x) * 4;
      nd.data[i] = nx * 127.5 + 127.5; nd.data[i + 1] = ny * 127.5 + 127.5; nd.data[i + 2] = nz * 127.5 + 127.5; nd.data[i + 3] = 255;
      const r = Math.max(0.04, Math.min(1, r0 + (0.5 - lum[y * W + x]) * rk)) * 255;
      rd.data[i] = rd.data[i + 1] = rd.data[i + 2] = r; rd.data[i + 3] = 255;
    }
    ng.putImageData(nd, 0, 0); rg.putImageData(rd, 0, 0);
    if (o.gain || o.desat) { // 反照率微调
      for (let i = 0; i < W * H; i++) { const j = i * 4, l = lum[i] * 255, ds = o.desat || 0, gn = o.gain || 1; for (let k = 0; k < 3; k++) d[j + k] = Math.min(255, (d[j + k] * (1 - ds) + l * ds) * gn); }
      g.putImageData(src, 0, 0);
    }
    const T = (cv, srgb) => { const t = new THREE.CanvasTexture(cv); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = wrap ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping; t.anisotropy = 8; return t; };
    const out = { map: T(c, true), normalMap: T(nc, false), roughnessMap: T(rc, false) };
    this.cache.set(key, out); return out;
  }
  // 天空：上半球用生成图，左右接缝做交叉淡化，并把太阳平移到指定方位
  sky(sunDir, liftDeg = 14) {
    const W = 2048, H = 1024, c = mk(W, H), g = c.getContext('2d');
    const top = this.canvas('sky', W, H / 2), tg = top.getContext('2d');
    if (!this.img.sky) { // 兜底：程序渐变
      const gr = tg.createLinearGradient(0, 0, 0, H / 2); gr.addColorStop(0, '#2c4f8f'); gr.addColorStop(0.6, '#c9a184'); gr.addColorStop(1, '#ffcf8f'); tg.fillStyle = gr; tg.fillRect(0, 0, W, H / 2);
      const rg = tg.createRadialGradient(W * 0.3, H / 2 - 60, 0, W * 0.3, H / 2 - 60, 420); rg.addColorStop(0, 'rgba(255,240,200,1)'); rg.addColorStop(1, 'rgba(255,200,120,0)'); tg.fillStyle = rg; tg.fillRect(0, 0, W, H / 2);
    }
    const im = tg.getImageData(0, 0, W, H / 2), d = im.data, B = 160, hh = H / 2;
    for (let y = 0; y < hh; y++) for (let x = 0; x < B; x++) { const a = x / B, i = (y * W + x) * 4, j = (y * W + (W - 1 - x)) * 4; for (let k = 0; k < 3; k++) d[i + k] = d[j + k] * (1 - a) * 0.5 + d[i + k] * (0.5 + a * 0.5); }
    for (let y = 0; y < hh; y++) for (let x = 0; x < B; x++) { const a = x / B, i = (y * W + (W - 1 - x)) * 4, j = (y * W + x) * 4; for (let k = 0; k < 3; k++) d[i + k] = d[j + k] * (1 - a) * 0.5 + d[i + k] * (0.5 + a * 0.5); }
    // 找太阳（最亮的一块）
    let best = -1, bu = 0.3, bv = 0.9;
    for (let by = 0; by < 16; by++) for (let bx = 0; bx < 64; bx++) {
      let s = 0; for (let k = 0; k < 24; k++) { const x = bx * 32 + (k * 7) % 32, y = by * 32 + (k * 13) % 32, i = (y * W + x) * 4; s += d[i] + d[i + 1] * 0.8 + d[i + 2] * 0.4; }
      s *= 0.6 + 0.4 * (by / 16); if (s > best) { best = s; bu = (bx + 0.5) / 64; bv = (by + 0.5) / 16; }
    }
    tg.putImageData(im, 0, 0);
    const want = Math.atan2(sunDir.z, sunDir.x) / (2 * Math.PI) + 0.5;
    let shift = Math.round(((want - bu) % 1 + 1) % 1 * W);
    // 生成图里太阳贴着地平线：把整张图上抬 lift 度，下方用最底一行拉伸成暖色霞光带，让太阳落在光照方向的仰角上
    const lift = Math.round(hh * (liftDeg / 90)), th = hh - lift;
    for (const sx of [shift, shift - W]) { g.drawImage(top, 0, 0, W, hh, sx, 0, W, th); g.drawImage(top, 0, hh - 2, W, 2, sx, th, W, lift + 1); }
    const fade = g.createLinearGradient(0, th, 0, hh); fade.addColorStop(0, 'rgba(255,170,90,0)'); fade.addColorStop(1, 'rgba(214,150,110,0.55)'); g.fillStyle = fade; g.fillRect(0, th, W, lift);
    // 下半球：地面反光用的暖灰渐变
    const hz = g.getImageData(0, hh - 3, W, 1).data; let r = 0, gg = 0, b = 0; for (let x = 0; x < W; x += 16) { r += hz[x * 4]; gg += hz[x * 4 + 1]; b += hz[x * 4 + 2]; } const n = W / 16; r /= n; gg /= n; b /= n;
    const gr = g.createLinearGradient(0, hh, 0, H); gr.addColorStop(0, `rgb(${r | 0},${gg | 0},${b | 0})`); gr.addColorStop(0.12, `rgb(${r * 0.5 | 0},${gg * 0.45 | 0},${b * 0.42 | 0})`); gr.addColorStop(1, 'rgb(46,40,36)');
    g.fillStyle = gr; g.fillRect(0, hh, W, hh);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.mapping = THREE.EquirectangularReflectionMapping; t.wrapS = THREE.RepeatWrapping; t.minFilter = THREE.LinearFilter; t.generateMipmaps = false;
    return { tex: t, horizon: new THREE.Color().setRGB(r / 255, gg / 255, b / 255, THREE.SRGBColorSpace), sunElev: (bv) };
  }
}
