const setPath = require('../helpers/set-path')
const Player = require('../models/player');
require('dotenv').config();

const handleError = (res, error) => {
    console.log(error);
    res.render('404', { title: 'Error' })
}

const getPlayer = (req, res) => {
    const title = 'Player'
    Player
        .findById(req.params.id)
        .then((player) => res.render(setPath('player'), { player, title, }))
        .catch((error) => handleError (req, error))
}

const editPlayer = (req, res) => {
    const { club, nickname, text, nationality, role } = req.body;
    const playerImage = `${req.file.path}`
    const { id, } = req.params;
    Player
        .findByIdAndUpdate(id, { club, nickname, text, playerImage, nationality, role, })
        .then((result) => res.redirect(`/players/${id}`))
        .catch((error) => handleError (req, error))
}

const editPlayerPage = (req, res) => {
    const title = 'Edit player card'
    Player
        .findById(req.params.id)
        .then((player) => res.render(setPath('edit-player'), { player, title }))
        .catch((error) => handleError (req, error))
}

const deletePlayer = (req, res) => {
    Player
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((error) => handleError (req, error))
}

const createPlayerPost = (req, res) => {
    const { club, text, nickname, nationality, role } = req.body;
    const playerImage = `${req.file.path}`
    const player = new Player({ club, nickname, text, playerImage, nationality, role });
    player
        .save({
            text,
            nickname,
            club,
            playerImage,
            nationality,
            role,
        })
        .then((result) => res.redirect('/players'))
        .catch((error) => handleError (req, error))
}

const getPlayers = (req, res) => {
    const title = 'Player list';
    Player
        .find()
        .sort({ createdAt: -1 })
        .then((players) => res.render(setPath('players'), { players, title }))
        .catch((error) => handleError (req, error))
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

const getAddPlayerPage = (req, res) => {
        const title = 'New player'
        res.render(setPath('add-player'), { title })
}

const getSquadPage = (req, res) => {
        const title = 'Squad'
        res.render(setPath('squad'), { title })
}

module.exports = {
    getPlayer,
    editPlayer,
    editPlayerPage,
    deletePlayer,
    createPlayerPost,
    getPlayers,
    getHomePage,
    getIndexPage,
    getAboutPage,
    getAddPlayerPage,
    getSquadPage,
};