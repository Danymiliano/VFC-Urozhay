const express = require('express');
const morgan = require('morgan')
const path = require('path');
const mongoose = require('mongoose');
const Post = require('./models/post');
const token = require('./token/token')

const app = express();

// Шаблонизатор ejs (работает как мидлвар также)

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
const db = `mongodb+srv://Danymiliano:${token}@VFC-Urozhay.5tl0qwi.mongodb.net/news?retryWrites=true&w=majority`;

async function connectToDatabase() {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
        console.log('Успешно законнектились к базе данных');
    } catch (error) {
        console.log(error);
    }
}
connectToDatabase()

// const post = {
//     date: Date(),
//     title,
//     author,
//     text,
// }
// res.render(setPath('findus'), { post, title })

// Функция установки путей к файлам

const setPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`)

app.listen(PORT, HOST, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Прослушиваемый порт: ${PORT}`);
    }
})

// Мидлвар с добавлением исключения для всего в папке

app.use(express.static('./'));

// Мидлвар с логгером

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Мидлвар с парсингом

app.use(express.urlencoded({ extended: false }))

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

// По методу post запрашиваем данные и 
// отправляем данные с запроса обратно

app.post('/findus', (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text, });
    let result;
    async function getNewPost () {
        try {
            await post.save()
            await res.send(result)
        } catch (error) {
            console.log(error);
            res.render(setPath('404'), { title: 'Error'})
        }
    }
    getNewPost()
    res.render(setPath('findus'), { title, post, result })
})

app.get('/findus/:id', (req, res) => {
    res.render(setPath('post'))
})

app.get('/findus', (req, res) => {
    const title = 'Find us'
    const post = {
        id: '1',
        text: 'Тут какой-то текст',
        title: 'Заголовок dddddd',
        date: '05.09.2022',
        author: 'Максим',
    }
    res.render(setPath('findus'), { title, post })
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