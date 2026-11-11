// 零依赖静态服务器：node server.js
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, port = process.env.PORT || 5199;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };
http.createServer((req, res) => {
  if (req.method === 'POST' && req.url.startsWith('/__shot')) { // 自测截图落盘（仅本地调试用）
    const name = (new URL(req.url, 'http://x').searchParams.get('name') || 'shot').replace(/[^a-zA-Z0-9_-]/g, ''); let b = '';
    req.on('data', (d) => { b += d; }); req.on('end', () => { fs.mkdirSync(path.join(root, '_shots'), { recursive: true }); fs.writeFileSync(path.join(root, '_shots', name + '.jpg'), Buffer.from(b.split(',')[1], 'base64')); res.writeHead(200); res.end('ok'); });
    return;
  }
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(root, path.normalize(p));
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); res.end(d);
  });
}).listen(port, () => console.log('http://localhost:' + port));
