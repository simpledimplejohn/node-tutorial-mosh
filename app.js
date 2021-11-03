const http = require('http');
const { endianness } = require('os');

// this server is also an event emitter
// has .add .on .emit
const server = http.createServer((req, res) => {
  if(req.url ==='/') {
    res.write('hello world');
    res.end();
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1,2,3]))
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log('new connection...');
});

server.listen(3000);

console.log('Listening on port: 3000...');
