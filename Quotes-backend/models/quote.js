const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    quoteText: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    quoteData: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
})

module.exports = mongoose.model('Quotes', quotesSchema)