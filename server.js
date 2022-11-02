const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const setPath = require('./helpers/set-path')
const postRoutes = require('./routes/post-routes')
const token = require('./token/token');

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
const db = `mongodb+srv://Danymiliano:${token}@VFC-Urozhay.5tl0qwi.mongodb.net/posts?retryWrites=true&w=majority`;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Установили соединение с базой данных'))
    .catch((error) => {
    console.log(error);
})

app.listen(PORT, HOST, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Прослушиваемый порт: ${PORT}`);
    }
})

app.use(express.static('./'));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'));

app.use(postRoutes);

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

app.get('/add-post', (req, res) => {
    const title = 'Add new post'
    res.render(setPath('add-post'), { title })
})

app.get('/squad', (req, res) => {
    const title = 'Squad'
    res.render(setPath('squad'), { title })
})

app.use((req, res) => {
    const title = '404'
    res.status(404);
    res.render(setPath('404'), { title });
})