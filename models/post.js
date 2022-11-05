const { fileLoader } = require('ejs');
const mongoose = require('mongoose');
require('dotenv').config()
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    playerImage: {
        type: String,
        required: true,
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

const PlayerPost = mongoose.model('Player', playerSchema);

module.exports = PlayerPost;