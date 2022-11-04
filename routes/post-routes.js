const express = require('express');
const upload = require('../js/upload')
const { getPost } = require('../controller/post-controller')
const { editPost } = require('../controller/post-controller')
const { getEditPost } = require('../controller/post-controller')
const { deletePost } = require('../controller/post-controller')
const { createPlayerPost } = require('../controller/post-controller')
const { getPosts } = require('../controller/post-controller')
const { getHomePage } = require('../controller/post-controller')
const { getIndexPage } = require('../controller/post-controller')
const { getAboutPage } = require('../controller/post-controller')
const { getAddPostPage } = require('../controller/post-controller')
const { getSquadPage } = require('../controller/post-controller')

const router = express.Router();

router.get('/', getHomePage);

router.get('/index', getIndexPage)

router.get('/about', getAboutPage)

router.get('/add-post', getAddPostPage)

router.get('/squad', getSquadPage)

router.get('/posts/:id', getPost);

router.put('/edit/:id', editPost);

router.get('/edit/:id', getEditPost);

router.delete('/posts/:id', deletePost);

router.post('/add-post', upload.single('playerImage'), createPlayerPost);

router.get('/posts', getPosts);

module.exports = router;