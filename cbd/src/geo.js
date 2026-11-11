// 几何工具：按层放样的塔楼体、带“米制 UV”的方盒、按材质合批
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const rect = (w, d, ch = 0, ox = 0, oz = 0) => {
  const x = w / 2, z = d / 2;
  const p = ch ? [[-x + ch, -z], [x - ch, -z], [x, -z + ch], [x, z - ch], [x - ch, z], [-x + ch, z], [-x, z - ch], [-x, -z + ch]] : [[-x, -z], [x, -z], [x, z], [-x, z]];
  return p.map(([a, b]) => [a + ox, b + oz]);
};

function geoFrom(pos, nor, uv) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return g;
}

// levels: [{ y, pts:[[x,z],...] }]，各层点数相同、从上往下看按同一方向排列。UV = (沿周长的米数, 高度米数)
export function loft(levels, { smooth = false, cap = true, uLen = null } = {}) {
  const n = levels[0].pts.length, pos = [], nor = [], uv = [], Y = (lv, i) => (lv.ys ? lv.ys[i] : lv.y);
  const base = levels[0].pts, us = [0];
  for (let i = 0; i < n; i++) { const a = base[i], b = base[(i + 1) % n]; us.push(us[i] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  if (uLen) { const k = uLen / us[n]; for (let i = 0; i <= n; i++) us[i] *= k; }
  for (let i = 0; i <= n; i++) us[i] = -us[i];   // 从外面看 u 向右增大，贴图上的字才不会镜像
  // 平滑时的顶点法线：相邻两条边法线的平均
  const vn = (lv, i) => {
    const p = lv.pts, a = p[(i + n - 1) % n], b = p[i], c = p[(i + 1) % n];
    let nx = -(b[1] - a[1]) - (c[1] - b[1]), nz = (b[0] - a[0]) + (c[0] - b[0]); const l = Math.hypot(nx, nz) || 1; return [-nx / l, 0, -nz / l];
  };
  for (let k = 0; k < levels.length - 1; k++) {
    const A = levels[k], B = levels[k + 1];
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const a0 = [A.pts[i][0], Y(A, i), A.pts[i][1]], b0 = [A.pts[j][0], Y(A, j), A.pts[j][1]], a1 = [B.pts[i][0], Y(B, i), B.pts[i][1]], b1 = [B.pts[j][0], Y(B, j), B.pts[j][1]];
      const quad = [a0, a1, b1, a0, b1, b0], uvs = [[us[i], a0[1]], [us[i], a1[1]], [us[i + 1], b1[1]], [us[i], a0[1]], [us[i + 1], b1[1]], [us[i + 1], b0[1]]];
      let N;
      if (!smooth) {
        const e1 = [a1[0] - a0[0], a1[1] - a0[1], a1[2] - a0[2]], e2 = [b1[0] - a0[0], b1[1] - a0[1], b1[2] - a0[2]];
        const c = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]], l = Math.hypot(...c) || 1;
        N = [c[0] / l, c[1] / l, c[2] / l];
      }
      const ns = smooth ? [vn(A, i), vn(B, i), vn(B, j), vn(A, i), vn(B, j), vn(A, j)] : [N, N, N, N, N, N];
      for (let q = 0; q < 6; q++) { pos.push(...quad[q]); nor.push(...ns[q]); uv.push(...uvs[q]); }
    }
  }
  if (cap) {
    const T = levels[levels.length - 1]; let cx = 0, cz = 0, cy = 0; for (let i = 0; i < n; i++) { cx += T.pts[i][0] / n; cz += T.pts[i][1] / n; cy += Y(T, i) / n; }
    for (let i = 0; i < n; i++) {
      const a = T.pts[i], b = T.pts[(i + 1) % n];
      pos.push(cx, cy, cz, b[0], Y(T, (i + 1) % n), b[1], a[0], Y(T, i), a[1]); nor.push(0, 1, 0, 0, 1, 0, 0, 1, 0); uv.push(cx, cz, b[0], b[1], a[0], a[1]);
    }
  }
  return geoFrom(pos, nor, uv);
}

// 方盒，侧面 UV 用米（u 沿水平、v 沿高度）；底面中心在 (x, y, z)
export function box(w, h, d, x = 0, y = 0, z = 0, ry = 0) {
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv, nr = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    const nx = Math.abs(nr.getX(i)), ny = Math.abs(nr.getY(i));
    if (ny > 0.5) uv.setXY(i, uv.getX(i) * w, uv.getY(i) * d); else uv.setXY(i, uv.getX(i) * (nx > 0.5 ? d : w), uv.getY(i) * h);
  }
  g.translate(0, h / 2, 0); if (ry) g.rotateY(ry); g.translate(x, y, z);
  return g;
}
export function cyl(rt, rb, h, x = 0, y = 0, z = 0, seg = 12, open = false) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open); g.translate(x, y + h / 2, z); return g;
}
// 两点之间的圆杆
export function rod(a, b, r, seg = 6) {
  const d = new THREE.Vector3().subVectors(b, a), len = d.length();
  const g = new THREE.CylinderGeometry(r, r, len, seg, 1, true);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
  g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2); return g;
}
export function place(g, x, y, z, ry = 0) { if (ry) g.rotateY(ry); g.translate(x, y, z); return g; }

export class Batch {
  constructor() { this.m = new Map(); }
  add(mat, g) {
    if (g.index) g = g.toNonIndexed();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!this.m.has(mat)) this.m.set(mat, []); this.m.get(mat).push(g); return this;
  }
  build(parent, { cast = true, receive = true } = {}) {
    const out = [];
    for (const [mat, list] of this.m) {
      const mesh = new THREE.Mesh(mergeGeometries(list, false), mat); mesh.castShadow = cast; mesh.receiveShadow = receive; parent.add(mesh); out.push(mesh);
      for (const g of list) g.dispose();
    }
    this.m.clear(); return out;
  }
}
