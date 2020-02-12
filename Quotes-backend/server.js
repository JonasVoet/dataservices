require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;



mongoose.connect("mongodb+srv://Jona7598:jomani123@cluster0-wjxqk.mongodb.net/test?retryWrites=true&w=majority", {
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

app.listen(PORT, () => console.log(`Server started on ${PORT}`));