require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;


mongoose.connect("mongodb+srv://admin:admin@cluster0-icg1q.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users')
app.use('/users', usersRouter);



app.listen(PORT, () => console.log(`Server started on ${PORT}`));