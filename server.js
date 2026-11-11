// 零依赖静态服务器：node server.js
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, port = process.env.PORT || 5199;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const body = (req, cb) => { const chunks = []; req.on('data', (d) => chunks.push(d)); req.on('end', () => cb(Buffer.concat(chunks))); };
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (req.method === 'POST' && url.pathname === '/__save') { // 素材预处理落盘（仅本地用，只允许写 assets/web 下的 webp）
    const rel = (url.searchParams.get('path') || '').split('\\').join('/');
    if (!/^(cbd\/)?assets\/web\/[\w/-]+\.webp$/.test(rel) || rel.includes('..')) { res.writeHead(400); return res.end('bad path'); }
    return body(req, (buf) => { const f = path.join(root, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, buf); res.writeHead(200); res.end('ok'); });
  }
  if (req.method === 'POST' && url.pathname === '/__shot') { // 自测截图落盘（仅本地调试用）
    const name = (url.searchParams.get('name') || 'shot').replace(/[^a-zA-Z0-9_-]/g, '');
    return body(req, (buf) => { fs.mkdirSync(path.join(root, '_shots'), { recursive: true }); fs.writeFileSync(path.join(root, '_shots', name + '.jpg'), Buffer.from(buf.toString().split(',')[1], 'base64')); res.writeHead(200); res.end('ok'); });
  }
  let p = decodeURIComponent(url.pathname); if (p.endsWith('/')) p += 'index.html';
  const f = path.join(root, path.normalize(p));
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(d);
  });
}).listen(port, () => console.log('http://localhost:' + port));
