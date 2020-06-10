const mongoose = require('mongoose');
let bcrypt = require('bcrypt');

// const SALT_WORK_FACTOR = 5;

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "John Doe"
    }, 
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true, // removes spacing
        lowercase: true, // Saves all in lowercase letters
        index: { unique: true } // Unique emails
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [3, 'Password need to be longer']
    },
    userData: {
        type: Date,
        required: true,
        default: Date.now
    }
});

usersSchema.pre('save', async function (next) {
    const user = this;
    // hvis bruger er rettet men password ikke ændret så spring dette over ... next() betyder forlad denne middleware
    if (!user.isModified('password')) return next();
    //Lav nye password
    const hashedPassword = await bcrypt.hash(user.password, 10)
    //Erstat password med det krypterede password
    user.password = hashedPassword
    next()
});

module.exports = mongoose.model('User', usersSchema);