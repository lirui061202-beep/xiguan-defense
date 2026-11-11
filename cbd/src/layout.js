// 场地尺寸（米）。x 向东，z 向南；花城广场沿南北中轴，北端是花城大道，南端是临江大道和珠江
// 2026-11-11：左右间距整体收窄（广场半宽 55→38，楼前空地 30→8 米），不再空旷
export const L = {
  PX: 38, PZ0: -218, PZ1: 200,            // 广场绿地范围
  SIDE_W: 6,                              // 人行道宽
  ROAD_C: 52, ROAD_H: 8, SIDE_OUT: 66,    // 珠江西路 / 珠江东路（中线、半宽、外侧人行道外沿）
  OUT_C: 208,                             // 外圈道路中线
  NR_C: -238, NR_H: 12,                   // 花城大道
  SR_C: 218, SR_H: 10,                    // 临江大道
  BANK: 262, RIVER_W: 520,                // 江岸与江面宽
  LAKE: { x: 0, z: 10, rx: 24, rz: 42, ring: 6.5 },
  PROM: 7.5,                              // 中轴步道半宽
  LAWN_X0: 7.5, LAWN_X1: 35.5,
  LAWN_Z: [[-178, -126], [-118, -66], [-58, 78], [86, 128], [136, 168]],
  CROSS: [-122, -62, 82, 132],
  BELT: { x: 20, hx: 12.5, z: -345, hz: 74 },   // 花城大道以北的中轴绿带
};

export const ellSd = (x, z, c = L.LAKE, grow = 0) => {
  const rx = c.rx + grow, rz = c.rz + grow, dx = x - c.x, dz = z - c.z;
  const k = Math.hypot(dx / rx, dz / rz), g = Math.hypot(dx / (rx * rx), dz / (rz * rz)) / Math.max(k, 1e-4);
  return (k - 1) / Math.max(g, 1e-4);
};
const rbox = (px, pz, cx, cz, hx, hz, r) => { const qx = Math.abs(px - cx) - hx + r, qz = Math.abs(pz - cz) - hz + r; return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - r; };
// 草坪的有向距离（负 = 在草坪里），和地面着色器里的写法保持一致
export const lawnSd = (x, z) => {
  const ax = Math.abs(x), cx = (L.LAWN_X0 + L.LAWN_X1) / 2, hx = (L.LAWN_X1 - L.LAWN_X0) / 2; let d = 1e3;
  for (const [a, b] of L.LAWN_Z) d = Math.min(d, rbox(ax, z, cx, (a + b) / 2, hx, (b - a) / 2, 4));
  d = Math.max(d, -ellSd(x, z, L.LAKE, L.LAKE.ring));
  return Math.min(d, rbox(ax, z, L.BELT.x, L.BELT.z, L.BELT.hx, L.BELT.hz, 5));
};
