// 敌人：机械步兵 / 无人机 / 重装机甲；网格流场寻路 + 视线判断
import * as THREE from 'three';
import { rayBox } from './fx.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const clamp = THREE.MathUtils.clamp;

// ---------- 寻路网格 ----------
export class Nav {
  constructor(world) {
    this.cell = 0.5; this.x0 = -40; this.z0 = -34; this.nx = 160; this.nz = 136;
    const n = this.nx * this.nz; this.ground = new Float32Array(n); this.walk = new Uint8Array(n); this.dist = new Float32Array(n).fill(1e9); this.queue = new Int32Array(n);
    const cols = world.colliders.filter((c) => !c.moving), R = 0.38;
    for (let iz = 0; iz < this.nz; iz++) for (let ix = 0; ix < this.nx; ix++) {
      const x = this.x0 + (ix + 0.5) * this.cell, z = this.z0 + (iz + 0.5) * this.cell, i = iz * this.nx + ix;
      let gy = -99;
      for (const c of cols) if (x > c.min.x && x < c.max.x && z > c.min.z && z < c.max.z && c.max.y <= 2.0 && c.max.y > gy) gy = c.max.y;
      if (gy < -0.3) { this.walk[i] = 0; this.ground[i] = -99; continue; }
      let ok = 1;
      for (const c of cols) if (x > c.min.x - R && x < c.max.x + R && z > c.min.z - R && z < c.max.z + R && c.min.y < gy + 1.7 && c.max.y > gy + 0.45) { ok = 0; break; }
      this.walk[i] = ok; this.ground[i] = gy;
    }
    this.target = -1;
  }
  idx(x, z) { const ix = Math.floor((x - this.x0) / this.cell), iz = Math.floor((z - this.z0) / this.cell); if (ix < 0 || iz < 0 || ix >= this.nx || iz >= this.nz) return -1; return iz * this.nx + ix; }
  walkable(x, z) { const i = this.idx(x, z); return i >= 0 && this.walk[i] === 1; }
  groundAt(x, z) { const i = this.idx(x, z); return i >= 0 && this.walk[i] ? this.ground[i] : null; }
  nearest(x, z, y, reach = false) {
    let best = -1, bd = 1e9; const ix0 = Math.floor((x - this.x0) / this.cell), iz0 = Math.floor((z - this.z0) / this.cell);
    for (let r = 0; r <= (reach ? 40 : 14) && best < 0; r++) for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
      if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
      const ix = ix0 + dx, iz = iz0 + dz; if (ix < 0 || iz < 0 || ix >= this.nx || iz >= this.nz) continue;
      const i = iz * this.nx + ix; if (!this.walk[i] || (reach && this.dist[i] > 1e8)) continue;
      const d = dx * dx + dz * dz + (y !== undefined ? Math.abs(this.ground[i] - y) * 4 : 0); if (d < bd) { bd = d; best = i; }
    }
    return best;
  }
  // 以玩家为源的距离场
  flow(px, pz, py) {
    const src = this.nearest(px, pz, py); if (src < 0) return; this.target = src;
    const { dist, queue, nx, nz, walk, ground } = this; dist.fill(1e9);
    let h = 0, t = 0; queue[t++] = src; dist[src] = 0;
    while (h < t) {
      const i = queue[h++], d = dist[i] + 1, ix = i % nx, iz = (i / nx) | 0, g = ground[i];
      if (ix > 0) { const j = i - 1; if (walk[j] && dist[j] > d && Math.abs(ground[j] - g) <= 0.5) { dist[j] = d; queue[t++] = j; } }
      if (ix < nx - 1) { const j = i + 1; if (walk[j] && dist[j] > d && Math.abs(ground[j] - g) <= 0.5) { dist[j] = d; queue[t++] = j; } }
      if (iz > 0) { const j = i - nx; if (walk[j] && dist[j] > d && Math.abs(ground[j] - g) <= 0.5) { dist[j] = d; queue[t++] = j; } }
      if (iz < nz - 1) { const j = i + nx; if (walk[j] && dist[j] > d && Math.abs(ground[j] - g) <= 0.5) { dist[j] = d; queue[t++] = j; } }
    }
  }
  // 朝距离更小的邻格走的方向
  dir(x, z, out) {
    const i = this.idx(x, z); out.set(0, 0, 0); if (i < 0) return false;
    const { dist, nx, nz, walk, ground, cell } = this, ix = i % nx, iz = (i / nx) | 0, g = walk[i] ? ground[i] : null;
    let best = walk[i] ? dist[i] : 1e9, bx = 0, bz = 0;
    for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dz) continue; const jx = ix + dx, jz = iz + dz; if (jx < 0 || jz < 0 || jx >= nx || jz >= nz) continue;
      const j = jz * nx + jx; if (!walk[j]) continue;
      if (g !== null && Math.abs(ground[j] - g) > 0.5) continue;
      if (dx && dz && (!walk[iz * nx + jx] || !walk[jz * nx + ix])) continue;
      const d = dist[j] + (dx && dz ? 0.41 : 0); if (d < best) { best = d; bx = dx; bz = dz; }
    }
    if (!bx && !bz) return false;
    // 指向目标格中心，免得贴墙蹭
    const tx = this.x0 + (ix + bx + 0.5) * cell - x, tz = this.z0 + (iz + bz + 0.5) * cell - z, l = Math.hypot(tx, tz) || 1;
    out.set(tx / l, 0, tz / l); return true;
  }
}

export function lineOfSight(world, a, b) {
  const d = b.clone().sub(a), len = d.length(); d.multiplyScalar(1 / len); const cols = world.colliders;
  for (let i = 0; i < cols.length; i++) { const c = cols[i]; if (c.off) continue; const t = rayBox(a, d, c, len); if (t >= 0 && t < len - 0.05) return false; }
  return true;
}

// ---------- 模型 ----------
const S = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.75, ...o });
const MAT = {
  armor: S('#4a5058'), armorHeavy: S('#5a5348'), joint: S('#15171a', { roughness: 0.7, metalness: 0.4 }), gun: S('#1c1d1f', { roughness: 0.4 }),
  stripe: S('#c8451f', { roughness: 0.6, metalness: 0.2 }), hazard: S('#d9a21f', { roughness: 0.6, metalness: 0.2 }),
  eye: new THREE.MeshBasicMaterial({ color: new THREE.Color(8, 0.7, 0.3), toneMapped: false }),
  eyeBlue: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 3.5, 8), toneMapped: false }),
  rotor: new THREE.MeshBasicMaterial({ color: '#20242a', transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide }),
};
const GEO = { box: new RoundedBoxGeometry(1, 1, 1, 3, 0.16), sph: new THREE.IcosahedronGeometry(1, 2), cyl: new THREE.CylinderGeometry(1, 1, 1, 14), disc: new THREE.CircleGeometry(1, 20), torus: new THREE.TorusGeometry(1, 0.07, 6, 22) };
function part(parent, geo, mat, x, y, z, sx, sy, sz, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.rotation.set(rx, ry, rz); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
}
function buildTrooper(heavy) {
  const root = new THREE.Group(), A = heavy ? MAT.armorHeavy : MAT.armor, acc = heavy ? MAT.hazard : MAT.stripe, b = GEO.box;
  const body = new THREE.Group(); body.position.y = 0.95; root.add(body);
  part(body, b, MAT.joint, 0, 0, 0, 0.34, 0.16, 0.22);
  const torso = new THREE.Group(); torso.position.y = 0.1; body.add(torso);
  part(torso, b, MAT.joint, 0, 0.08, 0, 0.26, 0.2, 0.18);
  part(torso, b, A, 0, 0.36, 0, 0.5, 0.4, 0.3); part(torso, b, A, 0, 0.4, 0.13, 0.4, 0.26, 0.1, -0.15);
  part(torso, b, acc, 0, 0.47, 0.19, 0.26, 0.05, 0.02, -0.15); part(torso, b, acc, 0.17, 0.33, 0.185, 0.05, 0.12, 0.02, -0.15);
  part(torso, b, MAT.joint, 0, 0.36, -0.2, 0.34, 0.36, 0.14); part(torso, GEO.cyl, MAT.gun, 0.1, 0.62, -0.22, 0.012, 0.3, 0.012);
  for (const sx of [-1, 1]) { part(torso, GEO.sph, A, sx * 0.31, 0.5, 0, 0.12, 0.11, 0.13); part(torso, b, acc, sx * 0.34, 0.56, 0, 0.1, 0.02, 0.14); }
  const head = new THREE.Group(); head.position.y = 0.68; torso.add(head);
  part(head, b, A, 0, 0, 0, 0.22, 0.2, 0.25); part(head, b, MAT.joint, 0, -0.08, 0.04, 0.16, 0.08, 0.2); part(head, b, A, 0, 0.1, -0.02, 0.18, 0.04, 0.2);
  const eye = part(head, b, MAT.eye, 0, 0.02, 0.127, 0.17, 0.035, 0.01); eye.castShadow = false;
  // 双臂 + 枪
  const arms = new THREE.Group(); arms.position.set(0, 0.5, 0); torso.add(arms);
  part(arms, b, MAT.gun, 0.14, -0.14, 0.42, 0.07, 0.1, 0.62); part(arms, GEO.cyl, MAT.gun, 0.14, -0.12, 0.83, 0.02, 0.24, 0.02, Math.PI / 2); part(arms, b, MAT.gun, 0.14, -0.24, 0.36, 0.05, 0.14, 0.08);
  if (heavy) { for (const [ox, oy] of [[0.03, 0.03], [-0.03, 0.03], [0, -0.03]]) part(arms, GEO.cyl, MAT.gun, 0.14 + ox, -0.12 + oy, 0.9, 0.016, 0.36, 0.016, Math.PI / 2); part(arms, b, MAT.hazard, 0.14, -0.06, 0.3, 0.09, 0.03, 0.2); }
  part(arms, b, A, 0.33, -0.12, 0.08, 0.11, 0.11, 0.32, 0.5); part(arms, b, MAT.joint, 0.26, -0.2, 0.26, 0.09, 0.09, 0.26, 0, -0.5);
  part(arms, b, A, -0.33, -0.1, 0.1, 0.11, 0.11, 0.34, 0.35); part(arms, b, MAT.joint, -0.2, -0.16, 0.36, 0.09, 0.09, 0.42, 0, 0.75);
  // 腿
  const legs = [];
  for (const sx of [-1, 1]) {
    const hip = new THREE.Group(); hip.position.set(sx * 0.12, 0.95, 0); root.add(hip);
    part(hip, b, A, 0, -0.22, 0, 0.16, 0.44, 0.18); part(hip, b, acc, sx * 0.085, -0.2, 0, 0.012, 0.2, 0.1);
    const knee = new THREE.Group(); knee.position.y = -0.44; hip.add(knee);
    part(knee, GEO.sph, MAT.joint, 0, 0, 0, 0.08, 0.08, 0.09); part(knee, b, A, 0, -0.24, 0.01, 0.13, 0.44, 0.15); part(knee, b, MAT.joint, 0, -0.47, 0.06, 0.15, 0.08, 0.3);
    legs.push({ hip, knee });
  }
  return { root, torso, head, arms, legs, eye };
}
function buildDrone() {
  const root = new THREE.Group(), b = GEO.box, rotors = [];
  part(root, b, MAT.armor, 0, 0, 0, 0.42, 0.14, 0.62); part(root, GEO.sph, MAT.joint, 0, 0.06, -0.05, 0.2, 0.1, 0.26); part(root, b, MAT.stripe, 0, 0.075, 0.2, 0.3, 0.01, 0.12);
  const eye = part(root, GEO.sph, MAT.eye, 0, -0.02, 0.32, 0.06, 0.06, 0.03); eye.castShadow = false;
  part(root, GEO.cyl, MAT.gun, 0, -0.12, 0.2, 0.03, 0.4, 0.03, Math.PI / 2); part(root, b, MAT.gun, 0, -0.1, 0.02, 0.08, 0.08, 0.2);
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    part(root, b, MAT.joint, sx * 0.3, 0.02, sz * 0.3, 0.5, 0.035, 0.05, 0, sx * sz * 0.785);
    part(root, GEO.cyl, MAT.joint, sx * 0.47, 0.05, sz * 0.47, 0.035, 0.08, 0.035);
    part(root, GEO.torus, MAT.armor, sx * 0.47, 0.09, sz * 0.47, 0.25, 0.25, 0.25, Math.PI / 2);
    const r = part(root, GEO.disc, MAT.rotor, sx * 0.47, 0.1, sz * 0.47, 0.24, 0.24, 0.24, -Math.PI / 2); r.castShadow = false; r.userData.noAO = true; rotors.push(r);
  }
  for (const sx of [-1, 1]) part(root, b, MAT.joint, sx * 0.16, -0.15, 0, 0.02, 0.12, 0.4);
  return { root, rotors, eye };
}

const TYPES = {
  trooper: { hp: 80, speed: 3.5, scale: 1, range: 17, burst: 3, gap: 2.1, dmg: 5, score: 100 },
  heavy: { hp: 420, speed: 2.1, scale: 1.5, range: 15, burst: 6, gap: 2.6, dmg: 5, score: 400 },
  drone: { hp: 38, speed: 7.5, scale: 1, range: 20, burst: 1, gap: 1.4, dmg: 5, score: 80 },
};
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _d = new THREE.Vector3(), _m = new THREE.Vector3();

class Enemy {
  constructor(type, pos, scene) {
    this.type = type; this.cfg = TYPES[type]; this.hp = this.cfg.hp; this.pos = pos.clone(); this.yaw = 0; this.dead = false; this.remove = false;
    this.vel = V3(0, 0, 0); this.walkPh = Math.random() * 6; this.fireT = 1 + Math.random() * 1.5; this.burstLeft = 0; this.burstT = 0; this.losT = Math.random() * 0.3; this.los = false;
    this.strafe = Math.random() < 0.5 ? 1 : -1; this.strafeT = 2 + Math.random() * 2; this.deadT = 0; this.hitK = 0; this.spawnT = 0.6; this.aimPitch = 0;
    this.orbit = Math.random() * 6.28; this.height = 4 + Math.random() * 3; this.ph = Math.random() * 6;
    this.m = type === 'drone' ? buildDrone() : buildTrooper(type === 'heavy');
    this.m.root.rotation.order = 'YXZ'; this.m.root.scale.setScalar(this.cfg.scale * 0.01); this.m.root.position.copy(this.pos); scene.add(this.m.root); this.scene = scene;
  }
  get center() { return _m.set(this.pos.x, this.pos.y + (this.type === 'drone' ? 0 : 1.1 * this.cfg.scale), this.pos.z); }
  hitTest(o, d, maxT) {
    const s = this.cfg.scale; let best = null;
    const sphere = (cx, cy, cz, r, head) => { _a.set(cx - o.x, cy - o.y, cz - o.z); const tc = _a.dot(d); if (tc < 0) return; const d2 = _a.lengthSq() - tc * tc; if (d2 > r * r) return; const t = tc - Math.sqrt(r * r - d2); if (t > 0 && t < maxT && (!best || t < best.t)) best = { t, head }; };
    const p = this.pos;
    if (this.type === 'drone') sphere(p.x, p.y, p.z, 0.6, false);
    else { sphere(p.x, p.y + 1.78 * s, p.z, 0.2 * s, true); sphere(p.x, p.y + 1.28 * s, p.z, 0.4 * s, false); sphere(p.x, p.y + 0.82 * s, p.z, 0.33 * s, false); sphere(p.x, p.y + 0.36 * s, p.z, 0.28 * s, false); }
    return best;
  }
  damage(n, ctx, dir) {
    if (this.dead) return false;
    this.hp -= n; this.hitK = 1; this.fireT = Math.max(this.fireT, 0.25);
    if (dir && this.type !== 'heavy') { this.vel.x += dir.x * 1.5; this.vel.z += dir.z * 1.5; }
    if (this.hp <= 0) { this.die(ctx); return true; }
    return false;
  }
  die(ctx) {
    this.dead = true; this.deadT = 0; this.m.eye.visible = false;
    ctx.fx.explode(this.center.clone(), this.type === 'heavy' ? 1.7 : this.type === 'drone' ? 0.8 : 1);
    ctx.sfx.explode(this.type === 'heavy');
  }
  fire(ctx) {
    const s = this.cfg.scale, pl = ctx.player, fwdX = Math.sin(this.yaw), fwdZ = Math.cos(this.yaw);
    if (this.type === 'drone') _a.set(this.pos.x + fwdX * 0.4, this.pos.y - 0.12, this.pos.z + fwdZ * 0.4);
    else _a.set(this.pos.x + fwdX * 0.9 * s + fwdZ * 0.14 * s, this.pos.y + 1.42 * s, this.pos.z + fwdZ * 0.9 * s - fwdX * 0.14 * s);
    const speed = 42, dist = _a.distanceTo(pl.center), lead = (dist / speed) * 0.55;
    _b.set(pl.pos.x + pl.vel.x * lead, pl.pos.y + 1.0, pl.pos.z + pl.vel.z * lead).sub(_a).normalize();
    const err = this.type === 'heavy' ? 0.075 : 0.055; _b.x += (Math.random() - 0.5) * err; _b.y += (Math.random() - 0.5) * err; _b.z += (Math.random() - 0.5) * err; _b.normalize();
    ctx.fx.bolt(_a, _b, speed, this.cfg.dmg); ctx.fx.burst(_a, 3, 1.5, '#ff7040', { life: 0.12, size: 0.14, hdr: 5 });
    ctx.sfx.eshot(Math.min(1, 14 / Math.max(6, dist)));
  }
  update(dt, ctx) {
    const { player, nav, world } = ctx, cfg = this.cfg, s = cfg.scale, m = this.m;
    if (this.spawnT > 0) { this.spawnT -= dt; const k = 1 - Math.max(0, this.spawnT) / 0.6; m.root.scale.setScalar(s * (0.2 + 0.8 * k)); }
    this.hitK *= Math.exp(-dt * 10);
    if (this.dead) return this.updateDead(dt, ctx);
    const toX = player.pos.x - this.pos.x, toZ = player.pos.z - this.pos.z, dist = Math.hypot(toX, toZ) || 0.001;
    this.losT -= dt;
    if (this.losT <= 0) { this.losT = 0.22 + Math.random() * 0.1; _a.copy(this.center); if (this.type !== 'drone') _a.y += 0.5 * s; this.los = dist < 60 && lineOfSight(world, _a.clone(), player.center.clone()); }
    if (this.type === 'drone') this.moveDrone(dt, ctx, toX, toZ, dist); else this.moveGround(dt, ctx, toX, toZ, dist);
    // 朝向
    const wantYaw = this.los || this.type === 'drone' ? Math.atan2(toX, toZ) : (Math.hypot(this.vel.x, this.vel.z) > 0.3 ? Math.atan2(this.vel.x, this.vel.z) : this.yaw);
    let dy = wantYaw - this.yaw; while (dy > Math.PI) dy -= 6.2832; while (dy < -Math.PI) dy += 6.2832; this.yaw += dy * Math.min(1, dt * (this.type === 'heavy' ? 3 : 6));
    // 开火
    if (this.spawnT <= 0) {
      if (this.burstLeft > 0) { this.burstT -= dt; if (this.burstT <= 0) { this.burstT = this.type === 'heavy' ? 0.09 : 0.13; this.burstLeft--; if (this.los) this.fire(ctx); } }
      else { this.fireT -= dt; if (this.fireT <= 0 && this.los && dist < cfg.range + 6 && Math.abs(dy) < 0.5) { this.burstLeft = cfg.burst; this.burstT = 0; this.fireT = cfg.gap * (0.8 + Math.random() * 0.5); } }
      // 重装近身践踏
      if (this.type === 'heavy' && dist < 3.2 && Math.abs(player.pos.y - this.pos.y) < 2 && this.fireT > 0.2) { this.stompT = (this.stompT || 0) - dt; if (this.stompT <= 0) { this.stompT = 1.4; ctx.hurt(22, this.pos); ctx.fx.ring(this.pos, '#ff6a3a', 7); ctx.sfx.pound(); } }
    }
    // 姿态
    m.root.position.copy(this.pos); m.root.rotation.y = this.yaw;
    if (this.type === 'drone') {
      for (const r of m.rotors) r.rotation.z += dt * 60;
      m.root.rotation.z = clamp(-this.vel.x * Math.cos(this.yaw) * 0.04 + this.vel.z * Math.sin(this.yaw) * 0.04, -0.4, 0.4) + this.hitK * 0.3;
      m.root.rotation.x = clamp((this.vel.x * Math.sin(this.yaw) + this.vel.z * Math.cos(this.yaw)) * 0.04, -0.35, 0.35);
    } else {
      const sp = Math.hypot(this.vel.x, this.vel.z); this.walkPh += sp * dt * (3.3 / s);
      const sw = Math.min(1, sp / 2) * 0.62;
      m.legs.forEach((l, i) => { const ph = this.walkPh + i * Math.PI; l.hip.rotation.x = -Math.sin(ph) * sw; l.knee.rotation.x = Math.max(0, Math.cos(ph)) * sw * 1.5; });
      m.torso.position.y = 0.1 + Math.abs(Math.sin(this.walkPh)) * 0.03 * Math.min(1, sp);
      const dyy = (player.pos.y + 1.0) - (this.pos.y + 1.45 * s); this.aimPitch += ((this.los ? Math.atan2(dyy, dist) : 0) - this.aimPitch) * Math.min(1, dt * 6);
      m.arms.rotation.x = -clamp(this.aimPitch, -0.9, 0.9); m.torso.rotation.x = this.hitK * -0.18; m.head.rotation.x = -clamp(this.aimPitch, -0.5, 0.5) * 0.6;
    }
  }
  moveGround(dt, ctx, toX, toZ, dist) {
    const { nav } = ctx, cfg = this.cfg; let dx = 0, dz = 0;
    { // 脱困：所在格到不了玩家（被摆件围住/站到了架子上）就挪到最近的可达格
      const ci = nav.idx(this.pos.x, this.pos.z);
      if (ci < 0 || !nav.walk[ci] || nav.dist[ci] > 1e8) { this.stuckT = (this.stuckT || 0) + dt; if (this.stuckT > 1.5) { const j = nav.nearest(this.pos.x, this.pos.z, undefined, true); if (j >= 0) { this.pos.set(nav.x0 + (j % nav.nx + 0.5) * nav.cell, nav.ground[j], nav.z0 + (((j / nav.nx) | 0) + 0.5) * nav.cell); this.stuckT = 0; } } } else this.stuckT = 0;
    }
    this.strafeT -= dt; if (this.strafeT <= 0) { this.strafeT = 1.5 + Math.random() * 2.5; this.strafe = -this.strafe; }
    const hold = this.los && dist < cfg.range && dist > 4;
    if (hold) {
      if (dist < cfg.range * 0.55) { dx = -toZ / dist * this.strafe * 0.7 - toX / dist * 0.25; dz = toX / dist * this.strafe * 0.7 - toZ / dist * 0.25; }
      else if (dist > cfg.range * 0.8) { dx = toX / dist * 0.5 - toZ / dist * this.strafe * 0.5; dz = toZ / dist * 0.5 + toX / dist * this.strafe * 0.5; }
      else { dx = -toZ / dist * this.strafe * 0.6; dz = toX / dist * this.strafe * 0.6; }
    } else if (nav.dir(this.pos.x, this.pos.z, _d)) { dx = _d.x; dz = _d.z; }
    // 互相避让
    for (const o of ctx.list) { if (o === this || o.dead || o.type === 'drone') continue; const ex = this.pos.x - o.pos.x, ez = this.pos.z - o.pos.z, e2 = ex * ex + ez * ez, rr = 1.3 * Math.max(cfg.scale, o.cfg.scale); if (e2 < rr * rr && e2 > 1e-4) { const e = Math.sqrt(e2), k = (rr - e) / rr; dx += (ex / e) * k * 1.6; dz += (ez / e) * k * 1.6; } }
    const sp = cfg.speed * (this.burstLeft > 0 ? 0.35 : 1);
    this.vel.x += (dx * sp - this.vel.x) * Math.min(1, dt * 7); this.vel.z += (dz * sp - this.vel.z) * Math.min(1, dt * 7);
    const nx = this.pos.x + this.vel.x * dt, nz = this.pos.z + this.vel.z * dt, g0 = nav.groundAt(this.pos.x, this.pos.z);
    const okStep = (x, z) => { const g = nav.groundAt(x, z); return g !== null && (g0 === null || Math.abs(g - g0) <= 0.55); };
    if (okStep(nx, nz)) { this.pos.x = nx; this.pos.z = nz; }
    else if (okStep(nx, this.pos.z)) { this.pos.x = nx; this.vel.z = 0; }
    else if (okStep(this.pos.x, nz)) { this.pos.z = nz; this.vel.x = 0; }
    else { this.vel.x = this.vel.z = 0; if (g0 === null) { const i = nav.nearest(this.pos.x, this.pos.z); if (i >= 0) { this.pos.x = nav.x0 + (i % nav.nx + 0.5) * nav.cell; this.pos.z = nav.z0 + (((i / nav.nx) | 0) + 0.5) * nav.cell; } } }
    const g = nav.groundAt(this.pos.x, this.pos.z); if (g !== null) this.pos.y += (g - this.pos.y) * Math.min(1, dt * 12);
  }
  moveDrone(dt, ctx, toX, toZ, dist) {
    const { player, world, t } = ctx; this.orbit += dt * 0.35 * this.strafe;
    const R = 10 + Math.sin(t * 0.5 + this.ph) * 3;
    _a.set(player.pos.x + Math.cos(this.orbit) * R, Math.max(player.pos.y + this.height, 3.2) + Math.sin(t * 1.3 + this.ph) * 0.6, player.pos.z + Math.sin(this.orbit) * R);
    _a.x = clamp(_a.x, -44, 44); _a.z = clamp(_a.z, -38, 38);
    _b.copy(_a).sub(this.pos); const d = _b.length() || 1; _b.multiplyScalar(Math.min(this.cfg.speed, d * 1.6) / d);
    // 躲开建筑
    const cols = world.colliders, p = this.pos;
    for (let i = 0; i < cols.length; i++) { const c = cols[i]; if (c.max.y - c.min.y > 50) continue; if (p.x > c.min.x - 1 && p.x < c.max.x + 1 && p.z > c.min.z - 1 && p.z < c.max.z + 1 && p.y > c.min.y - 1 && p.y < c.max.y + 1.2) { _b.y = Math.max(_b.y, 5); break; } }
    for (const o of ctx.list) { if (o === this || o.dead || o.type !== 'drone') continue; _d.copy(p).sub(o.pos); const e = _d.length(); if (e < 2.4 && e > 0.01) _b.addScaledVector(_d, (2.4 - e) / e * 2); }
    this.vel.lerp(_b, Math.min(1, dt * 2.2)); this.pos.addScaledVector(this.vel, dt);
  }
  updateDead(dt, ctx) {
    this.deadT += dt; const m = this.m;
    if (this.type === 'drone') {
      this.vel.y -= 16 * dt; this.pos.addScaledVector(this.vel, dt); m.root.rotation.z += dt * 7; m.root.rotation.x += dt * 4; m.root.position.copy(this.pos);
      if (Math.random() < 0.5) ctx.fx.spawn(this.pos.x, this.pos.y, this.pos.z, 0, 0.5, 0, 0.8, 0.5, 0.15, 0.14, 0.13, -0.8, 1.5, 2);
      const g = ctx.nav.groundAt(this.pos.x, this.pos.z);
      if (this.pos.y < (g ?? -1) + 0.2 || this.deadT > 2.5) { ctx.fx.explode(this.pos.clone(), 0.7); this.dispose(); }
    } else {
      const k = Math.min(1, this.deadT / 0.5);
      m.root.rotation.x = -k * k * 1.5; m.root.position.y = this.pos.y + Math.sin(k * 1.57) * 0.15 * (1 - k) + k * 0.28 * this.cfg.scale;
      m.arms.rotation.x = k * 1.1; m.legs.forEach((l, i) => { l.hip.rotation.x = k * (i ? 0.5 : -0.3); l.knee.rotation.x = k * 0.8; });
      if (this.deadT < 1.2 && Math.random() < 0.35) ctx.fx.spawn(this.pos.x, this.pos.y + 0.4, this.pos.z, (Math.random() - 0.5), 1, (Math.random() - 0.5), 1, 0.5, 0.12, 0.11, 0.1, -0.9, 1.5, 2);
      if (this.deadT > 4) { m.root.position.y -= (this.deadT - 4) * 0.6; if (this.deadT > 5.2) this.dispose(); }
    }
  }
  dispose() { this.remove = true; this.scene.remove(this.m.root); }
}

export class Enemies {
  constructor(scene, world, A) {
    this.scene = scene; this.world = world; this.list = []; this.nav = new Nav(world); this.flowT = 0;
    if (A && A.has('rustmetal')) { // 敌人装甲用做旧金属照片贴图
      const m = A.pbr('rustmetal', { size: 512, normal: 2.2, rough: 0.5, roughK: 0.5 });
      for (const [k, c] of [['armor', '#b9c0c0'], ['armorHeavy', '#c8b99a']]) Object.assign(MAT[k], { map: m.map, normalMap: m.normalMap, roughnessMap: m.roughnessMap, roughness: 1, metalness: 0.55 }), MAT[k].color.set(c), MAT[k].needsUpdate = true;
    }
  }
  spawn(type, pos) { const e = new Enemy(type, pos, this.scene); this.list.push(e); return e; }
  get alive() { let n = 0; for (const e of this.list) if (!e.dead) n++; return n; }
  clear() { for (const e of this.list) this.scene.remove(e.m.root); this.list.length = 0; }
  update(dt, ctx) {
    this.flowT -= dt; const p = ctx.player;
    if (this.flowT <= 0) { this.flowT = 0.4; this.nav.flow(p.pos.x, p.pos.z, p.onGround ? p.pos.y : undefined); }
    ctx.nav = this.nav; ctx.list = this.list;
    for (const e of this.list) e.update(dt, ctx);
    for (let i = this.list.length - 1; i >= 0; i--) if (this.list[i].remove) this.list.splice(i, 1);
  }
}
