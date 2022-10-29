const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = 'localhost';

// Создание локального сервера
const server = http.createServer((req, res) => {
    console.log('Server request');

    res.setHeader('Content-Type', 'text/html');

    const setPath = (page) => {
        path.resolve(__dirname, 'pages', `${page}.html`);
    }

    let basePath = '';

    switch (req.url) {
        case '/':
            basePath = setPath('index');
            break;
        case '/index':
            basePath = setPath('index');
            break;
        case '/about':
            basePath = setPath('about');
            break;
        case '/squad':
            basePath = setPath('squad');
            break;
        case '/findus':
            basePath = setPath('findus');
            break;
        case '/registration':
            basePath = setPath('registration');
        default:
            basePath = setPath('404');
            break;
    }

    fs.readFile(basePath, (error, data) => {
        if (error) {
            console.log(error);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })

});

// Прослушивание локального сервера
server.listen(PORT, HOST, () => {
    try {
        console.log(`Сервер успешно завёлся по адресу: ${HOST}:${PORT}`);
    } catch (error) {
        console.log(error);
    }
})














// fs.readFile('./pages/index.html', (error, data) => {
//     if (error) {
//         console.log(error);
//         res.end()
//     } else {
//         res.write(data);
//         res.end();
//     }
// })