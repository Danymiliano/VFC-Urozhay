const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
require('dotenv').config()
const methodOverride = require('method-override')
const setPath = require('./helpers/set-path')
const postRoutes = require('./routes/post-routes')
const multer = require('multer');
const moment = require('moment');

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT;
const HOST = 'localhost';
const db = process.env.MONGO_URI;

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

app.use((req, res) => {
    const title = '404'
    res.status(404);
    res.render(setPath('404'), { title });
})