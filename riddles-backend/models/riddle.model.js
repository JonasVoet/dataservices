const mongoose = require('mongoose');

const riddlesSchema = new mongoose.Schema({
    riddleText: {
        type: String,
        required: true
    }, 
    answer: {
        type: String,
        required: true
    },
    riddleData: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Riddle', riddlesSchema);