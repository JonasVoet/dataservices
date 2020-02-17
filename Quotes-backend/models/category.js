const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    categoryName: {
        type: String,
        required: true,
    },
    quotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quotes"
    }]
});


module.exports = mongoose.model('Category', categorySchema)
