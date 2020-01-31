const mongoose = require('mongoose')

const jokesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true

    },
    jokeText: {
        type: String,
        required: true

    },

    jokeDate: {
        type: Date,
        required: true,
        default: Date.now

    },




})

module.exports = mongoose.model('Jokes', jokesSchema)