const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Estamos listos para arrancar\n');
}).listen(port, '127.0.0.1', () => console.log(`listening on ${port}`));
