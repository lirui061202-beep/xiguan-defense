// 载入 Codex 生成的写实贴图，并在浏览器里推导法线 / 粗糙度贴图
import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

// 素材由 tools/bake.js 预处理成 webp：assets/web（桌面）与 assets/web/m（手机，尺寸减半）
const TILES = ['paving', 'plaster', 'brick', 'rooftile', 'wood', 'bark', 'foliage', 'manchu', 'facadeA', 'facadeB', 'facadeC', 'shopA', 'shopB', 'shopC', 'sky', 'container', 'sandbags', 'crate', 'concrete', 'rustmetal', 'apartment', 'teahouse', 'lacquer', 'manhole', 'balustrade'];
const CUTOUTS = ['gunHip', 'gunAds', 'leafcard', 'kapoktree', 'streettree', 'scooters', 'plants', 'stools', 'bins', 'pole', 'leaves', 'paifang', 'skylineEast', 'skylineCity'];
const FALLBACK = { lacquer: '#7a2a22', shopC: '#77706a', manhole: '#4a4744', container: '#8a8f92', sandbags: '#6f6650', crate: '#8a6a48', concrete: '#8c8a86', rustmetal: '#5a5f58', apartment: '#b5ab9c', teahouse: '#c9b58c', paving: '#8d8676', plaster: '#d8d2c4', brick: '#75838a', rooftile: '#2f7f62', wood: '#6b4127', bark: '#6a5a4a', foliage: '#3c7a3a', manchu: '#7a3b22', facadeA: '#d9c58f', facadeB: '#a8c4b2', facadeC: '#d3a393', shopA: '#5a3a26', shopB: '#77706a', sky: '#f0b27a', balustrade: '#8f8b82' };

export async function loadAssets(opt = {}, onProgress) {
  const img = {}, all = [...TILES, ...CUTOUTS], dir = `./assets/web/${opt.lite ? 'm/' : ''}`; let done = 0;
  await Promise.all(all.map((n) => new Promise((res) => {
    const i = new Image(); i.decoding = 'async';
    i.onload = () => { img[n] = i; done++; onProgress && onProgress(done, all.length); res(); };
    i.onerror = () => { img[n] = null; done++; onProgress && onProgress(done, all.length); res(); };
    i.src = dir + n + '.webp';
  })));
  return new Assets(img, opt);
}

// 法线 / 粗糙度在显卡上由反照率推导（比在 JS 里逐像素算快得多）
const bakeMat = new THREE.ShaderMaterial({
  depthTest: false, depthWrite: false,
  uniforms: { map: { value: null }, px: { value: new THREE.Vector2() }, s: { value: 2 }, r0: { value: 0.85 }, rk: { value: 0.5 }, mode: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
  fragmentShader: `uniform sampler2D map; uniform vec2 px; uniform float s, r0, rk; uniform int mode; varying vec2 vUv;
    float L(vec2 o){ vec3 c=texture2D(map,vUv+o*px).rgb; return pow(max(dot(c,vec3(.299,.587,.114)),0.),.4545); }
    void main(){
      if(mode==0){ float dx=(L(vec2(1.,0.))-L(vec2(-1.,0.)))+.5*(L(vec2(2.,0.))-L(vec2(-2.,0.))); float dy=(L(vec2(0.,-1.))-L(vec2(0.,1.)))+.5*(L(vec2(0.,-2.))-L(vec2(0.,2.)));
        vec3 n=normalize(vec3(-dx*s,dy*s,1.)); gl_FragColor=vec4(n*.5+.5,1.); }
      else { float r=clamp(r0+(.5-L(vec2(0.)))*rk,.04,1.); gl_FragColor=vec4(r,r,r,1.); }
    }`,
});
const bakeQuad = new FullScreenQuad(bakeMat);

function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

export class Assets {
  constructor(img, opt = {}) { this.img = img; this.cache = new Map(); this.cuts = new Map(); this.lite = !!opt.lite; this.renderer = opt.renderer; }
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
  // 抠像素材（预处理时已做色键）：返回 { tex, aspect, canvas }，缺图返回 null
  cutout(name) {
    const im = this.img[name]; if (!im) return null; if (this.cuts.has(name)) return this.cuts.get(name);
    const t = new THREE.Texture(im); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.needsUpdate = true;
    const out = { tex: t, aspect: im.width / im.height, get canvas() { const c = mk(im.width, im.height); c.getContext('2d').drawImage(im, 0, 0); return c; } };
    this.cuts.set(name, out); return out;
  }
  // 返回 { map, normalMap, roughnessMap }
  pbr(name, o = {}) {
    const key = name + JSON.stringify(o);
    if (this.cache.has(key)) return this.cache.get(key);
    const im = this.img[name], wrap = o.repeat !== false ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
    let map;
    if (im && !o.gain && !o.desat) map = new THREE.Texture(im);
    else { // 缺图兜底，或需要先调反照率
      const W0 = im ? im.width : 256, H0 = im ? im.height : Math.round(256 * (o.aspect || 1)), c = this.canvas(name, W0, H0);
      if (o.gain || o.desat) { const g = c.getContext('2d'), id = g.getImageData(0, 0, W0, H0), d = id.data, ds = o.desat || 0, gn = o.gain || 1; for (let j = 0; j < d.length; j += 4) { const l = d[j] * 0.299 + d[j + 1] * 0.587 + d[j + 2] * 0.114; for (let k = 0; k < 3; k++) d[j + k] = Math.min(255, (d[j + k] * (1 - ds) + l * ds) * gn); } g.putImageData(id, 0, 0); }
      map = new THREE.CanvasTexture(c);
    }
    map.colorSpace = THREE.SRGBColorSpace; map.wrapS = map.wrapT = wrap; map.anisotropy = 8; map.needsUpdate = true;
    const sw = map.image.width, sh = map.image.height, W = Math.min(o.size || sw, sw), H = Math.max(2, Math.round(W * sh / sw));
    const mkRT = () => { const rt = new THREE.WebGLRenderTarget(W, H, { depthBuffer: false, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter, wrapS: wrap, wrapT: wrap }); rt.texture.anisotropy = 8; return rt; };
    const nrt = mkRT(), rrt = mkRT(), u = bakeMat.uniforms, r = this.renderer, old = r.getRenderTarget();
    u.map.value = map; u.px.value.set(1 / W, 1 / H); u.s.value = o.normal ?? 2.0; u.r0.value = o.rough ?? 0.85; u.rk.value = o.roughK ?? 0.5;
    u.mode.value = 0; r.setRenderTarget(nrt); bakeQuad.render(r); u.mode.value = 1; r.setRenderTarget(rrt); bakeQuad.render(r); r.setRenderTarget(old);
    const out = { map, normalMap: nrt.texture, roughnessMap: rrt.texture };
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
