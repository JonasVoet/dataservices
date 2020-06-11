require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://Jonas7598:jomani123@cluster0-jf5pc.mongodb.net/riddle?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database Riddles"));

app.use(cors());
app.use(express.json());


// Riddles
const riddlesRouter = require('./routes/riddles')
app.use('/riddles', riddlesRouter);

// Users
const usersRouter = require('./routes/users')
app.use('/users', usersRouter);

// Auth
const authRoutes = require('./routes/auth.routes')
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

