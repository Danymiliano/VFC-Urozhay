const setPath = require('../helpers/set-path')
const Post = require('../models/post');

const getPost = (req, res) => {
    const title = 'Post'
    Post
        .findById(req.params.id)
        .then((post) => res.render(setPath('post'), { post, title }))
        .catch((error) => {
        console.log(error);
        res.render('404', { title: 'Error' })
    })
}

const editPost = (req, res) => {
    const { title, author, text } = req.body;
    const { id, } = req.params;
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then((result) => res.redirect(`/posts/${id}`))
        .catch((error) => {
        console.log(error);
        res.render('404', { title: 'Error' })
    })
}

const getEditPost = (req, res) => {
    const title = 'Edit Post'
    Post
        .findById(req.params.id)
        .then((post) => res.render(setPath('edit-post'), { post, title }))
        .catch((error) => {
        console.log(error);
        res.render('404', { title: 'Error' })
    })
}

const deletePost = (req, res) => {
    const title = 'Post'
    Post
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => {
        console.log(error);
        res.render('404', { title: 'Error' })
    })
}

const addPost = (req, res) => {
    const { title, text, author } = req.body;
    const post = new Post({ title, author, text });
    post
        .save()
        .then((result) => res.redirect('/posts'))
        .catch((error) => {
        console.log(error);
        res.render(setPath('404'), { title: 'Error' })
    })
}

const getPosts = (req, res) => {
    const title = 'Posts';
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts) => res.render(setPath('posts'), { posts, title }))
        .catch((error) => {
        console.log(error);
        res.render('404', { title: 'Error' })
    })
}

const getHomePage = (req, res) => {
        const title = 'Home'
        res.render(setPath('index'), { title })
}

const getIndexPage = (req, res) => {
        const title = 'Home'
        res.render(setPath('index'), { title })
}

const getAboutPage = (req, res) => {
        const title = 'About'
        res.render(setPath('about'), { title })
}

const getAddPostPage = (req, res) => {
        const title = 'Add new post'
        res.render(setPath('add-post'), { title })
}

const getSquadPage = (req, res) => {
        const title = 'Squad'
        res.render(setPath('squad'), { title })
}

module.exports = {
    getPost,
    editPost,
    getEditPost,
    deletePost,
    addPost,
    getPosts,
    getHomePage,
    getIndexPage,
    getAboutPage,
    getAddPostPage,
    getSquadPage,
};