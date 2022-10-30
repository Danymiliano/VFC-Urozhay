const express = require('express');
const morgan = require('morgan')
const path = require('path');

const app = express();

// Добавляем шаблонизатор ejs

app.set('view engine', 'ejs');

const PORT = 3000;
const HOST = 'localhost';

// Функция для установки путей к файлам

const setPath = (page) => path.resolve(__dirname, 'ejs', `${page}.ejs`)

app.listen(PORT, HOST, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Listening port: ${PORT}`);
    }
})

// Мидлвар с добавлением исключения для всего в папке

app.use(express.static('./'))

// Мидлвар с логгером

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Роутинг страниц

app.get('/', (req, res) => {
    const title = 'Home'
    res.render(setPath('index'), { title })
})

app.get('/index', (req, res) => {
    const title = 'Home'
    res.render(setPath('index'), { title })
})

app.get('/about', (req, res) => {
    const title = 'About'
    res.render(setPath('about'), { title })
})

app.get('/findus', (req, res) => {
    const title = 'Findus'
    res.render(setPath('findus'), { title })
});

app.get('/registration', (req, res) => {
    const title = 'Registration'
    res.render(setPath('registration'), { title })
})

app.get('/squad', (req, res) => {
    const title = 'Squad'
    res.render(setPath('squad'), { title })
})

// Мидлвар с отловом ошибок в адресе

app.use((req, res) => {
    const title = '404'
    res.status(404);
    res.render(setPath('404'), { title });
})