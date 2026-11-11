// 突击步枪：写实持枪画面（Codex 生成图抠像）+ 射击、后坐、瞄准、换弹
import * as THREE from 'three';
import { rayBox } from './fx.js';
import { SUN_DIR } from './world.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const lerp = THREE.MathUtils.lerp, sstep = THREE.MathUtils.smoothstep;
const D = 0.5;                      // 画面片离相机的距离（不做深度测试，永不穿墙）
const HIP = { scale: 0.9, padX: 0.04, padY: 0.05, muzzle: [0.505, 0.506], optic: [0.663, 0.44] }; // 腰射图：枪口、瞄具在图里的位置（u, v自上而下）
const ADS = { scale: 1.12, window: [0.5, 0.405] };                                                    // 举镜图：镜片中心

function spriteMat(tex, o = {}) { return new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, fog: false, ...o }); }

export class Weapon {
  constructor(camera, world, fx, sfx, A, overlayCam) {
    this.cam = camera; this.world = world; this.fx = fx; this.sfx = sfx;
    this.holder = new THREE.Group(); (overlayCam || camera).add(this.holder); // 叠加层相机：枪不吃体积雾和动态模糊
    const geo = new THREE.PlaneGeometry(1, 1);
    const hip = A.cutout('gunHip', 'g', { bleed: [34, 30, 26] }), ads = A.cutout('gunAds', 'g', { bleed: [30, 28, 26] });
    this.hipAspect = hip ? hip.aspect : 16 / 9; this.adsAspect = ads ? ads.aspect : 16 / 9; this.hasAds = !!ads;
    this.hipPivot = new THREE.Group(); this.hipMesh = new THREE.Mesh(geo, spriteMat(hip ? hip.tex : null, hip ? {} : { opacity: 0 })); this.hipMesh.renderOrder = 1000; this.hipPivot.add(this.hipMesh); this.holder.add(this.hipPivot);
    this.adsPivot = new THREE.Group(); this.adsMesh = new THREE.Mesh(geo, spriteMat(ads ? ads.tex : null, { opacity: 0 })); this.adsMesh.renderOrder = 1001; this.adsPivot.add(this.adsMesh); this.holder.add(this.adsPivot);
    // 枪口焰
    const fc = document.createElement('canvas'); fc.width = fc.height = 128; const fg = fc.getContext('2d');
    fg.translate(64, 64); const gr = fg.createRadialGradient(0, 0, 2, 0, 0, 60); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.22, 'rgba(255,225,150,0.95)'); gr.addColorStop(0.55, 'rgba(255,140,40,0.4)'); gr.addColorStop(1, 'rgba(255,90,0,0)');
    fg.fillStyle = gr; for (let i = 0; i < 7; i++) { fg.rotate(0.9 + (i % 2) * 0.3); fg.beginPath(); fg.moveTo(0, -8); fg.lineTo(i % 2 ? 62 : 42, 0); fg.lineTo(0, 8); fg.closePath(); fg.fill(); }
    fg.beginPath(); fg.arc(0, 0, 24, 0, 7); fg.fill();
    const ft = new THREE.CanvasTexture(fc); ft.colorSpace = THREE.SRGBColorSpace;
    this.flash = new THREE.Mesh(geo, spriteMat(ft, { color: new THREE.Color(5, 4, 2.6), blending: THREE.AdditiveBlending, toneMapped: false })); this.flash.renderOrder = 1002; this.flash.visible = false; this.holder.add(this.flash);
    this.dot = new THREE.Mesh(new THREE.CircleGeometry(0.5, 16), spriteMat(null, { color: new THREE.Color(10, 0.5, 0.25), toneMapped: false, blending: THREE.AdditiveBlending })); this.dot.renderOrder = 1003; this.dot.visible = false; this.holder.add(this.dot);
    this.holder.traverse((o) => { o.userData.noAO = true; o.frustumCulled = false; });
    this.light = new THREE.PointLight('#ffb060', 0, 14, 2); this.light.position.set(0, 0, -1.2); camera.add(this.light);
    this.ammo = 30; this.magSize = 30; this.reserve = 150; this.cd = 0; this.reloadT = 0; this.ads = 0; this.kickZ = 0; this.kickR = 0; this.bloom = 0;
    this.swayX = 0; this.swayY = 0; this.flashT = 0; this.sprintK = 0; this.shots = 0; this.hitsN = 0; this.sunK = 0.5; this.sunT = 0; this.sunWant = 0.5; this.spread = 0.006;
    this._muzzle = V3(0, 0, 0);
  }
  get reloading() { return this.reloadT > 0; }
  startReload() { if (this.reloadT > 0 || this.ammo >= this.magSize || this.reserve <= 0) return; this.reloadT = 1.9; this.sfx.reload(); }
  addAmmo(n) { this.reserve = Math.min(240, this.reserve + n); }
  update(dt, inp, player, enemies, cb) {
    const cam = this.cam;
    const wantAds = inp.ads && this.reloadT <= 0 && !(player.speed > 8 && player.onGround && !inp.shoot);
    this.ads += ((wantAds ? 1 : 0) - this.ads) * Math.min(1, dt * 14);
    const sprinting = player.speed > 8 && player.onGround && !inp.shoot && !wantAds;
    this.sprintK += ((sprinting ? 1 : 0) - this.sprintK) * Math.min(1, dt * 8);
    this.cd -= dt; this.bloom = Math.max(0, this.bloom - dt * 0.05);
    if (inp.reload) this.startReload();
    if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) { const n = Math.min(this.magSize - this.ammo, this.reserve); this.ammo += n; this.reserve -= n; } }
    // 受光：枪在太阳下偏暖偏亮，在阴影里偏冷偏暗
    this.sunT -= dt;
    if (this.sunT <= 0) {
      this.sunT = 0.12; const o = cam.position, cols = this.world.colliders; let lit = 1;
      for (let i = 0; i < cols.length; i++) { const c = cols[i]; if (c.off || c.max.y - c.min.y > 60) continue; const t = rayBox(o, SUN_DIR, c, 140); if (t >= 0) { lit = 0; break; } }
      this.sunWant = lit;
    }
    this.sunK += (this.sunWant - this.sunK) * Math.min(1, dt * 5);
    // 姿态参数（单位：屏幕高度）
    this.kickZ *= Math.exp(-dt * 16); this.kickR *= Math.exp(-dt * 12);
    this.swayX += (-inp.lookX * 2.4 - this.swayX) * Math.min(1, dt * 8); this.swayY += (inp.lookY * 2.4 - this.swayY) * Math.min(1, dt * 8);
    const a = this.ads, run = player.onGround ? Math.min(1, player.speed / 6.3) : 0, bob = player.bob, bk = (1 - a * 0.85) * run, sk = this.sprintK * (1 - a);
    let ox = this.swayX * 0.5 + Math.sin(bob) * 0.012 * bk + this.kickZ * 0.011 + sk * 0.05 - a * 0.22;
    let oy = this.swayY * 0.5 - Math.abs(Math.cos(bob)) * 0.016 * bk - this.kickZ * 0.012 - player.dip * 0.35 - THREE.MathUtils.clamp(player.vel.y, -10, 10) * 0.004 * (1 - a) - sk * 0.13 - a * 0.1;
    let rot = -this.kickR * 0.012 + this.swayX * 0.12 + sk * 0.2 + Math.sin(bob) * 0.006 * bk, scl = 1 + this.kickZ * 0.03;
    if (this.reloadT > 0) { const p = 1 - this.reloadT / 1.9, e = Math.sin(Math.min(1, p / 0.2) * 1.57) * (p > 0.78 ? Math.cos(((p - 0.78) / 0.22) * 1.57) : 1); oy -= e * 0.72; rot += e * 0.4; ox += e * 0.08; }
    if (player.pounding) oy -= 0.3;
    // 画面片贴屏幕
    const H = 2 * D * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)), W = H * cam.aspect;
    const sh = H * HIP.scale, sw = sh * this.hipAspect;
    this.hipPivot.position.set(W / 2 + HIP.padX * H + ox * H, -H / 2 - HIP.padY * H + oy * H, -D); this.hipPivot.rotation.z = rot; this.hipPivot.scale.setScalar(scl);
    this.hipMesh.scale.set(sw, sh, 1); this.hipMesh.position.set(-sw / 2, sh / 2, 0);
    const adsK = this.hasAds ? sstep(a, 0.35, 0.8) : 0;
    const flashK = this.flashT > 0 ? 1 : 0, s = this.sunK, tint = 1.18 + flashK * 0.9;
    this.hipMesh.material.color.setRGB(lerp(0.5, 1.12, s) * tint, lerp(0.54, 1.0, s) * tint, lerp(0.64, 0.86, s) * tint);
    this.hipMesh.material.opacity = this.hipMesh.material.map ? 1 - adsK : 0; this.hipMesh.visible = adsK < 0.99;
    if (this.hasAds) {
      const ah = H * ADS.scale * (1 + this.kickZ * 0.02), aw = ah * this.adsAspect;
      this.adsPivot.position.set(this.swayX * 0.15 * H, (-(1 - a) * 0.4 - this.kickZ * 0.006 + this.swayY * 0.15) * H, -D); this.adsPivot.rotation.z = -this.kickR * 0.004;
      this.adsMesh.scale.set(aw, ah, 1); this.adsMesh.position.set(-(ADS.window[0] - 0.5) * aw, -(0.5 - ADS.window[1]) * ah, 0);
      this.adsMesh.material.color.copy(this.hipMesh.material.color); this.adsMesh.material.opacity = adsK; this.adsMesh.visible = adsK > 0.01;
    }
    this.dot.visible = a > 0.75; this.dot.scale.setScalar(H * 0.007); this.dot.position.set(this.adsPivot.position.x, this.adsPivot.position.y, -D + 0.001);
    // 枪口位置（屏幕上）
    const mx = this.hipPivot.position.x + (-sw / 2 + (HIP.muzzle[0] - 0.5) * sw) * scl, my = this.hipPivot.position.y + (sh / 2 + (0.5 - HIP.muzzle[1]) * sh) * scl;
    this._muzzle.set(lerp(mx, 0, a), lerp(my, -0.02 * H, a), -D);
    if (this.flashT > 0) { this.flashT -= dt; this.flash.position.copy(this._muzzle); if (this.flashT <= 0) { this.flash.visible = false; this.light.intensity = 0; } }
    // 开火
    this.spread = (0.0045 + (player.onGround ? Math.min(1, player.speed / 9) * 0.012 : 0.02)) * (1 - a * 0.92) + this.bloom;
    if (inp.shoot && this.cd <= 0 && this.reloadT <= 0) {
      if (this.ammo <= 0) { this.cd = 0.25; this.sfx.dry(); this.startReload(); }
      else this.fire(player, enemies, cb, H);
    }
  }
  fire(player, enemies, cb, H) {
    const fx = this.fx, cam = this.cam;
    this.ammo--; this.cd = 0.088; this.shots++;
    const o = cam.getWorldPosition(new THREE.Vector3()), d = cam.getWorldDirection(new THREE.Vector3());
    const right = V3(1, 0, 0).applyQuaternion(cam.quaternion), up = V3(0, 1, 0).applyQuaternion(cam.quaternion);
    const ang = Math.random() * 6.283, rad = Math.sqrt(Math.random()) * this.spread;
    d.addScaledVector(right, Math.cos(ang) * rad).addScaledVector(up, Math.sin(ang) * rad).normalize();
    let best = 220, n = V3(0, 1, 0), hitWorld = false, water = false; const cols = this.world.colliders;
    for (let i = 0; i < cols.length; i++) { const c = cols[i]; if (c.off) continue; const t = rayBox(o, d, c, best); if (t >= 0 && t < best) { best = t; n.copy(rayBox.n); hitWorld = true; } }
    if (d.y < 0) { const tw = (-1.0 - o.y) / d.y; if (tw > 0 && tw < best) { best = tw; hitWorld = false; water = true; } }
    let hitE = null, head = false;
    for (const en of enemies.list) { if (en.dead) continue; const r = en.hitTest(o, d, best); if (r) { best = r.t; hitE = en; head = r.head; hitWorld = false; water = false; } }
    const hp = o.clone().addScaledVector(d, best);
    if (hitE) { this.hitsN++; cb.enemyHit(hitE, head ? 46 : 22, head, hp, d); }
    else if (hitWorld) fx.impact(hp, n);
    else if (water) fx.burst(hp, 8, 3, '#cfe8ff', { up: 3, life: 0.4, size: 0.1 });
    // 枪口焰、曳光、弹壳
    this.flash.visible = true; this.flash.position.copy(this._muzzle); this.flash.rotation.z = Math.random() * 6.28; this.flash.scale.setScalar(H * (0.2 + Math.random() * 0.12) * (1 - this.ads * 0.35)); this.flashT = 0.05; this.light.intensity = 30;
    const mw = cam.localToWorld(this._muzzle.clone().multiplyScalar(1.9));
    fx.tracer(mw, hp);
    fx.spawn(mw.x, mw.y, mw.z, d.x * 1.5, 0.5, d.z * 1.5, 0.55, 0.12, 0.55, 0.55, 0.55, -0.5, 2, 2.6);
    const ej = cam.localToWorld(V3(0.16, -0.11, -0.5));
    fx.casing(ej, right.clone().multiplyScalar(2.2 + Math.random()).add(up.clone().multiplyScalar(1.6 + Math.random())).add(V3(player.vel.x, 0, player.vel.z)));
    // 后坐
    const a = this.ads;
    this.kickZ = Math.min(1.7, this.kickZ + 1); this.kickR = Math.min(1.6, this.kickR + 1);
    player.kick += lerp(0.0125, 0.008, a); player.yaw += (Math.random() - 0.5) * lerp(0.009, 0.005, a);
    this.bloom = Math.min(0.03, this.bloom + lerp(0.0045, 0.0012, a));
    this.sfx.shot();
    if (this.ammo <= 0) this.startReload();
  }
}
