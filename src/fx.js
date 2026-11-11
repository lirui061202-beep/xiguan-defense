// 粒子、曳光、弹孔、弹壳、敌方能量弹、冲击环、烟花、飘落木棉
import * as THREE from 'three';

export function rayBox(o, d, c, maxT) {
  // 射线与 AABB 求交：返回 t（未命中返回 -1），法线轴写入 rayBox.n
  let tmin = 0, tmax = maxT, ax = -1, sgn = 0;
  for (let i = 0; i < 3; i++) {
    const k = i === 0 ? 'x' : i === 1 ? 'y' : 'z', od = o[k], dd = d[k], mn = c.min[k], mx = c.max[k];
    if (Math.abs(dd) < 1e-8) { if (od < mn || od > mx) return -1; continue; }
    let t1 = (mn - od) / dd, t2 = (mx - od) / dd, s = -1;
    if (t1 > t2) { const t = t1; t1 = t2; t2 = t; s = 1; }
    if (t1 > tmin) { tmin = t1; ax = i; sgn = s; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return -1;
  }
  if (ax < 0) return -1;
  rayBox.n.set(ax === 0 ? sgn : 0, ax === 1 ? sgn : 0, ax === 2 ? sgn : 0);
  return tmin;
}
rayBox.n = new THREE.Vector3();

export class FX {
  constructor(scene, world) {
    this.scene = scene; this.world = world;
    // ---- 粒子 ----
    const N = this.N = 1600;
    this.p = { pos: new Float32Array(N * 3), vel: new Float32Array(N * 3), col: new Float32Array(N * 4), size: new Float32Array(N), life: new Float32Array(N), max: new Float32Array(N), grav: new Float32Array(N), drag: new Float32Array(N), base: new Float32Array(N), grow: new Float32Array(N) };
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.p.pos, 3));
    g.setAttribute('acol', new THREE.BufferAttribute(this.p.col, 4));
    g.setAttribute('size', new THREE.BufferAttribute(this.p.size, 1));
    this.pmat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, uniforms: { scale: { value: 600 } },
      vertexShader: 'attribute float size; attribute vec4 acol; varying vec4 vC; uniform float scale; void main(){ vC=acol; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=min(400.,size*scale/max(.1,-mv.z)); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'varying vec4 vC; void main(){ float r=length(gl_PointCoord-.5); if(r>.5) discard; gl_FragColor=vec4(vC.rgb, vC.a*smoothstep(.5,.1,r)); }',
    });
    this.points = new THREE.Points(g, this.pmat); this.points.frustumCulled = false; scene.add(this.points);
    this.pi = 0;
    // ---- 敌方能量弹 ----
    const BN = this.BN = 80;
    this.bolts = []; for (let i = 0; i < BN; i++) this.bolts.push({ pos: new THREE.Vector3(), vel: new THREE.Vector3(), life: 0, dmg: 0 });
    const bg = new THREE.CapsuleGeometry(0.05, 0.7, 3, 8); bg.rotateX(Math.PI / 2);
    this.boltMesh = new THREE.InstancedMesh(bg, new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 1.2, 0.5), toneMapped: false }), BN);
    this.boltMesh.frustumCulled = false; this.boltMesh.userData.noAO = true; scene.add(this.boltMesh); this.bi = 0;
    // ---- 曳光 ----
    this.tracers = [];
    const tg = new THREE.BoxGeometry(0.018, 0.018, 1); tg.translate(0, 0, 0.5);
    for (let i = 0; i < 14; i++) { const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 3.6, 1.6), transparent: true, opacity: 0, depthWrite: false, toneMapped: false })); m.visible = false; m.userData.noAO = true; scene.add(m); this.tracers.push({ m, t: 1 }); }
    this.ti = 0;
    // ---- 弹孔 ----
    const DN = this.DN = 90, dc = document.createElement('canvas'); dc.width = dc.height = 64; const dg = dc.getContext('2d');
    const gr = dg.createRadialGradient(32, 32, 2, 32, 32, 30); gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(0.25, 'rgba(10,8,6,0.95)'); gr.addColorStop(0.55, 'rgba(40,34,28,0.5)'); gr.addColorStop(1, 'rgba(60,50,40,0)'); dg.fillStyle = gr; dg.fillRect(0, 0, 64, 64);
    this.decalMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.22, 0.22), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(dc), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }), DN);
    this.decalMesh.frustumCulled = false; this.decalMesh.userData.noAO = true; scene.add(this.decalMesh); this.di = 0;
    this.dummy = new THREE.Object3D();
    this.dummy.position.set(0, -99, 0); this.dummy.updateMatrix(); for (let i = 0; i < DN; i++) this.decalMesh.setMatrixAt(i, this.dummy.matrix);
    // ---- 弹壳 ----
    const CN = this.CN = 24; this.casings = []; for (let i = 0; i < CN; i++) this.casings.push({ pos: new THREE.Vector3(), vel: new THREE.Vector3(), rot: new THREE.Vector3(), life: 0 });
    this.casingMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.009, 0.009, 0.04, 6), new THREE.MeshStandardMaterial({ color: '#c9a04a', metalness: 0.9, roughness: 0.3 }), CN);
    this.casingMesh.frustumCulled = false; scene.add(this.casingMesh); this.ci = 0;
    // ---- 飘落木棉 ----
    const FN = this.FN = 36;
    this.petals = []; this.petalMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.2, 0.14), new THREE.MeshStandardMaterial({ color: '#c93a22', side: THREE.DoubleSide, roughness: 0.7 }), FN);
    for (let i = 0; i < FN; i++) this.petals.push({ x: -40 + Math.random() * 80, y: Math.random() * 14, z: -34 + Math.random() * 68, ph: Math.random() * 6, s: 0.6 + Math.random() * 0.8 });
    this.petalMesh.userData.noAO = true; this.petalMesh.visible = false; scene.add(this.petalMesh); // 飘落花瓣是纯色面片，近看很假，停用
    // ---- 冲击环 ----
    this.rings = [];
    for (let i = 0; i < 4; i++) { const m = new THREE.Mesh(new THREE.RingGeometry(0.78, 1, 48), new THREE.MeshBasicMaterial({ color: '#ffd9a0', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide })); m.rotation.x = -Math.PI / 2; m.visible = false; scene.add(m); this.rings.push({ m, t: 1 }); }
    // ---- 爆炸闪光 ----
    this.flash = new THREE.PointLight('#ffb060', 0, 22, 2); scene.add(this.flash); this.flashT = 0;
    this.fireworks = false; this.fwT = 0;
  }
  spawn(x, y, z, vx, vy, vz, life, size, r, g, b, grav = 9, drag = 0.5, grow = 0) {
    const i = this.pi, p = this.p; this.pi = (i + 1) % this.N;
    p.pos[i * 3] = x; p.pos[i * 3 + 1] = y; p.pos[i * 3 + 2] = z; p.vel[i * 3] = vx; p.vel[i * 3 + 1] = vy; p.vel[i * 3 + 2] = vz;
    p.life[i] = p.max[i] = life; p.base[i] = size; p.col[i * 4] = r; p.col[i * 4 + 1] = g; p.col[i * 4 + 2] = b; p.grav[i] = grav; p.drag[i] = drag; p.grow[i] = grow;
  }
  burst(pos, n, speed, color, o = {}) {
    const c = color.isColor ? color : new THREE.Color(color), k2 = o.hdr || 1;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.283, u = Math.random() * 2 - 1, s = speed * (0.35 + Math.random() * 0.65), k = Math.sqrt(1 - u * u);
      this.spawn(pos.x, pos.y, pos.z, Math.cos(a) * k * s + (o.dir ? o.dir.x * speed : 0), (o.up || 0) + u * s + (o.dir ? o.dir.y * speed : 0), Math.sin(a) * k * s + (o.dir ? o.dir.z * speed : 0), (o.life || 0.6) * (0.6 + Math.random() * 0.6), (o.size || 0.12) * (0.6 + Math.random() * 0.8), c.r * k2, c.g * k2, c.b * k2, o.grav ?? 9, o.drag ?? 0.6, o.grow || 0);
    }
  }
  ring(pos, color = '#ffd9a0', size = 5) { const r = this.rings.find((q) => q.t >= 1) || this.rings[0]; r.t = 0; r.size = size; r.m.position.set(pos.x, pos.y + 0.06, pos.z); r.m.material.color.set(color); r.m.visible = true; }
  tracer(a, b) {
    const t = this.tracers[this.ti]; this.ti = (this.ti + 1) % this.tracers.length;
    t.m.position.copy(a); t.m.lookAt(b); t.m.scale.set(1, 1, a.distanceTo(b)); t.t = 0; t.m.visible = true; t.m.material.opacity = 0.9;
  }
  decal(pos, n) {
    const d = this.dummy; d.position.copy(pos).addScaledVector(n, 0.012); d.lookAt(pos.x + n.x, pos.y + n.y, pos.z + n.z); d.rotateZ(Math.random() * 6.28); d.scale.setScalar(0.7 + Math.random() * 0.7); d.updateMatrix();
    this.decalMesh.setMatrixAt(this.di, d.matrix); this.di = (this.di + 1) % this.DN; this.decalMesh.instanceMatrix.needsUpdate = true;
  }
  impact(pos, n) { // 子弹打在场景上
    this.decal(pos, n);
    this.burst(pos, 7, 4.5, '#ffd9a0', { life: 0.22, size: 0.05, dir: n, grav: 12, hdr: 4 });
    this.burst(pos, 5, 1.1, '#9a8f80', { life: 0.7, size: 0.28, dir: n.clone().multiplyScalar(0.5), grav: -0.4, drag: 2.5, grow: 1.6 });
  }
  sparks(pos, n = 12, color = '#ffb060') { this.burst(pos, n, 6, color, { life: 0.3, size: 0.06, grav: 14, hdr: 5 }); }
  explode(pos, big = 1) {
    this.burst(pos, 26 * big, 9 * big, '#ffb050', { life: 0.5, size: 0.3 * big, grav: 2, drag: 2.2, hdr: 4 });
    this.burst(pos, 18 * big, 4 * big, '#3a3632', { life: 1.5, size: 0.9 * big, grav: -1.2, drag: 1.6, grow: 2 });
    this.burst(pos, 22, 11, '#ffe0a0', { life: 0.6, size: 0.05, grav: 16, hdr: 5 });
    this.flash.position.copy(pos); this.flash.intensity = 160 * big; this.flashT = 0.16;
  }
  casing(pos, vel) { const c = this.casings[this.ci]; this.ci = (this.ci + 1) % this.CN; c.pos.copy(pos); c.vel.copy(vel); c.rot.set(Math.random() * 6, Math.random() * 6, Math.random() * 6); c.life = 1.4; }
  bolt(origin, dir, speed, dmg) { const s = this.bolts[this.bi]; this.bi = (this.bi + 1) % this.BN; s.pos.copy(origin); s.vel.copy(dir).multiplyScalar(speed); s.life = 2.6; s.dmg = dmg; }
  update(dt, t, cb) {
    // 粒子
    const p = this.p;
    for (let i = 0; i < this.N; i++) {
      if (p.life[i] <= 0) { if (p.size[i] !== 0) p.size[i] = 0; continue; }
      p.life[i] -= dt; const d = Math.exp(-p.drag[i] * dt), j = i * 3;
      p.vel[j] *= d; p.vel[j + 1] = p.vel[j + 1] * d - p.grav[i] * dt; p.vel[j + 2] *= d;
      p.pos[j] += p.vel[j] * dt; p.pos[j + 1] += p.vel[j + 1] * dt; p.pos[j + 2] += p.vel[j + 2] * dt;
      const k = Math.max(0, p.life[i] / p.max[i]); p.col[i * 4 + 3] = Math.min(1, k * 1.6) * (p.grow[i] ? 0.5 : 1); p.size[i] = p.base[i] * (p.grow[i] ? 1 + (1 - k) * p.grow[i] : 0.5 + 0.5 * k);
    }
    const ga = this.points.geometry.attributes; ga.position.needsUpdate = ga.acol.needsUpdate = ga.size.needsUpdate = true;
    // 敌方能量弹
    const cols = this.world.colliders, d = this.dummy;
    for (let i = 0; i < this.BN; i++) {
      const s = this.bolts[i];
      if (s.life <= 0) { d.position.set(0, -99, 0); d.scale.setScalar(0.001); d.rotation.set(0, 0, 0); d.updateMatrix(); this.boltMesh.setMatrixAt(i, d.matrix); continue; }
      s.life -= dt; let hit = false;
      for (let k = 0; k < 3 && !hit; k++) {
        s.pos.addScaledVector(s.vel, dt / 3);
        if (cb.boltHit(s)) { hit = true; break; }
        if (s.pos.y < -1.0) { hit = true; break; }
        for (let j = 0; j < cols.length; j++) { const c = cols[j]; if (!c.off && s.pos.x > c.min.x && s.pos.x < c.max.x && s.pos.y > c.min.y && s.pos.y < c.max.y && s.pos.z > c.min.z && s.pos.z < c.max.z) { hit = true; break; } }
      }
      if (hit || s.life <= 0) { s.life = 0; this.burst(s.pos, 6, 3, '#ff7040', { life: 0.25, size: 0.07, hdr: 4 }); continue; }
      d.position.copy(s.pos); d.scale.setScalar(1); d.lookAt(s.pos.x + s.vel.x, s.pos.y + s.vel.y, s.pos.z + s.vel.z); d.updateMatrix(); this.boltMesh.setMatrixAt(i, d.matrix);
    }
    this.boltMesh.instanceMatrix.needsUpdate = true;
    // 曳光
    for (const tr of this.tracers) { if (tr.t >= 1) continue; tr.t += dt / 0.07; tr.m.material.opacity = Math.max(0, 0.9 * (1 - tr.t)); if (tr.t >= 1) tr.m.visible = false; }
    // 弹壳
    for (let i = 0; i < this.CN; i++) {
      const c = this.casings[i];
      if (c.life <= 0) { d.position.set(0, -99, 0); d.scale.setScalar(0.001); d.updateMatrix(); this.casingMesh.setMatrixAt(i, d.matrix); continue; }
      c.life -= dt; c.vel.y -= 14 * dt; c.pos.addScaledVector(c.vel, dt);
      if (c.pos.y < cb.groundY + 0.02 && c.vel.y < 0) { c.pos.y = cb.groundY + 0.02; c.vel.y *= -0.35; c.vel.x *= 0.5; c.vel.z *= 0.5; }
      d.position.copy(c.pos); d.rotation.set(c.rot.x + t * 14, c.rot.y, c.rot.z + t * 9); d.scale.setScalar(1); d.updateMatrix(); this.casingMesh.setMatrixAt(i, d.matrix);
    }
    this.casingMesh.instanceMatrix.needsUpdate = true;
    // 木棉飘落
    for (let i = 0; i < this.FN; i++) {
      const f = this.petals[i]; f.y -= dt * 0.9 * f.s; f.x += Math.sin(t * 0.8 + f.ph) * dt * 0.6; f.z += Math.cos(t * 0.6 + f.ph) * dt * 0.4;
      if (f.y < 0.02) { f.y = 10 + Math.random() * 5; f.x = -40 + Math.random() * 80; f.z = -34 + Math.random() * 68; }
      d.position.set(f.x, f.y, f.z); d.rotation.set(t * f.s + f.ph, t * 0.7 + f.ph, f.ph); d.scale.setScalar(f.s); d.updateMatrix(); this.petalMesh.setMatrixAt(i, d.matrix);
    }
    this.petalMesh.instanceMatrix.needsUpdate = true;
    // 冲击环 / 闪光
    for (const r of this.rings) { if (r.t >= 1) { r.m.visible = false; continue; } r.t += dt * 2.2; const e = 1 - Math.pow(1 - Math.min(1, r.t), 3); r.m.scale.setScalar(0.3 + e * r.size); r.m.material.opacity = (1 - r.t) * 0.8; }
    if (this.flashT > 0) { this.flashT -= dt; if (this.flashT <= 0) this.flash.intensity = 0; else this.flash.intensity *= 0.8; }
    // 烟花
    if (this.fireworks) {
      this.fwT -= dt;
      if (this.fwT <= 0) {
        this.fwT = 0.22 + Math.random() * 0.4;
        const near = Math.random() < 0.5;
        const pos = near ? new THREE.Vector3(-1 + (Math.random() - 0.5) * 30, 18 + Math.random() * 10, -24 + (Math.random() - 0.5) * 12) : new THREE.Vector3(90 + Math.random() * 120, 40 + Math.random() * 50, (Math.random() - 0.5) * 220);
        const c = new THREE.Color().setHSL(Math.random(), 1, 0.6);
        this.burst(pos, near ? 70 : 90, near ? 9 : 34, c, { life: near ? 1.3 : 2.0, size: near ? 0.3 : 2.6, grav: near ? 3 : 6, drag: 1.3, hdr: 5 });
        cb.boom && cb.boom(near);
      }
    }
  }
}
