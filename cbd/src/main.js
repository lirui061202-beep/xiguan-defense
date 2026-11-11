// 花城漫步：第一人称在珠江新城花城广场一带走、跑、飞
import * as THREE from 'three';
import { SUN_DIR, SKY_U, HAZE, makeSky } from './sky.js';
import { buildCity } from './city.js';
import { makePost } from './post.js';
import { L, ellSd } from './layout.js';
import { setCurtain } from './mats.js';

const Q = new URLSearchParams(location.search);
const MOBILE = Q.has('mobile') || (matchMedia('(pointer: coarse)').matches && 'ontouchstart' in window);
const NOLOCK = Q.has('nolock') || MOBILE;
const $ = (id) => document.getElementById(id);

const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, MOBILE ? 1.25 : 1.5));
renderer.setSize(innerWidth, innerHeight, false);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NoToneMapping;

// 高度雾：近地面浓、楼顶淡，远处的楼自然分出层次
THREE.ShaderChunk.fog_pars_vertex = `#ifdef USE_FOG
  varying float vFogDepth; varying float vFogY;
#endif`;
THREE.ShaderChunk.fog_vertex = `#ifdef USE_FOG
  vFogDepth = - mvPosition.z; vFogY = (cameraPosition + transpose(mat3(viewMatrix)) * mvPosition.xyz).y;
#endif`;
THREE.ShaderChunk.fog_pars_fragment = `#ifdef USE_FOG
  uniform vec3 fogColor; varying float vFogDepth; varying float vFogY; uniform float fogDensity;
#endif`;
THREE.ShaderChunk.fog_fragment = `#ifdef USE_FOG
  float fd = fogDensity * vFogDepth; float fogFactor = (1.0 - exp(-fd * fd)) * mix(0.5, 1.0, exp(-max(vFogY, 0.0) / 320.0));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
#endif`;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(HAZE.clone().multiplyScalar(0.98), 0.00085);
const camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.15, 6000);
camera.rotation.order = 'YXZ';

// ---------- 加载 ----------
const NAMES = ['sky', 'grass', 'paving', 'flowers', 'posters', 'curtain', 'cladding', 'asphalt', 'sidewalk', 'props1', 'vend', 'menu'];
async function loadTex() {
  const ld = new THREE.TextureLoader(), out = {}; let done = 0;
  await Promise.all(NAMES.map(async (n) => {
    const t = await ld.loadAsync(`./assets/web/${n}.webp`).catch(() => ld.loadAsync(`./assets/src/${n}.png`)).catch(() => null);
    if (t) { t.colorSpace = THREE.SRGBColorSpace; if (n !== 'sky' && n !== 'posters') { t.wrapS = t.wrapT = THREE.RepeatWrapping; } t.anisotropy = renderer.capabilities.getMaxAnisotropy(); }
    out[n] = t; $('loadBar').style.width = (++done / NAMES.length) * 70 + '%';
  }));
  return out;
}

const player = { pos: new THREE.Vector3(0, 0, -179), vel: new THREE.Vector3(), yaw: Math.PI, pitch: 0.1, ground: true, fly: false, eye: 1.64 };
const keys = {}; let started = false, hideUI = false;
let city, post, sun, sky;

// 让出一帧（不用 setTimeout：页面在后台时定时器会被浏览器拖慢）
const tick = () => new Promise((r) => { const c = new MessageChannel(); c.port1.onmessage = () => r(); c.port2.postMessage(0); });
async function init() {
  const tex = await loadTex();
  sky = makeSky(tex.sky); sky.scale.setScalar(1); scene.add(sky);
  if (tex.curtain) setCurtain(tex.curtain);
  // 车漆用的环境反射：直接拿天空图
  { const env = tex.sky.clone(); env.needsUpdate = true; env.mapping = THREE.EquirectangularReflectionMapping; const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromEquirectangular(env).texture; pm.dispose(); }
  // 光比拉开：太阳强而暖，环境光弱而蓝，阴影才有分量
  scene.add(new THREE.HemisphereLight('#a9c2ea', '#9aa2b6', 1.45));
  sun = new THREE.DirectionalLight('#fff1dc', 3.9);
  sun.castShadow = true; sun.shadow.mapSize.set(MOBILE ? 2048 : 4096, MOBILE ? 2048 : 4096);
  const sc = sun.shadow.camera; sc.left = -140; sc.right = 140; sc.top = 140; sc.bottom = -140; sc.near = 10; sc.far = 1500; sc.updateProjectionMatrix();
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.35; sun.shadow.radius = 1.6;
  scene.add(sun, sun.target);
  $('loadTxt').textContent = '正在盖楼、种树…'; await tick();
  city = buildCity(scene, tex);
  $('loadBar').style.width = '92%'; await tick();
  post = makePost(renderer, scene, camera, { samples: MOBILE ? 0 : 4, ao: !MOBILE });
  resize();
  placeSun(true); syncCamera(); renderer.compile(scene, camera); post.render();
  $('loadBar').style.width = '100%';
  $('loading').style.display = 'none'; $('title').style.display = 'flex';
  if (Q.has('auto')) start();
  requestAnimationFrame(loop);
}

function resize() {
  const w = innerWidth, h = innerHeight; camera.aspect = w / h; camera.updateProjectionMatrix();
  renderer.setSize(w, h, false); if (post) post.setSize(w, h, renderer.getPixelRatio());
}
addEventListener('resize', resize);

// ---------- 输入 ----------
function start() {
  started = true; $('title').style.display = 'none'; $('hud').style.display = hideUI ? 'none' : 'block';
  if (MOBILE) $('touch').style.display = 'block'; else if (!NOLOCK) { try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch (e) { /* 窗格里锁不了鼠标就用拖动 */ } }
  setTimeout(lockHint, 400);
}
$('title').addEventListener('click', start);
canvas.addEventListener('dblclick', () => { if (started && !NOLOCK && document.pointerLockElement !== canvas) { try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch (e) { /* 忽略 */ } } });
let dragging = false, lastMX = 0, lastMY = 0;
const look = (dx, dy, k) => { player.yaw -= dx * k; player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch - dy * k)); };
addEventListener('mousedown', (e) => { if (!started) return; dragging = true; lastMX = e.clientX; lastMY = e.clientY; });
addEventListener('mouseup', () => { dragging = false; });
addEventListener('mousemove', (e) => {
  if (document.pointerLockElement === canvas) return look(e.movementX, e.movementY, 0.0022);
  if (dragging && started) { look(e.clientX - lastMX, e.clientY - lastMY, 0.0045); lastMX = e.clientX; lastMY = e.clientY; }   // 没锁住鼠标：按住拖动
});
const lockHint = () => { if (started && !MOBILE && !player.fly) $('mode').innerHTML = document.pointerLockElement === canvas ? '' : '按住鼠标拖动转视角<br><span style="opacity:.8">或用方向键 ←→↑↓</span>'; };
document.addEventListener('pointerlockchange', lockHint); document.addEventListener('pointerlockerror', lockHint);
addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (e.code === 'KeyF') toggleFly();
  if (e.code === 'KeyH') { hideUI = !hideUI; $('hud').style.display = hideUI || !started ? 'none' : 'block'; }
  if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
});
addEventListener('keyup', (e) => { keys[e.code] = false; });
function toggleFly() {
  player.fly = !player.fly; player.vel.set(0, 0, 0);
  if (player.fly && player.pos.y < 6) player.pos.y = 6;
  $('mode').innerHTML = player.fly ? '飞行观光中<br><span style="opacity:.8">再按 F 落地</span>' : '';
}
// 触屏：左半屏摇杆，右半屏拖动转视角
const touch = { stick: null, look: null, mx: 0, mz: 0, run: false };
if (MOBILE) {
  const tz = $('touch'), st = $('stick'), knob = st.firstElementChild;
  tz.addEventListener('touchstart', (e) => {
    for (const t of e.changedTouches) {
      if (t.target.dataset && t.target.dataset.b) { const b = t.target.dataset.b; if (b === 'jump') keys.Space = true; if (b === 'run') touch.run = !touch.run; if (b === 'fly') toggleFly(); continue; }
      if (t.clientX < innerWidth * 0.45 && !touch.stick) { touch.stick = { id: t.identifier, x: t.clientX, y: t.clientY }; st.style.display = 'block'; st.style.left = t.clientX + 'px'; st.style.top = t.clientY + 'px'; }
      else if (!touch.look) touch.look = { id: t.identifier, x: t.clientX, y: t.clientY };
    }
    e.preventDefault();
  }, { passive: false });
  tz.addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (touch.stick && t.identifier === touch.stick.id) { let dx = t.clientX - touch.stick.x, dy = t.clientY - touch.stick.y; const l = Math.hypot(dx, dy), m = 52; if (l > m) { dx *= m / l; dy *= m / l; } touch.mx = dx / m; touch.mz = dy / m; knob.style.transform = `translate(${dx}px,${dy}px)`; }
      if (touch.look && t.identifier === touch.look.id) { player.yaw -= (t.clientX - touch.look.x) * 0.0052; player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch - (t.clientY - touch.look.y) * 0.0052)); touch.look.x = t.clientX; touch.look.y = t.clientY; }
    }
    e.preventDefault();
  }, { passive: false });
  const end = (e) => { for (const t of e.changedTouches) { if (touch.stick && t.identifier === touch.stick.id) { touch.stick = null; touch.mx = touch.mz = 0; st.style.display = 'none'; knob.style.transform = ''; } if (touch.look && t.identifier === touch.look.id) touch.look = null; if (t.target.dataset && t.target.dataset.b === 'jump') keys.Space = false; } };
  tz.addEventListener('touchend', end); tz.addEventListener('touchcancel', end);
}

// ---------- 移动与碰撞 ----------
const R = 0.4;
function collide(p) {
  for (let it = 0; it < 2; it++) {
    for (const c of city.colliders) {
      const nx = Math.max(c.x0, Math.min(p.x, c.x1)), nz = Math.max(c.z0, Math.min(p.z, c.z1)); let dx = p.x - nx, dz = p.z - nz; const d2 = dx * dx + dz * dz;
      if (d2 >= R * R) continue;
      if (d2 > 1e-8) { const d = Math.sqrt(d2); p.x = nx + dx / d * R; p.z = nz + dz / d * R; }
      else { const l = p.x - c.x0, r = c.x1 - p.x, t = p.z - c.z0, b = c.z1 - p.z, m = Math.min(l, r, t, b); if (m === l) p.x = c.x0 - R; else if (m === r) p.x = c.x1 + R; else if (m === t) p.z = c.z0 - R; else p.z = c.z1 + R; }
    }
    for (const c of city.circles) { const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = c.r + R; if (d < m && d > 1e-5) { p.x = c.x + dx / d * m; p.z = c.z + dz / d * m; } }
    const sd = ellSd(p.x, p.z, L.LAKE, 1.0);
    if (sd < 0 && Math.abs(p.x - L.LAKE.x) < 2.0) p.x = Math.max(L.LAKE.x - 1.7, Math.min(L.LAKE.x + 1.7, p.x));   // 在栈桥上：只限制别走出栏杆
    else if (sd < 0) { const e = 0.05, gx = ellSd(p.x + e, p.z, L.LAKE, 1.0) - sd, gz = ellSd(p.x, p.z + e, L.LAKE, 1.0) - sd, gl = Math.hypot(gx, gz) || 1; p.x -= gx / gl * sd; p.z -= gz / gl * sd; }
  }
  p.x = Math.max(-250, Math.min(250, p.x)); p.z = Math.max(-455, Math.min(L.BANK - 1.9, p.z));
}
const fwd = new THREE.Vector3(), right = new THREE.Vector3(), wish = new THREE.Vector3();
let bob = 0;
function movePlayer(dt) {
  const p = player; fwd.set(-Math.sin(p.yaw), 0, -Math.cos(p.yaw)); right.set(Math.cos(p.yaw), 0, -Math.sin(p.yaw));
  let ix = (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0) + touch.mx, iz = (keys.KeyW ? 1 : 0) - (keys.KeyS ? 1 : 0) - touch.mz;
  const il = Math.hypot(ix, iz); if (il > 1) { ix /= il; iz /= il; }
  const run = keys.ShiftLeft || keys.ShiftRight || touch.run;
  look((keys.ArrowRight ? 1 : 0) - (keys.ArrowLeft ? 1 : 0), (keys.ArrowDown ? 1 : 0) - (keys.ArrowUp ? 1 : 0), dt * 1.7);
  if (p.fly) {
    const sp = run ? 130 : 42; fwd.set(-Math.sin(p.yaw) * Math.cos(p.pitch), Math.sin(p.pitch), -Math.cos(p.yaw) * Math.cos(p.pitch));
    wish.set(0, 0, 0).addScaledVector(fwd, iz).addScaledVector(right, ix); wish.y += (keys.KeyE || keys.Space ? 1 : 0) - (keys.KeyQ ? 1 : 0);
    p.vel.lerp(wish.multiplyScalar(sp), 1 - Math.exp(-dt * 5)); p.pos.addScaledVector(p.vel, dt);
    p.pos.y = Math.max(1.2, Math.min(900, p.pos.y)); p.pos.x = Math.max(-1200, Math.min(1200, p.pos.x)); p.pos.z = Math.max(-1300, Math.min(1500, p.pos.z));
    return;
  }
  const sp = run ? 9.6 : 5.0; wish.set(0, 0, 0).addScaledVector(fwd, iz).addScaledVector(right, ix).multiplyScalar(sp);
  const k = 1 - Math.exp(-dt * (p.ground ? 12 : 3)); p.vel.x += (wish.x - p.vel.x) * k; p.vel.z += (wish.z - p.vel.z) * k;
  if (p.ground && keys.Space) { p.vel.y = 5.6; p.ground = false; }
  p.vel.y -= 16 * dt; p.pos.addScaledVector(p.vel, dt);
  if (p.pos.y <= 0) { p.pos.y = 0; p.vel.y = 0; p.ground = true; }
  collide(p.pos);
  const hs = Math.hypot(p.vel.x, p.vel.z); if (p.ground && hs > 0.5) bob += dt * hs * 1.5;
}
function syncCamera() {
  const p = player, hs = Math.hypot(p.vel.x, p.vel.z), amp = p.fly || !p.ground ? 0 : Math.min(hs / 9, 1) * 0.045;
  camera.position.set(p.pos.x, p.pos.y + (p.fly ? 0 : p.eye) + Math.sin(bob * 2) * amp, p.pos.z);
  camera.rotation.set(p.pitch, p.yaw, 0);
  sky.position.copy(camera.position);
}

// ---------- 太阳：阴影跟着人走，镜头光晕看有没有被楼挡住 ----------
const sunPos = new THREE.Vector3(), tmp = new THREE.Vector3(); let sunVis = 0, lastSX = 1e9, lastSZ = 1e9;
function placeSun(force) {
  const gx = Math.round(camera.position.x / 6) * 6, gz = Math.round(camera.position.z / 6) * 6;
  if (force || gx !== lastSX || gz !== lastSZ) {
    lastSX = gx; lastSZ = gz; sun.target.position.set(gx, 0, gz); sun.position.copy(sun.target.position).addScaledVector(SUN_DIR, 700); sun.target.updateMatrixWorld();
  }
}
function sunBlocked() {
  const o = camera.position, d = SUN_DIR;
  for (const b of city.blockers) {
    let t0 = 0, t1 = 1e9;
    for (const [oo, dd, lo, hi] of [[o.x, d.x, b.x0, b.x1], [o.y, d.y, 0, b.y1], [o.z, d.z, b.z0, b.z1]]) {
      if (Math.abs(dd) < 1e-6) { if (oo < lo || oo > hi) { t0 = 1; t1 = 0; break; } continue; }
      let a = (lo - oo) / dd, c = (hi - oo) / dd; if (a > c) [a, c] = [c, a]; t0 = Math.max(t0, a); t1 = Math.min(t1, c); if (t0 > t1) break;
    }
    if (t0 <= t1) return true;
  }
  return false;
}
function updateFlare(dt) {
  tmp.copy(camera.position).addScaledVector(SUN_DIR, 1000).project(camera);
  const front = tmp.z < 1 && Math.abs(tmp.x) < 1.25 && Math.abs(tmp.y) < 1.25;
  const target = front && !sunBlocked() ? 1 : 0; sunVis += (target - sunVis) * Math.min(1, dt * 6);
  post.setSun(tmp.x * 0.5 + 0.5, tmp.y * 0.5 + 0.5, front ? sunVis : 0);
}

// ---------- 地点提示 ----------
const SPOTS = [
  { x: 0, z: -186, r: 26, n: '花城广场 · 北入口' }, { x: -64, z: -124, r: 22, n: '广州国际金融中心 · 西塔' }, { x: 64, z: -124, r: 22, n: '周大福金融中心 · 东塔' },
  { x: 0, z: 10, r: 50, n: '花城广场 · 中心湖' }, { x: 64, z: 36, r: 24, n: '广州图书馆' }, { x: 64, z: 150, r: 24, n: '广东省博物馆' }, { x: -64, z: 150, r: 26, n: '广州大剧院' },
  { x: 0, z: 248, r: 30, n: '珠江 · 眺望广州塔' },
];
let spotName = '', spotT = 0;
function updateSpot(dt) {
  let n = ''; for (const s of SPOTS) if (Math.hypot(player.pos.x - s.x, player.pos.z - s.z) < s.r) { n = s.n; break; }
  if (n && n !== spotName) { spotName = n; spotT = 4; $('spot').textContent = n; $('spot').style.opacity = 1; }
  if (!n) spotName = '';
  if (spotT > 0) { spotT -= dt; if (spotT <= 0) $('spot').style.opacity = 0; }
}

// ---------- 主循环 ----------
let last = performance.now(), time = 0;
function frame(dt) {
  time += dt; SKY_U.uTime.value = time; SKY_U.uSkyRot.value = 0.6 + time * 0.0012;
  if (started) { movePlayer(dt); updateSpot(dt); }
  city.update(dt, time); syncCamera(); placeSun(false); updateFlare(dt);
  post.render();
}
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now; frame(dt); requestAnimationFrame(loop);
}

// ---------- 自测接口 ----------
window.__g = {
  player, scene, camera, renderer, get city() { return city; }, MOBILE,
  tp(x, y, z, yaw, pitch = 0, fly = true) { player.fly = fly; player.pos.set(x, y, z); player.vel.set(0, 0, 0); player.yaw = yaw; player.pitch = pitch; },
  step(n = 1, dt = 1 / 60) { for (let i = 0; i < n; i++) frame(dt); },
  async shot(name, q = 0.88) { frame(1 / 60); const d = canvas.toDataURL('image/jpeg', q); await fetch('/__shot?name=' + name, { method: 'POST', body: d }); return name; },
  start,
};

init().catch((e) => { console.error(e); $('loadTxt').textContent = '加载失败：' + e.message; });
