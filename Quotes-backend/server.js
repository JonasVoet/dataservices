require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());

const quotesRouter = require('./routes/quotes')
app.use('/quotes', quotesRouter);

const categories = require('./routes/categories')
app.use('/categories', categories);

app.listen(3000, () => console.log('Server Started'));