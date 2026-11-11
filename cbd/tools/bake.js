// 素材预处理（在本地页面里跑）：cbd/assets/src/*.png → 缩放、压成 WebP → cbd/assets/web/
// 用法：node server.js 后，在 http://localhost:5199/cbd/ 的控制台里： const m = await import('/cbd/tools/bake.js'); await m.bake();
export const TABLE = { sky: [1774, 0.9], grass: [1024, 0.86], paving: [1024, 0.88], flowers: [1024, 0.86], posters: [1672, 0.88], shopsA: [1536, 0.88], shopsB: [1536, 0.88], curtain: [1024, 0.9], cladding: [1024, 0.9], asphalt: [1024, 0.88], sidewalk: [1024, 0.88], props1: [1254, 0.9], vend: [1536, 0.9], menu: [1536, 0.9] };
const load = (url) => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error('load ' + url)); i.src = url; });
export async function bake(names = Object.keys(TABLE)) {
  const out = {};
  for (const n of names) {
    const [w, q] = TABLE[n], im = await load(`/cbd/assets/src/${n}.png?v=${Date.now()}`);
    const W = Math.min(w, im.width), H = Math.round(W * im.height / im.width), c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(im, 0, 0, W, H);
    const blob = await new Promise((r) => c.toBlob(r, 'image/webp', q));
    const res = await fetch('/__save?path=' + encodeURIComponent(`cbd/assets/web/${n}.webp`), { method: 'POST', body: blob }); if (!res.ok) throw new Error('save ' + n);
    out[n] = Math.round(blob.size / 1024);
  }
  return out;
}
