const http = require('http');

const server = http.createServer((req, res) => {
res.write('Hello from NodeJS Server!');
res.end();
});

server.listen(3000, () => {
console.log('NodeJS Server running on http://localhost:3000');
}); 