// 程序化贴图：全部用 canvas 现画，不依赖外部素材
import * as THREE from 'three';

let _s = 20261111;
export function srand(s) { _s = s >>> 0; }
export function rnd() { _s = (_s * 1664525 + 1013904223) >>> 0; return _s / 4294967296; }
export const rr = (a, b) => a + (b - a) * rnd();
export const pick = (a) => a[Math.floor(rnd() * a.length)];

const FONT = '"KaiTi","STKaiti","楷体","Microsoft YaHei","PingFang SC",serif';

function mk(w, h) { const c = document.createElement('canvas'); c.width = Math.max(2, Math.round(w)); c.height = Math.max(2, Math.round(h)); return c; }
function toTex(c, rep = false) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (rep) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
export function shade(hex, k) {
  const c = new THREE.Color(hex);
  const h = {}; c.getHSL(h);
  c.setHSL(h.h, h.s, Math.min(1, Math.max(0, h.l + k)));
  return '#' + c.getHexString();
}
function speckle(g, w, h, n, a) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = rnd() < 0.5 ? `rgba(0,0,0,${a * rnd()})` : `rgba(255,255,255,${a * rnd()})`;
    g.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2, 1 + rnd() * 2);
  }
}
function rrect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r);
  g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r);
  g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y); g.closePath();
}

// 麻石路面
export function pavingTex() {
  const c = mk(512, 512), g = c.getContext('2d');
  g.fillStyle = '#857c6c'; g.fillRect(0, 0, 512, 512);
  const rh = 64;
  for (let r = 0; r < 8; r++) {
    let x = -rnd() * 90;
    while (x < 512) {
      const w = rr(96, 176);
      g.fillStyle = `hsl(${rr(30, 44)},${rr(14, 24)}%,${rr(68, 79)}%)`;
      rrect(g, x + 2, r * rh + 2, w - 4, rh - 4, 5); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.10)'; g.fillRect(x + 4, r * rh + 4, w - 8, 3);
      x += w;
    }
  }
  speckle(g, 512, 512, 2600, 0.10);
  return toTex(c, true);
}

// 瓦面（绿琉璃 / 灰瓦）
export function tileTex(base = '#2f8f6a', hi = '#58c79a') {
  const c = mk(256, 256), g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, 256, 256);
  for (let x = 0; x < 256; x += 32) {
    const gr = g.createLinearGradient(x, 0, x + 32, 0);
    gr.addColorStop(0, 'rgba(0,0,0,0.30)'); gr.addColorStop(0.35, hi); gr.addColorStop(0.65, base); gr.addColorStop(1, 'rgba(0,0,0,0.30)');
    g.fillStyle = gr; g.fillRect(x, 0, 32, 256);
  }
  for (let y = 0; y < 256; y += 42) { g.fillStyle = 'rgba(0,0,0,0.28)'; g.fillRect(0, y, 256, 5); g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(0, y + 5, 256, 3); }
  return toTex(c, true);
}

// 青砖
export function brickTex() {
  const c = mk(256, 256), g = c.getContext('2d');
  g.fillStyle = '#d5dbd8'; g.fillRect(0, 0, 256, 256);
  for (let r = 0; r < 8; r++) for (let i = -1; i < 4; i++) {
    const x = i * 64 + (r % 2 ? 32 : 0);
    g.fillStyle = `hsl(${rr(186, 200)},${rr(10, 18)}%,${rr(50, 60)}%)`;
    g.fillRect(x + 2, r * 32 + 2, 60, 28);
  }
  speckle(g, 256, 256, 700, 0.08);
  return toTex(c, true);
}

// 木板
export function woodTex(base = '#9a6238') {
  const c = mk(256, 256), g = c.getContext('2d');
  for (let i = 0; i < 6; i++) {
    g.fillStyle = shade(base, rr(-0.05, 0.05)); g.fillRect(0, i * 43, 256, 43);
    g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(0, i * 43, 256, 2);
    for (let k = 0; k < 6; k++) { g.fillStyle = `rgba(60,30,10,${rr(0.04, 0.12)})`; g.fillRect(rr(0, 256), i * 43 + rr(4, 38), rr(30, 120), 1.5); }
  }
  return toTex(c, true);
}

// 布棚条纹
export function stripeTex(a, b) {
  const c = mk(128, 128), g = c.getContext('2d');
  for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? a : b; g.fillRect(i * 16, 0, 16, 128); }
  return toTex(c, true);
}

const GLASS = ['#e2463c', '#2f7fd1', '#f2c230', '#2fa76a', '#f7f1df', '#e98a2b'];

function drawWindow(g, x, y, w, h, style, o) {
  // 外框
  g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(x - 3, y + 4, w + 10, h + 6);
  g.fillStyle = o.trim;
  if (style === 'arch') { g.beginPath(); g.moveTo(x - 7, y + h + 7); g.lineTo(x - 7, y + w / 2); g.arc(x + w / 2, y + w / 2, w / 2 + 7, Math.PI, 0); g.lineTo(x + w + 7, y + h + 7); g.closePath(); g.fill(); }
  else g.fillRect(x - 7, y - 7, w + 14, h + 14);
  // 玻璃
  const clip = () => { g.beginPath(); if (style === 'arch') { g.moveTo(x, y + h); g.lineTo(x, y + w / 2); g.arc(x + w / 2, y + w / 2, w / 2, Math.PI, 0); g.lineTo(x + w, y + h); g.closePath(); } else g.rect(x, y, w, h); };
  g.save(); clip(); g.clip();
  if (style === 'manchu') {
    g.fillStyle = '#3a2216'; g.fillRect(x, y, w, h);
    const cols = 3, rows = 4, pw = w / cols, ph = h / rows;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      g.fillStyle = pick(GLASS); g.fillRect(x + i * pw + 2.5, y + j * ph + 2.5, pw - 5, ph - 5);
      g.fillStyle = 'rgba(255,255,255,0.28)'; g.fillRect(x + i * pw + 4, y + j * ph + 4, pw - 8, 4);
    }
  } else if (style === 'shutter') {
    g.fillStyle = o.shutter || '#2f8a82'; g.fillRect(x, y, w, h);
    for (let yy = y + 5; yy < y + h; yy += 7) { g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x, yy, w, 2.5); g.fillStyle = 'rgba(255,255,255,0.16)'; g.fillRect(x, yy + 2.5, w, 1.5); }
    g.fillStyle = 'rgba(0,0,0,0.4)'; g.fillRect(x + w / 2 - 1.5, y, 3, h);
  } else {
    const gr = g.createLinearGradient(x, y, x + w, y + h); gr.addColorStop(0, '#8fd0e0'); gr.addColorStop(0.5, '#3b7d92'); gr.addColorStop(1, '#22536a');
    g.fillStyle = gr; g.fillRect(x, y, w, h);
    g.fillStyle = 'rgba(255,255,255,0.25)'; g.beginPath(); g.moveTo(x, y + h * 0.5); g.lineTo(x + w * 0.6, y); g.lineTo(x + w * 0.85, y); g.lineTo(x, y + h * 0.8); g.fill();
    g.fillStyle = o.trim; g.fillRect(x + w / 2 - 2, y, 4, h); g.fillRect(x, y + h * 0.36, w, 4);
    // 上部点一小排满洲窗彩玻
    for (let i = 0; i < 4; i++) { g.fillStyle = pick(GLASS); g.fillRect(x + i * w / 4 + 2, y + 2, w / 4 - 4, h * 0.36 - 5); }
  }
  g.restore();
}

// 骑楼上层立面
export function facadeTex(Wm, Hm, o) {
  const S = 64, c = mk(Wm * S, Hm * S), g = c.getContext('2d'), W = c.width, H = c.height;
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, shade(o.color, 0.03)); gr.addColorStop(1, shade(o.color, -0.06));
  g.fillStyle = gr; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 26; i++) { g.fillStyle = `rgba(110,80,50,${rr(0.015, 0.05)})`; g.fillRect(rr(0, W), rr(0, H), rr(4, 12), rr(30, 140)); }
  g.fillStyle = o.trim; g.fillRect(0, 0, 24, H); g.fillRect(W - 24, 0, 24, H);
  g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(24, 0, 4, H); g.fillRect(W - 28, 0, 4, H);
  g.fillStyle = o.trim; g.fillRect(0, 0, W, 22); g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, 22, W, 6);
  const floors = o.floors, fh = (H - 22) / floors;
  for (let f = 0; f < floors; f++) {
    const y0 = 22 + f * fh;
    if (f > 0) { g.fillStyle = o.trim; g.fillRect(0, y0 - 7, W, 14); g.fillStyle = 'rgba(0,0,0,0.16)'; g.fillRect(0, y0 + 7, W, 5); }
    const n = o.n, cw = (W - 56) / n;
    for (let i = 0; i < n; i++) {
      const cx = 28 + cw * (i + 0.5), ww = Math.min(cw * 0.6, 92), wh = fh * 0.6, wy = y0 + fh * 0.2;
      drawWindow(g, cx - ww / 2, wy, ww, wh, o.style, o);
      g.fillStyle = o.trim; g.fillRect(cx - ww / 2 - 12, wy + wh + 7, ww + 24, 9);
      g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(cx - ww / 2 - 10, wy + wh + 16, ww + 20, 5);
    }
  }
  speckle(g, W, H, 900, 0.05);
  return toTex(c);
}

// 骑楼底层铺面
export function shopTex(Wm, Hm, o) {
  const S = 64, c = mk(Wm * S, Hm * S), g = c.getContext('2d'), W = c.width, H = c.height;
  g.fillStyle = shade(o.color, -0.16); g.fillRect(0, 0, W, H);
  // 招牌
  const sh = H * 0.22;
  g.fillStyle = o.signBg || '#7a1f1a'; g.fillRect(16, 10, W - 32, sh);
  g.strokeStyle = '#f0c14b'; g.lineWidth = 5; g.strokeRect(22, 16, W - 44, sh - 12);
  g.fillStyle = '#ffd866'; g.font = `bold ${sh * 0.68}px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(o.shop || '士多', W / 2, 10 + sh / 2 + 2);
  // 店面：左门右窗
  const y0 = sh + 26, hh = H - y0;
  const dw = W * 0.3;
  g.fillStyle = '#4b2a17'; g.fillRect(24, y0, dw, hh);
  for (let i = 0; i < 2; i++) {
    g.fillStyle = '#74421f'; g.fillRect(30 + i * (dw / 2 - 2), y0 + 6, dw / 2 - 10, hh - 8);
    for (let k = 0; k < 3; k++) { g.fillStyle = pick(GLASS); g.fillRect(36 + i * (dw / 2 - 2), y0 + 14 + k * 26, dw / 2 - 22, 20); }
  }
  const wx = 24 + dw + 18, ww = W - wx - 24;
  const gr = g.createLinearGradient(0, y0, 0, y0 + hh); gr.addColorStop(0, '#ffd98a'); gr.addColorStop(1, '#c97a3a');
  g.fillStyle = gr; g.fillRect(wx, y0, ww, hh * 0.68);
  for (let i = 0; i < ww / 26; i++) for (let j = 0; j < 3; j++) {
    g.fillStyle = `hsl(${rr(0, 360)},${rr(55, 85)}%,${rr(48, 68)}%)`;
    g.beginPath(); g.arc(wx + 16 + i * 26, y0 + 26 + j * (hh * 0.2), rr(7, 10), 0, 7); g.fill();
  }
  g.fillStyle = 'rgba(60,30,10,0.55)'; for (let j = 1; j < 3; j++) g.fillRect(wx, y0 + j * (hh * 0.2) + 14, ww, 5);
  g.strokeStyle = o.trim; g.lineWidth = 7; g.strokeRect(wx, y0, ww, hh * 0.68);
  g.fillStyle = shade(o.color, -0.26); g.fillRect(wx - 6, y0 + hh * 0.68, ww + 12, hh * 0.32);
  return toTex(c);
}

// 招牌 / 牌匾
export function signTex(text, o = {}) {
  const v = o.vertical, n = [...text].length;
  const cw = v ? 128 : 128 * n + 60, ch = v ? 128 * n + 40 : 168;
  const c = mk(cw, ch), g = c.getContext('2d');
  g.fillStyle = o.bg || '#8a1f1a'; g.fillRect(0, 0, cw, ch);
  g.strokeStyle = o.border || '#f0c14b'; g.lineWidth = 8; g.strokeRect(8, 8, cw - 16, ch - 16);
  g.fillStyle = o.fg || '#ffd866'; g.font = `bold 104px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
  [...text].forEach((chr, i) => { if (v) g.fillText(chr, cw / 2, 20 + 64 + i * 128); else g.fillText(chr, 30 + 64 + i * 128, ch / 2 + 4); });
  if (o.worn) { // 做旧：污渍、划痕、褪色
    for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(20,14,10,${rr(0.04, 0.16)})`; g.beginPath(); g.ellipse(rr(0, cw), rr(0, ch), rr(6, 46), rr(4, 26), rnd() * 3, 0, 7); g.fill(); }
    for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(200,190,170,${rr(0.03, 0.1)})`; g.fillRect(rr(0, cw), rr(0, ch), rr(1, 3), rr(10, 60)); }
    const gr = g.createLinearGradient(0, 0, 0, ch); gr.addColorStop(0, 'rgba(0,0,0,0.28)'); gr.addColorStop(0.3, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.18)'); g.fillStyle = gr; g.fillRect(0, 0, cw, ch);
    speckle(g, cw, ch, 900, 0.12);
  }
  return toTex(c);
}

// 大幅满洲窗（茶楼用）
export function manchuTex(cols = 6, rows = 4) {
  const c = mk(cols * 64, rows * 64), g = c.getContext('2d');
  g.fillStyle = '#3a2216'; g.fillRect(0, 0, c.width, c.height);
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const x = i * 64, y = j * 64;
    g.fillStyle = pick(GLASS); g.fillRect(x + 4, y + 4, 56, 56);
    g.fillStyle = pick(GLASS); g.beginPath(); g.moveTo(x + 32, y + 8); g.lineTo(x + 56, y + 32); g.lineTo(x + 32, y + 56); g.lineTo(x + 8, y + 32); g.closePath(); g.fill();
    g.strokeStyle = '#3a2216'; g.lineWidth = 3; g.stroke();
    g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(x + 6, y + 6, 52, 5);
  }
  const t = toTex(c, true); return t;
}

// 戏台大幕
export function curtainTex() {
  const c = mk(512, 256), g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#c22b2b'); gr.addColorStop(1, '#8a1616');
  g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
  for (let x = 0; x < 512; x += 32) { g.fillStyle = 'rgba(0,0,0,0.14)'; g.fillRect(x, 0, 10, 256); g.fillStyle = 'rgba(255,255,255,0.07)'; g.fillRect(x + 14, 0, 8, 256); }
  g.fillStyle = '#ffd866'; g.font = `bold 120px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('粤韵悠扬', 256, 120);
  g.fillStyle = '#f0c14b'; for (let x = 8; x < 512; x += 24) { g.beginPath(); g.arc(x, 236, 9, 0, 7); g.fill(); }
  return toTex(c);
}

// 广州塔镂空网格
export function latticeTex() {
  const c = mk(128, 128), g = c.getContext('2d');
  g.clearRect(0, 0, 128, 128);
  g.strokeStyle = '#ffffff'; g.lineWidth = 9; g.lineCap = 'square';
  g.beginPath(); g.moveTo(-8, -8); g.lineTo(136, 136); g.moveTo(136, -8); g.lineTo(-8, 136); g.stroke();
  g.lineWidth = 4; g.beginPath(); g.moveTo(0, 64); g.lineTo(128, 64); g.stroke();
  const t = toTex(c, true); return t;
}

// 广彩茶壶
export function potTex() {
  const c = mk(256, 128), g = c.getContext('2d');
  g.fillStyle = '#fbf6ea'; g.fillRect(0, 0, 256, 128);
  g.fillStyle = '#d9a52b'; g.fillRect(0, 0, 256, 10); g.fillRect(0, 112, 256, 16);
  g.fillStyle = '#c8322b'; g.fillRect(0, 10, 256, 6); g.fillRect(0, 106, 256, 6);
  for (let i = 0; i < 4; i++) {
    const x = 32 + i * 64, y = 60;
    g.fillStyle = '#2fa76a'; g.beginPath(); g.ellipse(x - 16, y + 8, 12, 5, -0.5, 0, 7); g.ellipse(x + 16, y + 8, 12, 5, 0.5, 0, 7); g.fill();
    for (let k = 0; k < 5; k++) { const a = k * 1.257; g.fillStyle = k % 2 ? '#e2463c' : '#f0725f'; g.beginPath(); g.arc(x + Math.cos(a) * 9, y + Math.sin(a) * 9, 8, 0, 7); g.fill(); }
    g.fillStyle = '#f2c230'; g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill();
  }
  return toTex(c, true);
}

// 叶簇卡片（带透明）
export function leafTex() {
  const c = mk(256, 256), g = c.getContext('2d');
  for (let i = 0; i < 46; i++) {
    const x = rr(40, 216), y = rr(40, 216), a = rnd() * 6.28, L = rr(26, 44), Wd = L * rr(0.36, 0.5);
    g.save(); g.translate(x, y); g.rotate(a);
    const gr = g.createLinearGradient(-L, 0, L, 0); const l = rr(22, 40), h = rr(88, 118);
    gr.addColorStop(0, `hsl(${h},${rr(40, 60)}%,${l}%)`); gr.addColorStop(1, `hsl(${h - 12},${rr(45, 65)}%,${l + 12}%)`);
    g.fillStyle = gr; g.beginPath(); g.ellipse(0, 0, L, Wd, 0, 0, 7); g.fill();
    g.strokeStyle = 'rgba(210,230,150,0.35)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(-L, 0); g.lineTo(L, 0); g.stroke();
    g.restore();
  }
  const t = toTex(c); return t;
}
// 远景楼的窗格（返回底色与亮窗两张）
export function windowsTex() {
  const c = mk(256, 256), g = c.getContext('2d'), e = mk(256, 256), eg = e.getContext('2d');
  g.fillStyle = '#b9b2a6'; g.fillRect(0, 0, 256, 256); eg.fillStyle = '#000'; eg.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 30; i++) { g.fillStyle = `rgba(60,50,40,${rr(0.03, 0.1)})`; g.fillRect(rr(0, 256), rr(0, 256), rr(4, 10), rr(40, 160)); }
  for (let y = 0; y < 8; y++) for (let x = 0; x < 6; x++) {
    const px = 10 + x * 42, py = 8 + y * 32, lit = rnd() < 0.28;
    g.fillStyle = lit ? '#ffd9a0' : `hsl(205,${rr(15, 30)}%,${rr(16, 30)}%)`; g.fillRect(px, py, 26, 18);
    g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(px, py, 26, 4);
    if (lit) { eg.fillStyle = pick(['#ffc98a', '#ffe0b0', '#ffb870']); eg.fillRect(px, py, 26, 18); }
  }
  return [toTex(c, true), toTex(e, true)];
}
// 透明底的刻字（贴在照片牌匾上）
export function textTex(text, color = '#2a130c') {
  const n = [...text].length, c = mk(140 * n + 40, 180), g = c.getContext('2d');
  g.fillStyle = color; g.font = `bold 128px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.shadowColor = 'rgba(255,255,255,0.25)'; g.shadowOffsetY = 2; g.shadowBlur = 1;
  [...text].forEach((chr, i) => g.fillText(chr, 20 + 70 + i * 140, 94));
  g.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(0,0,0,${rr(0.2, 0.7)})`; g.fillRect(rr(0, c.width), rr(0, 180), rr(1, 5), rr(1, 5)); }
  return toTex(c);
}
// 霓虹/灯箱招牌：返回发光贴图
export function neonTex(text, color = '#ff5a3c', vertical = true) {
  const n = [...text].length, cw = vertical ? 128 : 120 * n + 40, ch = vertical ? 120 * n + 40 : 150;
  const c = mk(cw, ch), g = c.getContext('2d');
  g.fillStyle = '#14100e'; g.fillRect(0, 0, cw, ch);
  g.strokeStyle = color; g.lineWidth = 5; g.shadowColor = color; g.shadowBlur = 16; g.strokeRect(9, 9, cw - 18, ch - 18);
  g.fillStyle = '#fff4e8'; g.font = `bold 96px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.shadowBlur = 22;
  [...text].forEach((chr, i) => { if (vertical) g.fillText(chr, cw / 2, 20 + 60 + i * 120); else g.fillText(chr, 20 + 60 + i * 120, ch / 2 + 4); });
  return toTex(c);
}
