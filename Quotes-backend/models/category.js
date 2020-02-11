const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    categoryName: {
        type: String,
        required: true,
    },
    quotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quote"
    }]
});


module.exports = mongoose.model('Category', categorySchema)
