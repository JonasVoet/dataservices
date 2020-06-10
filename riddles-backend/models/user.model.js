const mongoose = require('mongoose');
// let bcrypt = require('bcrypt');

// const SALT

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "John Doe"
    }, 
    email: {
        type: String,
        required: [true, 'Email is requrired'],
        trim: true, // removes spacing
        lowercase: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: [true, 'Password is requrired'],
        minlength: [3, 'Password need to be longer']
    },
    userData: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', usersSchema);