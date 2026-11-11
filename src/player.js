// 第一人称角色：跑、二段跳、冲刺、下砸、滑索；AABB 碰撞
import * as THREE from 'three';

const R = 0.32, H = 1.7, EYE = 1.56, STEP = 0.46, G = 27;
const WALK = 6.3, SPRINT = 9.6, JUMP = 9.2, JUMP2 = 8.8, DASH_V = 21, DASH_T = 0.19;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class Player {
  constructor(camera, world, emit) {
    this.cam = camera; this.world = world; this.emit = emit;
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.safe = new THREE.Vector3(); this.safeYaw = 0;
    this.reset(world.spawn);
  }
  reset(s) {
    this.pos.copy(s.pos); this.vel.set(0, 0, 0); this.yaw = s.yaw; this.pitch = 0;
    this.onGround = false; this.ground = null; this.coyote = 0; this.jumpBuf = 0; this.airJumps = 1; this.airDash = true;
    this.dashT = 0; this.dashCd = 0; this.dashDir = new THREE.Vector3(); this.pounding = 0; this.zip = null;
    this.bob = 0; this.dip = 0; this.roll = 0; this.fov = 76; this.speed = 0; this.groundT = 0; this.bounced = false;
    this.safe.copy(s.pos); this.safeYaw = s.yaw; this.kick = 0; this.hp = 100;
  }
  overlaps(c) {
    const p = this.pos;
    return p.x + R > c.min.x && p.x - R < c.max.x && p.z + R > c.min.z && p.z - R < c.max.z && p.y < c.max.y && p.y + H > c.min.y;
  }
  moveAxis(ax, d) {
    if (d === 0) return null;
    const p = this.pos, cols = this.world.colliders; let landed = null;
    p[ax] += d;
    for (let i = 0; i < cols.length; i++) {
      const c = cols[i];
      if (c.off || !this.overlaps(c)) continue;
      if (ax === 'y') {
        if (d < 0) { p.y = c.max.y; landed = c; } else { p.y = c.min.y - H - 0.001; if (this.vel.y > 0) this.vel.y = 0; }
      } else {
        const up = c.max.y - p.y;
        if (up > 0 && up <= STEP && (this.onGround || this.coyote > 0)) { p.y = c.max.y + 0.0005; continue; }
        if (d > 0) p[ax] = c.min[ax] - R - 0.0005; else p[ax] = c.max[ax] + R + 0.0005;
        this.vel[ax] = 0;
      }
    }
    return landed;
  }
  startZip(zip) {
    this.zip = { a: zip.a, b: zip.b, t: 0.02, v: 7, len: zip.a.distanceTo(zip.b) };
    this.vel.set(0, 0, 0); this.onGround = false; this.ground = null; this.pounding = 0; this.dashT = 0;
    this.emit('zipStart');
  }
  respawn() {
    this.pos.copy(this.safe); this.pos.y += 0.05; this.vel.set(0, 0, 0); this.pounding = 0; this.dashT = 0; this.zip = null;
  }
  update(dt, inp) {
    this.yaw -= inp.lookX; this.pitch = clamp(this.pitch - inp.lookY, -1.5, 1.5);
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw), rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    let wx = fx * inp.fwd + rx * inp.right, wz = fz * inp.fwd + rz * inp.right;
    const wl = Math.hypot(wx, wz); if (wl > 1) { wx /= wl; wz /= wl; }
    const moving = wl > 0.1;
    this.dashCd -= dt; this.jumpBuf -= dt; this.coyote -= dt;
    if (inp.jump) this.jumpBuf = 0.13;

    if (this.zip) {
      const z = this.zip;
      z.v = Math.min(15, z.v + 6 * dt); z.t += (z.v * dt) / z.len;
      this.pos.lerpVectors(z.a, z.b, Math.min(1, z.t)); this.pos.y -= 2.4;
      const dir = z.b.clone().sub(z.a).normalize();
      if (z.t >= 1 || inp.jump) {
        this.vel.copy(dir).multiplyScalar(z.t >= 1 ? 4 : z.v); if (z.t < 1) this.vel.y = 5;
        this.zip = null; this.airJumps = 1; this.airDash = true; this.jumpBuf = 0; this.emit('zipEnd');
      }
      this.speed = z.v; this.applyCamera(dt, inp, 0, true);
      return;
    }

    // 冲刺
    if (inp.dash && this.dashCd <= 0 && !this.pounding && (this.onGround || this.airDash)) {
      if (moving) this.dashDir.set(wx / wl, 0, wz / wl); else this.dashDir.set(fx, 0, fz);
      this.dashT = DASH_T; this.dashCd = 0.55; if (!this.onGround) this.airDash = false;
      this.emit('dash');
    }
    // 下砸
    if (inp.pound && !this.onGround && !this.pounding && this.coyote <= 0) { this.pounding = 1; this.poundHang = 0.13; this.vel.set(0, 0, 0); this.dashT = 0; this.emit('poundStart'); }

    if (this.pounding) {
      this.poundHang -= dt;
      this.vel.x = this.vel.z = 0; this.vel.y = this.poundHang > 0 ? 0 : -38;
    } else if (this.dashT > 0) {
      this.dashT -= dt;
      this.vel.x = this.dashDir.x * DASH_V; this.vel.z = this.dashDir.z * DASH_V; this.vel.y = 0;
      if (this.dashT <= 0) { this.vel.x = this.dashDir.x * SPRINT; this.vel.z = this.dashDir.z * SPRINT; }
    } else {
      const sp = inp.sprint && moving ? SPRINT : WALK;
      const k = this.onGround ? 13 : (moving ? 4.5 : 0.8), a = Math.min(1, k * dt);
      this.vel.x += (wx * sp - this.vel.x) * a; this.vel.z += (wz * sp - this.vel.z) * a;
      // 跳
      if (this.jumpBuf > 0) {
        if (this.onGround || this.coyote > 0) { this.vel.y = JUMP; this.jumpBuf = 0; this.coyote = 0; this.onGround = false; this.bounced = false; this.emit('jump'); }
        else if (this.airJumps > 0) { this.vel.y = JUMP2; this.airJumps--; this.jumpBuf = 0; this.bounced = false; this.emit('jump2'); }
      }
      if (!inp.jumpHeld && this.vel.y > 3 && !this.bounced) this.vel.y -= 34 * dt;
      this.vel.y -= G * (this.vel.y < 0 ? 1.25 : 1) * dt;
      if (this.vel.y < -42) this.vel.y = -42;
    }

    // 位移与碰撞（细分防穿透）
    const wasGround = this.onGround, vyBefore = this.vel.y;
    const dx = this.vel.x * dt, dy = this.vel.y * dt, dz = this.vel.z * dt;
    const n = Math.max(1, Math.ceil(Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz)) / 0.18));
    let landed = null;
    for (let i = 0; i < n; i++) {
      this.moveAxis('x', dx / n); this.moveAxis('z', dz / n);
      if (!landed) { const l = this.moveAxis('y', dy / n); if (l) landed = l; }
    }
    if (landed) {
      const impact = -vyBefore;
      if (this.pounding) {
        this.pounding = 0; this.emit('pound', landed);
        if (landed.bounce) { this.vel.y = landed.bounce * 1.28; this.bounceOff(); this.emit('bounce'); }
        else if (landed.tag === 'drum') { this.vel.y = 12; this.bounceOff(); }
        else { this.vel.y = 0; this.dip = 0.3; this.setGround(landed); }
      } else if (landed.bounce && impact > 3.5) { this.vel.y = landed.bounce; this.bounceOff(); this.emit('bounce'); }
      else {
        if (!wasGround && impact > 5) { this.emit('land', impact); this.dip = Math.min(0.3, impact * 0.012); }
        this.vel.y = 0; this.setGround(landed);
      }
    } else { this.onGround = false; this.ground = null; this.groundT = 0; }

    if (this.onGround) {
      this.groundT += dt;
      const g = this.ground;
      if (this.groundT > 0.25 && g && g.safe !== false && !g.moving) { this.safe.copy(this.pos); this.safeYaw = this.yaw; }
    }
    if (this.pos.y < -1.35) { this.emit('splash', this.pos.clone()); this.respawn(); }

    this.speed = Math.hypot(this.vel.x, this.vel.z);
    this.applyCamera(dt, inp, inp.right, false);
  }
  setGround(c) { this.onGround = true; this.ground = c; this.coyote = 0.1; this.airJumps = 1; this.airDash = true; }
  bounceOff() { this.onGround = false; this.ground = null; this.airJumps = 1; this.airDash = true; this.bounced = true; this.coyote = 0; }
  applyCamera(dt, inp, strafe, zipping) {
    const run = this.onGround ? this.speed : 0;
    this.bob += run * dt * 1.55;
    this.dip += (0 - this.dip) * Math.min(1, dt * 9);
    const targetRoll = -strafe * 0.02 + (zipping ? Math.sin(this.bob * 0 + performance.now() * 0.002) * 0.03 : 0);
    this.roll += (targetRoll - this.roll) * Math.min(1, dt * 8);
    const sprinting = this.speed > WALK + 1;
    const tf = (76 + (this.dashT > 0 ? 14 : sprinting ? 7 : 0) + (zipping ? 10 : 0) + (this.pounding ? 8 : 0)) * (1 - (this.adsK || 0) * 0.3);
    this.fov += (tf - this.fov) * Math.min(1, dt * 14);
    const by = Math.sin(this.bob * 2) * 0.035 * Math.min(1, run / WALK);
    this.cam.position.set(this.pos.x, this.pos.y + EYE + by - this.dip, this.pos.z);
    this.kick *= Math.exp(-dt * 7.5);
    this.cam.rotation.set(Math.min(1.55, this.pitch + this.kick), this.yaw, this.roll, 'YXZ');
    if (Math.abs(this.cam.fov - this.fov) > 0.05) { this.cam.fov = this.fov; this.cam.updateProjectionMatrix(); }
  }
  get center() { return this._c = (this._c || new THREE.Vector3()).set(this.pos.x, this.pos.y + 0.9, this.pos.z); }
}
