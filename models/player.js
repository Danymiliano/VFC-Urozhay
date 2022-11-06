const { fileLoader } = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config()
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    playerImage: {
        type: String,
    },
    nationality: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;