const express = require('express');
const upload = require('../js/upload')
const { getPlayer } = require('../controller/player-controller')
const { editPlayer } = require('../controller/player-controller')
const { editPlayerPage } = require('../controller/player-controller')
const { deletePlayer } = require('../controller/player-controller')
const { createPlayerPost } = require('../controller/player-controller')
const { getPlayers } = require('../controller/player-controller')
const { getHomePage } = require('../controller/player-controller')
const { getIndexPage } = require('../controller/player-controller')
const { getAboutPage } = require('../controller/player-controller')
const { getAddPlayerPage } = require('../controller/player-controller')
const { getSquadPage } = require('../controller/player-controller')

const router = express.Router();

router.get('/', getHomePage);

router.get('/index', getIndexPage)

router.get('/about', getAboutPage)

router.get('/add-player', getAddPlayerPage)

router.get('/squad', getSquadPage)

router.get('/players/:id', upload.single('playerImage'), getPlayer);

router.put('/edit/:id', editPlayer);

router.get('/edit/:id', editPlayerPage);

router.delete('/players/:id', deletePlayer);

router.post('/add-player', upload.single('playerImage'), createPlayerPost);

router.get('/players', getPlayers);

module.exports = router;