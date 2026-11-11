// 静态几何合批 + AABB 碰撞盒收集
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const Y = new THREE.Vector3(0, 1, 0), ONE = new THREE.Vector3(1, 1, 1);
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3();

export function scaleBoxUV(g, w, h, d, s) {
  const uv = g.attributes.uv, dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) {
    const k = f * 4 + i;
    uv.setXY(k, uv.getX(k) * dims[f][0] / s, uv.getY(k) * dims[f][1] / s);
  }
}
export function scaleUV(g, sx, sy = sx) {
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * sx, uv.getY(i) * sy);
}

export class Builder {
  constructor(scene) { this.scene = scene; this.batches = new Map(); this.colliders = []; this.M = new THREE.Matrix4(); this.stack = []; }
  push(x, y, z, ry = 0) {
    this.stack.push(this.M.clone());
    this.M.multiply(new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(Y, ry), ONE));
  }
  pop() { this.M = this.stack.pop(); }
  // 把几何体按当前矩阵烘进对应材质的批次
  add(mat, geo, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    let g = geo.index ? geo.toNonIndexed() : geo;
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    _m.compose(_v.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz, 'YXZ')), new THREE.Vector3(sx, sy, sz));
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(this.M, _m));
    if (!this.batches.has(mat)) this.batches.set(mat, []);
    this.batches.get(mat).push(g);
  }
  // y 为底面高度
  box(mat, w, h, d, x, y, z, o = {}) {
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = o.uv ?? mat.userData.uv; if (uv) scaleBoxUV(g, w, h, d, uv);
    this.add(mat, g, x, y + h / 2, z, 0, o.ry || 0, 0);
  }
  cbox(mat, w, h, d, x, y, z, o = {}) { this.box(mat, w, h, d, x, y, z, o); return this.col(w, h, d, x, y, z, o); }
  col(w, h, d, x, y, z, extra = {}) {
    const min = new THREE.Vector3(Infinity, Infinity, Infinity), max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    for (let i = 0; i < 8; i++) {
      _v.set(x + (i & 1 ? w / 2 : -w / 2), y + (i & 2 ? h : 0), z + (i & 4 ? d / 2 : -d / 2)).applyMatrix4(this.M);
      min.min(_v); max.max(_v);
    }
    const c = { min, max };
    for (const k of ['bounce', 'tag', 'safe']) if (extra[k] !== undefined) c[k] = extra[k];
    this.colliders.push(c);
    return c;
  }
  cyl(mat, rt, rb, h, x, y, z, seg = 10, o = {}) {
    const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, !!o.open);
    if (mat.userData.uv) scaleUV(g, (6.283 * Math.max(rt, rb)) / mat.userData.uv, h / mat.userData.uv);
    this.add(mat, g, x, y + h / 2, z, o.rx || 0, o.ry || 0, o.rz || 0);
  }
  sph(mat, r, x, y, z, sx = 1, sy = 1, sz = 1, detail = 1) {
    const g = new THREE.IcosahedronGeometry(r, detail);
    if (mat.userData.uv) scaleUV(g, (6.283 * r * Math.max(sx, sz)) / mat.userData.uv, (3.1416 * r * sy) / mat.userData.uv);
    this.add(mat, g, x, y, z, 0, 0, 0, sx, sy, sz);
  }
  plane(mat, w, h, x, y, z, ry = 0, rx = 0, flip = false) { const g = new THREE.PlaneGeometry(w, h); if (flip) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i)); } this.add(mat, g, x, y, z, rx, ry, 0); }
  // 带起伏的球团（树冠等）
  blob(mat, r, x, y, z, sx = 1, sy = 1, sz = 1, amp = 0.2, seed = 0) {
    const g = new THREE.SphereGeometry(r, 22, 14), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const px = p.getX(i), py = p.getY(i), pz = p.getZ(i); const n = Math.sin(px * 1.7 + seed) * Math.sin(py * 2.1 + seed * 1.3) * Math.sin(pz * 1.9 - seed) + 0.5 * Math.sin(px * 3.9 - seed) * Math.sin(pz * 4.3 + py * 3.1); const k = 1 + amp * n; p.setXYZ(i, px * k, py * k, pz * k); }
    g.computeVertexNormals();
    if (mat.userData.uv) scaleUV(g, (6.283 * r * Math.max(sx, sz)) / mat.userData.uv, (3.1416 * r * sy) / mat.userData.uv);
    this.add(mat, g, x, y, z, 0, seed, 0, sx, sy, sz);
  }
  // 两点之间的细杆
  rod(mat, r, a, b, seg = 6) {
    const d = new THREE.Vector3().subVectors(b, a), len = d.length();
    const g = new THREE.CylinderGeometry(r, r, len, seg);
    const q = new THREE.Quaternion().setFromUnitVectors(Y, d.normalize());
    g.applyQuaternion(q);
    this.add(mat, g, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  }
  finish() {
    for (const [mat, list] of this.batches) {
      const geo = mergeGeometries(list, false);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = !mat.userData.noCast;
      mesh.receiveShadow = !mat.userData.noRecv;
      mesh.matrixAutoUpdate = false;
      this.scene.add(mesh);
      list.forEach((g) => g.dispose());
    }
    this.batches.clear();
  }
}
