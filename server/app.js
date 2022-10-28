const http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
    })
    res.end('Hello Node JS')
})

const PORT = 8000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: ${HOST}:${PORT}`);
});