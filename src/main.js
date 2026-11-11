import * as THREE from 'three';
import { loadAssets } from './assets.js';
import { makePost, makeReflection, installSoftShadows } from './post.js';
import { buildWorld, SUN_DIR } from './world.js';
import { Player } from './player.js';
import { FX } from './fx.js';
import { Sfx } from './audio.js';
import { Weapon } from './weapon.js';
import { Enemies } from './enemies.js';

const Q = new URLSearchParams(location.search);
const MOBILE = Q.has('mobile') || (matchMedia('(pointer: coarse)').matches && 'ontouchstart' in window); // 手机/平板：触控 + 轻量画质
const NOLOCK = Q.has('nolock') || MOBILE, $ = (id) => document.getElementById(id);
document.body.classList.toggle('mobile', MOBILE);

// ---------- 渲染器 ----------
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
if (!MOBILE) installSoftShadows();
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap; renderer.shadowMap.autoUpdate = false;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(76, 1, 0.04, 3000); scene.add(camera);

// ---------- 资源、天空、环境光 ----------
const A = await loadAssets({ lite: MOBILE });
const sky = A.sky(SUN_DIR, 14);
{ const h = sky.horizon, l = h.r * 0.3 + h.g * 0.55 + h.b * 0.15, f = (v) => Math.pow(l + (v - l) * 0.85, 1.12) * 1.9 * 0.9; sky.horizon = new THREE.Color(f(h.r), f(h.g), f(h.b)); } // 与天穹着色器同一套增益，地平线和雾才接得上
const FOG_D = 0.0058;
scene.fog = new THREE.FogExp2(sky.horizon, FOG_D); renderer.setClearColor(sky.horizon);
{ const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromEquirectangular(sky.tex).texture; pm.dispose(); }

scene.add(new THREE.HemisphereLight('#aab6cc', '#8f7a66', 0.42));
const sun = new THREE.DirectionalLight('#ffd0a0', 5.6);
sun.position.copy(SUN_DIR).multiplyScalar(110); sun.castShadow = true;
sun.shadow.mapSize.set(MOBILE ? 2048 : 4096, MOBILE ? 2048 : 4096);
Object.assign(sun.shadow.camera, { left: -66, right: 66, top: 50, bottom: -50, near: 1, far: 260 });
sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.05;
scene.add(sun, sun.target);

const world = buildWorld(scene, A, sky, { lite: MOBILE }); world.setFog(FOG_D);
const fx = new FX(scene, world);
const sfx = new Sfx(Q.has('mute'));
const overlayScene = new THREE.Scene(), overlayCam = new THREE.PerspectiveCamera(76, 1, 0.04, 10); overlayScene.add(overlayCam); // 持枪画面单独一层
const post = makePost(renderer, scene, camera, sun, { scene: overlayScene, camera: overlayCam }, { samples: MOBILE ? 0 : 4 });
const refl = makeReflection(renderer, scene, camera); world.refl.tRefl.value = refl.texture; world.refl.reflMatrix.value = refl.matrix;
let quality = Q.has('q') ? +Q.get('q') : (MOBILE ? 0 : 2); post.setQuality(quality);
function resize() {
  const w = innerWidth, h = innerHeight, pr = Math.min(devicePixelRatio || 1, MOBILE ? 1.5 : quality >= 2 ? 1.5 : quality === 1 ? 1.25 : 1);
  renderer.setPixelRatio(1); renderer.setSize(w * pr, h * pr, false); post.setSize(Math.round(w * pr), Math.round(h * pr)); refl.setSize(Math.round(w * pr), Math.round(h * pr));
  camera.aspect = overlayCam.aspect = w / h; camera.updateProjectionMatrix(); overlayCam.updateProjectionMatrix();
  $('rotate').style.display = MOBILE && h > w ? 'flex' : 'none'; fx.pmat.uniforms.scale.value = h * pr * 0.75;
}
addEventListener('resize', resize); resize();

// ---------- 状态 ----------
const WAVES = [{ trooper: 3 }, { trooper: 4, drone: 2 }, { trooper: 5, drone: 3, heavy: 1 }, { trooper: 6, drone: 4, heavy: 1 }, { trooper: 8, drone: 5, heavy: 2 }]; // 共 44 个（原 69）
const MAX_ALIVE = MOBILE ? 5 : 7; // 同屏敌人上限（原 11）
const S = { mode: 'load', t: 0, time: 0, wave: 0, phase: 'idle', phaseT: 0, queue: [], spawnT: 0, total: 0, killed: 0, score: 0, kills: 0, heads: 0, hurtK: 0, regenT: 0, won: false, over: false };
let toastT = 0;
function toast(msg, sub = '', dur = 2.4) { const el = $('toast'); el.innerHTML = msg + (sub ? `<small>${sub}</small>` : ''); el.classList.add('on'); toastT = dur; }
function flash() { const f = $('fade'); f.style.opacity = 0.85; setTimeout(() => { f.style.opacity = 0; }, 220); }
function feed(txt, hs) { const d = document.createElement('div'); d.textContent = txt; if (hs) d.className = 'hs'; $('feed').prepend(d); setTimeout(() => d.remove(), 2400); while ($('feed').children.length > 5) $('feed').lastChild.remove(); }
let hitT = 0, dmgT = 0;
function hitMarker(kill) { const h = $('hit'); h.className = kill ? 'kill' : ''; hitT = kill ? 0.28 : 0.14; sfx.hitmark(kill); }

const emit = (type, data) => {
  if (type === 'jump') sfx.jump();
  else if (type === 'jump2') { sfx.jump2(); fx.burst(player.pos, 8, 2, '#d8d0c0', { life: 0.3, size: 0.14, grav: 0, up: -0.5 }); }
  else if (type === 'dash') sfx.dash();
  else if (type === 'land') { sfx.land(); fx.burst(player.pos, 6, 1.4, '#9a8f80', { life: 0.5, size: 0.3, grav: -0.5, drag: 2, grow: 1.5 }); }
  else if (type === 'bounce') { sfx.bounce(); fx.ring(player.pos, '#ffffff', 3); }
  else if (type === 'pound') {
    fx.ring(player.pos, '#ffd9a0', 8); fx.burst(player.pos, 26, 5, '#9a8f80', { life: 0.8, size: 0.4, up: 2, grav: 1, drag: 2, grow: 1.6 });
    if (data.tag === 'drum') sfx.drum(); else sfx.pound();
    for (const e of enemies.list) { if (e.dead) continue; const d = e.pos.distanceTo(player.pos); if (d < 4.6) { const dir = e.pos.clone().sub(player.pos).setY(0).normalize(); if (e.damage(75 * (1 - d / 7), ctx, dir.multiplyScalar(4))) onKill(e, false); else hitMarker(false); } }
  } else if (type === 'splash') { sfx.splash(); fx.burst(data.setY(-0.9), 40, 5, '#d8ecf5', { up: 5, life: 0.7, size: 0.2 }); flash(); hurt(10, null); }
  else if (type === 'zipStart') sfx.zip();
};
const player = new Player(camera, world, emit);
const weapon = new Weapon(camera, world, fx, sfx, A, overlayCam); weapon.holder.visible = false;
const enemies = new Enemies(scene, world, A);

// 掉落物
const drops = [];
const dropGeo = new THREE.BoxGeometry(0.42, 0.26, 0.3);
const dropTex = A.pbr('rustmetal', { size: 256, normal: 2, rough: 0.55, roughK: 0.4 });
const dropMat = { ammo: new THREE.MeshStandardMaterial({ ...dropTex, color: '#b9b48a', roughness: 1, metalness: 0.4, emissive: '#ffb23c', emissiveIntensity: 0.22 }), med: new THREE.MeshStandardMaterial({ ...dropTex, color: '#e6e6e6', roughness: 1, metalness: 0.1, emissive: '#3cff8a', emissiveIntensity: 0.22 }) };
function drop(kind, pos) { const m = new THREE.Mesh(dropGeo, dropMat[kind]); m.position.copy(pos); m.castShadow = true; scene.add(m); drops.push({ kind, m, t: 0, y: pos.y }); }

function hurt(n, from) {
  if (S.over || S.mode !== 'play') return;
  player.hp = Math.max(0, player.hp - n * (MOBILE ? 0.6 : 0.85)); S.hurtK = Math.min(1, S.hurtK + 0.35 + n * 0.02); S.regenT = 4.5; sfx.hurt();
  if (from) {
    const fwdX = -Math.sin(player.yaw), fwdZ = -Math.cos(player.yaw), rx = Math.cos(player.yaw), rz = -Math.sin(player.yaw), dx = from.x - player.pos.x, dz = from.z - player.pos.z;
    $('dmg').style.transform = `rotate(${Math.atan2(dx * rx + dz * rz, dx * fwdX + dz * fwdZ)}rad)`; dmgT = 0.9;
  }
  if (player.hp <= 0) gameOver(false);
}
const ctx = { player, world, fx, sfx, hurt, t: 0, nav: null, list: null };
function onKill(e, head) {
  S.kills++; S.killed++; if (head) S.heads++;
  const sc = e.cfg.score + (head ? 50 : 0); S.score += sc;
  feed(`${head ? '爆头 ' : ''}${e.type === 'drone' ? '无人机' : e.type === 'heavy' ? '重装机甲' : '机械步兵'}  +${sc}`, head);
  hitMarker(true);
  const r = Math.random(), p = e.pos.clone(); p.y = (enemies.nav.groundAt(p.x, p.z) ?? p.y) + 0.35;
  if (e.type === 'heavy') { drop('ammo', p); drop('med', p.clone().add(new THREE.Vector3(0.7, 0, 0.3))); }
  else if (r < 0.34) drop('ammo', p); else if (r < 0.48) drop('med', p);
}
const wcb = {
  enemyHit(e, dmg, head, pos, dir) {
    fx.sparks(pos, head ? 16 : 9); fx.burst(pos, 3, 1.2, '#2a2826', { life: 0.5, size: 0.25, grav: -0.6, drag: 2, grow: 1.5 });
    if (e.damage(dmg, ctx, dir)) onKill(e, head); else hitMarker(false);
  },
};
const fxCb = {
  groundY: 0,
  boltHit(s) {
    const p = player.pos;
    if (s.pos.x > p.x - 0.36 && s.pos.x < p.x + 0.36 && s.pos.z > p.z - 0.36 && s.pos.z < p.z + 0.36 && s.pos.y > p.y && s.pos.y < p.y + 1.75) {
      if (player.dashT > 0) return false; // 冲刺无敌帧
      _v.copy(s.pos).addScaledVector(s.vel, -0.5); hurt(s.dmg, _v); return true;
    }
    return false;
  },
  boom(near) { sfx.boom(near); },
};
const _v = new THREE.Vector3(), _w = new THREE.Vector3();

// ---------- 波次 ----------
function startWave(n) {
  S.wave = n; const w = WAVES[n - 1]; S.queue = [];
  for (const k of ['trooper', 'drone', 'heavy']) for (let i = 0; i < (w[k] || 0); i++) S.queue.push(k);
  for (let i = S.queue.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [S.queue[i], S.queue[j]] = [S.queue[j], S.queue[i]]; }
  S.total = S.queue.length; S.killed = 0; S.phase = 'fight'; S.spawnT = 0.5;
  toast(`第 ${n} 波`, n === WAVES.length ? '最后一波 · 全部出动' : '敌袭 · 守住茶楼'); sfx.wave();
  $('waveN').textContent = `第 ${n} / ${WAVES.length} 波`;
}
function spawnOne() {
  const type = S.queue.pop(); let pos;
  if (type === 'drone') pos = world.airSpawns[Math.floor(Math.random() * world.airSpawns.length)].clone().add(new THREE.Vector3((Math.random() - 0.5) * 10, 0, (Math.random() - 0.5) * 10));
  else {
    const c = world.spawns.filter((p) => Math.hypot(p.x - player.pos.x, p.z - player.pos.z) > 17), list = c.length ? c : world.spawns;
    const sp = list[Math.floor(Math.random() * list.length)], nav = enemies.nav, i = nav.nearest(sp.x + (Math.random() - 0.5) * 3, sp.z + (Math.random() - 0.5) * 3, undefined, true);
    pos = i >= 0 ? new THREE.Vector3(nav.x0 + (i % nav.nx + 0.5) * nav.cell, nav.ground[i], nav.z0 + (((i / nav.nx) | 0) + 0.5) * nav.cell) : sp.clone();
    fx.ring(pos, '#6ac8ff', 4); fx.burst(pos.clone().setY(pos.y + 1), 20, 3, '#6ac8ff', { life: 0.5, size: 0.12, grav: -3, hdr: 4 });
  }
  enemies.spawn(type, pos);
}
function updateWaves(dt) {
  if (S.over) return;
  if (S.phase === 'idle') { S.phaseT -= dt; if (S.phaseT <= 0) startWave(S.wave + 1); else $('waveS').textContent = `下一波 ${Math.ceil(S.phaseT)} 秒`; return; }
  if (S.phase === 'fight') {
    S.spawnT -= dt;
    if (S.queue.length && S.spawnT <= 0 && enemies.alive < MAX_ALIVE) { spawnOne(); S.spawnT = 1.4 + Math.random() * 1.4; }
    const left = S.queue.length + enemies.alive;
    $('waveS').textContent = `剩余敌人 ${left}`; $('waveBar').style.width = `${(1 - left / S.total) * 100}%`;
    if (left === 0) {
      if (S.wave >= WAVES.length) return gameOver(true);
      S.phase = 'idle'; S.phaseT = 8; weapon.addAmmo(90); player.hp = Math.min(100, player.hp + 40);
      toast(`第 ${S.wave} 波清除`, '弹药已补给'); sfx.pickup(); S.score += 250 * S.wave;
    }
  }
}
function gameOver(win) {
  S.over = true; S.won = win; S.endAt = S.t;
  if (win) { world.party(); fx.fireworks = true; sfx.win(); toast('守住了', '广州塔为西关亮灯', 4); $('objText').textContent = '任务完成'; }
  else { toast('阵亡', '', 3); for (const k in K) K[k] = false; }
}
function showEnd() {
  const acc = weapon.shots ? Math.round((weapon.hitsN / weapon.shots) * 100) : 0, s = Math.floor(S.time);
  $('endTag').textContent = S.won ? 'MISSION COMPLETE' : 'MISSION FAILED'; $('endTitle').textContent = S.won ? '守住了' : '茶楼失守';
  $('res').innerHTML = `得分<b>${S.score}</b><br>击杀<b>${S.kills}</b>　爆头<b>${S.heads}</b><br>命中率<b>${acc}%</b>　用时<b>${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}</b><br>${S.won ? '' : `倒在第 <b>${S.wave}</b> 波`}`;
  $('roamBtn').style.display = S.won ? '' : 'none';
  setMode('end');
}

// ---------- 输入 ----------
const K = {}, pressed = {}; let mdx = 0, mdy = 0, mouseL = false, mouseR = false, dragging = false, padPrev = []; const dbg = { shoot: false, ads: false };
addEventListener('keydown', (e) => {
  if (['Space', 'Tab', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
  if (!K[e.code]) pressed[e.code] = true; K[e.code] = true;
  if (e.code === 'KeyM') sfx.setMuted(!sfx.muted);
  if (e.code === 'KeyH') $('keys').style.opacity = $('keys').style.opacity === '0' ? 0.7 : 0;
  if (e.code === 'KeyG') { quality = (quality + 2) % 3; post.setQuality(quality); resize(); toast(['画质 · 低', '画质 · 中', '画质 · 高'][quality], '', 1.2); }
});
addEventListener('keyup', (e) => { K[e.code] = false; });
addEventListener('blur', () => { for (const k in K) K[k] = false; mouseL = mouseR = false; });
const locked = () => document.pointerLockElement === canvas;
addEventListener('mousemove', (e) => { if (S.mode !== 'play') return; if (locked() || (NOLOCK && dragging)) { mdx += e.movementX; mdy += e.movementY; } });
canvas.addEventListener('mousedown', (e) => {
  if (S.mode !== 'play') return;
  if (!locked() && !NOLOCK) { canvas.requestPointerLock(); return; }
  if (e.button === 0) { mouseL = true; dragging = true; } if (e.button === 2) mouseR = true;
});
addEventListener('mouseup', (e) => { if (e.button === 0) { mouseL = false; dragging = false; } if (e.button === 2) mouseR = false; });
addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('pointerlockchange', () => { if (!locked() && S.mode === 'play' && !NOLOCK) setMode('pause'); });

// ---------- 触控（手机） ----------
const TS = { stick: null, look: new Map(), mv: { x: 0, y: 0 }, btn: {}, edge: {}, adsOn: false };
if (MOBILE) {
  const pad = $('touch'), knob = $('stick'), R = 58;
  pad.addEventListener('touchstart', (e) => {
    e.preventDefault(); if (S.mode !== 'play') return;
    for (const t of e.changedTouches) {
      const el = t.target.closest ? t.target.closest('[data-b]') : null;
      if (el) {
        const b = el.dataset.b; if (b === 'pause') { setMode('pause'); continue; }
        if (b === 'ads') { TS.adsOn = !TS.adsOn; el.classList.toggle('on', TS.adsOn); } else { TS.btn[b] = true; TS.edge[b] = true; el.classList.add('on'); }
        TS.look.set(t.identifier, { x: t.clientX, y: t.clientY, b, el }); // 按着按钮也能拖动瞄准
      } else if (t.clientX < innerWidth * 0.42 && !TS.stick) { TS.stick = { id: t.identifier, x0: t.clientX, y0: t.clientY }; knob.style.display = 'block'; knob.style.left = t.clientX + 'px'; knob.style.top = t.clientY + 'px'; knob.firstElementChild.style.transform = ''; }
      else TS.look.set(t.identifier, { x: t.clientX, y: t.clientY });
    }
  }, { passive: false });
  pad.addEventListener('touchmove', (e) => {
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (TS.stick && t.identifier === TS.stick.id) { let dx = (t.clientX - TS.stick.x0) / R, dy = (t.clientY - TS.stick.y0) / R; const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; } TS.mv.x = dx; TS.mv.y = dy; knob.firstElementChild.style.transform = `translate(${dx * R}px,${dy * R}px)`; }
      else { const l = TS.look.get(t.identifier); if (l) { mdx += (t.clientX - l.x) * 2.6; mdy += (t.clientY - l.y) * 2.6; l.x = t.clientX; l.y = t.clientY; } }
    }
  }, { passive: false });
  const end = (e) => { e.preventDefault(); for (const t of e.changedTouches) { if (TS.stick && t.identifier === TS.stick.id) { TS.stick = null; TS.mv.x = TS.mv.y = 0; knob.style.display = 'none'; } else { const l = TS.look.get(t.identifier); if (l) { if (l.b && l.b !== 'ads') { TS.btn[l.b] = false; l.el.classList.remove('on'); } TS.look.delete(t.identifier); } } } };
  pad.addEventListener('touchend', end, { passive: false }); pad.addEventListener('touchcancel', end, { passive: false });
}

function setMode(m) {
  S.mode = m;
  $('loading').style.display = 'none';
  $('title').style.display = m === 'title' ? 'flex' : 'none';
  $('pause').style.display = m === 'pause' ? 'flex' : 'none';
  $('end').style.display = m === 'end' ? 'flex' : 'none';
  $('hud').style.display = m === 'title' ? 'none' : 'block';
  weapon.holder.visible = m !== 'title';
  $('touch').style.display = MOBILE && m === 'play' ? 'block' : 'none';
  if (m === 'play' && !NOLOCK && !locked()) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* 忽略 */ } }
  if (m !== 'play' && locked()) document.exitPointerLock();
}
function start() {
  if (MOBILE) { try { const p = document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); if (p && p.then) p.then(() => screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {})).catch(() => {}); } catch (e) { /* 忽略 */ } }
  sfx.init(); sfx.music(); setMode('play'); if (S.wave === 0 && S.phase === 'idle' && S.phaseT === 0) { S.phaseT = 4; toast('守住茶楼', '机械巡逻队正在逼近', 3); setTimeout(() => { $('keys').style.opacity = 0; }, 16000); } }
$('startBtn').onclick = start; $('resumeBtn').onclick = () => setMode('play'); $('roamBtn').onclick = () => { S.endShown = true; setMode('play'); }; $('againBtn').onclick = () => location.reload();

function readInput(dt) {
  let sens = 0.0022 * (1 - weapon.ads * 0.45);
  if (MOBILE) { // 触控瞄准吸附：准星贴近敌人时放慢视角
    camera.getWorldDirection(_v); let near = false; for (const e of enemies.list) { if (e.dead) continue; _w.copy(e.center).sub(camera.position); const d = _w.length(); if (d < 60 && _w.dot(_v) / d > 0.9975) { near = true; break; } } if (near) sens *= 0.5;
  }
  const inp = {
    fwd: (K.KeyW || K.ArrowUp ? 1 : 0) - (K.KeyS || K.ArrowDown ? 1 : 0), right: (K.KeyD ? 1 : 0) - (K.KeyA ? 1 : 0),
    jump: !!pressed.Space, jumpHeld: !!K.Space, dash: !!(pressed.ShiftLeft || pressed.ShiftRight), sprint: !!(K.ShiftLeft || K.ShiftRight),
    pound: !!pressed.KeyC, lookX: mdx * sens, lookY: mdy * sens, shoot: mouseL || dbg.shoot, ads: mouseR || dbg.ads, reload: !!pressed.KeyR, interact: !!pressed.KeyE,
  };
  const gp = navigator.getGamepads ? [...navigator.getGamepads()].find((g) => g && g.connected) : null;
  if (gp) {
    const dz = (v) => (Math.abs(v) < 0.16 ? 0 : v), b = (i) => !!(gp.buttons[i] && gp.buttons[i].pressed), edge = (i) => b(i) && !padPrev[i];
    inp.right += dz(gp.axes[0]); inp.fwd -= dz(gp.axes[1]);
    const ls = (1 - weapon.ads * 0.5); inp.lookX += dz(gp.axes[2]) * 2.8 * dt * ls; inp.lookY += dz(gp.axes[3]) * 2.2 * dt * ls;
    inp.jump = inp.jump || edge(0); inp.jumpHeld = inp.jumpHeld || b(0); inp.dash = inp.dash || edge(4); inp.sprint = inp.sprint || b(4) || b(10);
    inp.pound = inp.pound || edge(1); inp.shoot = inp.shoot || b(7); inp.ads = inp.ads || b(6); inp.reload = inp.reload || edge(2); inp.interact = inp.interact || edge(3);
    padPrev = gp.buttons.map((x) => x.pressed);
  }
  if (MOBILE) {
    inp.right += TS.mv.x; inp.fwd -= TS.mv.y; inp.sprint = inp.sprint || (TS.mv.y < -0.92);
    inp.shoot = inp.shoot || !!TS.btn.fire; inp.ads = inp.ads || TS.adsOn; inp.jump = inp.jump || !!TS.edge.jump; inp.jumpHeld = inp.jumpHeld || !!TS.btn.jump;
    inp.dash = inp.dash || !!TS.edge.dash; inp.reload = inp.reload || !!TS.edge.reload; inp.pound = inp.pound || !!TS.edge.pound; TS.edge = {};
  }
  mdx = mdy = 0; for (const k in pressed) delete pressed[k];
  if (S.over && !S.won) { inp.fwd = inp.right = 0; inp.shoot = inp.ads = inp.jump = inp.dash = inp.pound = false; }
  return inp;
}

// ---------- 每帧 ----------
let lastAmmo = -1, lastRes = -1, lastHp = -1, lastScore = -1;
function gameplay(dt, inp) {
  if (!S.over) S.time += dt;
  ctx.t = S.t;
  for (const m of world.movers) { m.update(dt, S.t); if (player.ground === m.col) player.pos.add(m.delta); }
  player.adsK = weapon.ads;
  player.update(dt, inp);
  weapon.update(dt, inp, player, enemies, wcb);
  enemies.update(dt, ctx);
  updateWaves(dt);
  fxCb.groundY = player.onGround ? player.pos.y : 0;
  // 回血
  S.regenT -= dt; if (S.regenT <= 0 && player.hp > 0 && player.hp < 100) player.hp = Math.min(100, player.hp + 14 * dt);
  S.hurtK *= Math.exp(-dt * 2.2);
  // 掉落物
  for (let i = drops.length - 1; i >= 0; i--) {
    const d = drops[i]; d.t += dt; d.m.rotation.y += dt * 1.6; d.m.position.y = d.y + Math.sin(d.t * 3) * 0.08;
    if (d.m.position.distanceTo(player.center) < 1.7) {
      if (d.kind === 'ammo') { weapon.addAmmo(30); feed('弹药 +30'); } else { player.hp = Math.min(100, player.hp + 35); feed('生命 +35'); }
      sfx.ammo(); scene.remove(d.m); drops.splice(i, 1);
    } else if (d.t > 30) { scene.remove(d.m); drops.splice(i, 1); }
  }
  let prompt = '';
  if (weapon.reloading) prompt = '换弹中';
  else if (weapon.ammo === 0 && weapon.reserve === 0) prompt = '弹药耗尽 · 用 <kbd>C</kbd> 下砸或找补给';
  const pe = $('prompt'); if (prompt) { if (pe.innerHTML !== prompt) pe.innerHTML = prompt; pe.style.display = 'block'; } else pe.style.display = 'none';
  // HUD
  if (weapon.ammo !== lastAmmo) { lastAmmo = weapon.ammo; $('ammoN').textContent = weapon.ammo; $('ammoN').className = 'n' + (weapon.ammo <= 8 ? ' low' : ''); }
  if (weapon.reserve !== lastRes) { lastRes = weapon.reserve; $('ammoR').textContent = '/ ' + weapon.reserve; }
  const hp = Math.ceil(player.hp); if (hp !== lastHp) { lastHp = hp; $('hpN').textContent = hp; $('hpBar').style.width = hp + '%'; $('hpBar').style.background = hp < 35 ? '#ff5a3c' : ''; }
  if (S.score !== lastScore) { lastScore = S.score; $('scoreN').textContent = S.score; }
  const cr = $('cross'); cr.style.opacity = Math.max(0, 1 - weapon.ads * 2.2) * (weapon.reloading ? 0.4 : 1); cr.style.setProperty('--g', `${4 + (weapon.spread || 0) * 520}px`);
  if (hitT > 0) { hitT -= dt; $('hit').style.opacity = Math.min(1, hitT * 9); } else $('hit').style.opacity = 0;
  if (dmgT > 0) { dmgT -= dt; $('dmg').style.opacity = Math.min(1, dmgT * 1.6); } else $('dmg').style.opacity = 0;
  post.grade.uniforms.hurt.value = S.hurtK + (S.over && !S.won ? 0.8 : 0); post.grade.uniforms.lowHp.value = THREE.MathUtils.clamp(1 - player.hp / 45, 0, 1);
  if (S.over && !S.endShown && S.t - S.endAt > (S.won ? 6 : 2.2)) { S.endShown = true; showEnd(); }
}

function tick(dt) {
  S.t += dt;
  if (S.mode === 'play') gameplay(dt, readInput(dt));
  else {
    for (const k in pressed) delete pressed[k]; mdx = mdy = 0;
    if (S.mode === 'title') {
      const a = S.t * 0.045;
      camera.position.set(-21 + Math.sin(a) * 7, 6.5 + Math.sin(S.t * 0.2) * 0.6, 12 + Math.cos(a) * 3.5);
      camera.lookAt(6, 4.5, -4 + Math.sin(a) * 6); camera.fov = 58; camera.updateProjectionMatrix();
      for (const m of world.movers) m.update(dt, S.t);
    }
  }
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) $('toast').classList.remove('on'); }
  world.update(dt, S.t, camera.position);
  fx.update(dt, S.t, fxCb);
  if (S.noRender) return;
  if (overlayCam.fov !== camera.fov) { overlayCam.fov = camera.fov; overlayCam.updateProjectionMatrix(); }
  world.refl.reflOn.value = quality >= 2 ? 1 : 0; if (quality >= 2) refl.render();
  post.setMotion((player.yaw - lastYaw) / Math.max(dt, 1e-3), (player.pitch - lastPitch) / Math.max(dt, 1e-3), camera, S.mode === 'play'); lastYaw = player.yaw; lastPitch = player.pitch;
  post.update(S.t, SUN_DIR);
  post.render();
}
let lastYaw = 0, lastPitch = 0;
const clock = new THREE.Clock();
function frame() { tick(Math.min(clock.getDelta(), 0.05)); requestAnimationFrame(frame); }
setMode('title');
requestAnimationFrame(frame);

// 调试接口（自测用）
window.__g = {
  K, pressed, dbg, TS, MOBILE, refl, S, player, world, fx, camera, weapon, enemies, post, start, setMode, gameOver, startWave, tick,
  step(n = 1, dt = 1 / 60) { for (let i = 0; i < n; i++) tick(dt); },
  sim(n = 1, dt = 1 / 60) { S.noRender = true; for (let i = 0; i < n; i++) tick(dt); S.noRender = false; },
  async shot(name) { tick(1 / 60); const c = document.createElement('canvas'); c.width = 1280; c.height = 720; c.getContext('2d').drawImage(canvas, 0, 0, 1280, 720); await fetch('/__shot?name=' + name, { method: 'POST', body: c.toDataURL('image/jpeg', 0.88) }); return name; },
  tp(x, y, z, yaw = player.yaw, pitch = 0) { player.zip = null; player.pos.set(x, y, z); player.vel.set(0, 0, 0); player.yaw = yaw; player.pitch = pitch; },
  spawn(type, x, y, z) { return enemies.spawn(type, new THREE.Vector3(x, y, z)); },
};
