// 素材预处理（在本地页面里跑）：把 assets/tex 的原图抠像、缩放、压成 WebP，写到 assets/web（桌面）和 assets/web/m（手机）
// 用法：node server.js 后，在 http://localhost:5199 的控制台里：
//   const m = await import('/tools/bake.js'); await m.bake();          // 全部
//   await m.bake(['gunHip', 'paving']);                                 // 只处理指定的
const T = (w, m, q = 0.82) => ({ w, m, q });
const C = (key, w, m, bleed, q = 0.88) => ({ key, w, m, bleed, q, ext: 'png' });
export const TABLE = {
  // 平铺贴图与立面（jpg → webp）
  paving: T(1024, 512), plaster: T(1024, 512), brick: T(1024, 512), rooftile: T(1024, 512), wood: T(1024, 512), bark: T(1024, 512), foliage: T(1024, 512),
  container: T(1024, 512), sandbags: T(1024, 512), concrete: T(1024, 512), rustmetal: T(512, 256), lacquer: T(1024, 512), apartment: T(1024, 512), crate: T(512, 256),
  manhole: T(512, 256), manchu: T(512, 256), balustrade: T(1024, 512),
  facadeA: T(1280, 640, 0.84), facadeB: T(1280, 640, 0.84), facadeC: T(1280, 640, 0.84), shopA: T(1280, 640, 0.84), shopB: T(1280, 640, 0.84), shopC: T(1280, 640, 0.84), teahouse: T(1536, 768, 0.84),
  sky: { ...T(2048, 1024, 0.86), src: 'sky2.jpg' },
  // 抠像素材（png 色键 → 带透明通道的 webp）
  gunHip: C('g', 1536, 960, [34, 30, 26], 0.9), gunAds: C('g', 1536, 960, [30, 28, 26], 0.9),
  leafcard: C('b', 512, 256, [40, 70, 30]), kapoktree: C('b', 1024, 512, [70, 40, 30]), streettree: C('b', 1254, 640, [40, 60, 30]),
  scooters: C('b', 1024, 512, [40, 40, 44]), plants: C('b', 768, 384, [50, 70, 40]), stools: C('b', 768, 384, [90, 50, 45]), bins: C('b', 768, 384, [50, 60, 50]),
  pole: C('b', 512, 256, [50, 50, 50]), leaves: C('b', 512, 256, [90, 70, 40]),
  paifang: C('m', 1448, 724, [118, 116, 108]), skylineEast: C('m', 1774, 1024, [150, 140, 130]), skylineCity: C('m', 1774, 1024, [140, 135, 128]),
};

const load = (url) => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error('load ' + url)); i.src = url; });

// 色键：g 绿幕 / b 蓝幕 / m 洋红幕（在原始分辨率上做，再缩小，边缘更干净）
function keyOut(im, key, bleed) {
  const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const g = c.getContext('2d'); g.drawImage(im, 0, 0);
  const id = g.getImageData(0, 0, c.width, c.height), d = id.data, lo = 18, hi = 60;
  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], gg = d[i + 1], b = d[i + 2];
    const k = key === 'g' ? gg - Math.max(r, b) : key === 'm' ? Math.min(r, b) - gg : b - Math.max(r, gg);
    let a = 1 - Math.min(1, Math.max(0, (k - lo) / (hi - lo))); a = a * a * (3 - 2 * a);
    if (key === 'g') { if (gg > Math.max(r, b)) d[i + 1] = Math.max(r, b); } else if (key === 'm') { if (k > 0) { d[i] = Math.min(r, gg + 12); d[i + 2] = Math.min(b, gg + 12); } } else if (b > Math.max(r, gg)) d[i + 2] = Math.max(r, gg);
    if (a < 0.02) { d[i] = bleed[0]; d[i + 1] = bleed[1]; d[i + 2] = bleed[2]; }
    d[i + 3] = a * 255;
  }
  g.putImageData(id, 0, 0); return c;
}
function scaled(src, w) {
  const W = Math.min(w, src.width), H = Math.round(W * src.height / src.width), c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(src, 0, 0, W, H); return c;
}
async function save(canvas, path, q) {
  const blob = await new Promise((r) => canvas.toBlob(r, 'image/webp', q));
  const res = await fetch('/__save?path=' + encodeURIComponent(path), { method: 'POST', body: blob }); if (!res.ok) throw new Error('save ' + path);
  return blob.size;
}
export async function bake(names = Object.keys(TABLE)) {
  const out = {};
  for (const n of names) {
    const t = TABLE[n]; if (!t) continue;
    const im = await load('/assets/tex/' + (t.src || `${n}.${t.ext || 'jpg'}`) + '?v=' + Date.now());
    const src = t.key ? keyOut(im, t.key, t.bleed) : im;
    const a = await save(scaled(src, t.w), `assets/web/${n}.webp`, t.q), b = await save(scaled(src, t.m), `assets/web/m/${n}.webp`, t.q);
    out[n] = [Math.round(a / 1024), Math.round(b / 1024)];
  }
  return out; // { 名字: [桌面 KB, 手机 KB] }
}
