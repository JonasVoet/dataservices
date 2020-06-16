require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Sessions
const session = require("express-session");
const TWO_HOURS = 1000 * 60 * 60 * 2;
// Store session in mongo
const MongoStore = require('connect-mongo')(session);

const {
    PORT = 5000
    ,
    NODE_ENV = "delevopment",
    SESS_NAME = "sid",
    SESS_SECRET = "ssh!quiet,it'asecret!"
    // SESS_LIFETIME = TWO_HOURS,
  } = process.env;
  const IN_PROD = NODE_ENV === "production";

mongoose.connect('mongodb+srv://Jonas7598:jomani123@cluster0-jf5pc.mongodb.net/riddle?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database Riddles"));

app.use(cors({credentials:true, origin:"https://6bcff3d5f366.ngrok.io"}));
app.use(express.json());

app.set("trust proxy", 1);

// Sessions/ cookies
app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: db}),
    secret: SESS_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: "auto",
      sameSite: "none"
    },
  })
);

// Check if authorized, if route contains the word admin
app.use('*/admin', (req, res, next) => {
  
  // if no session - give error message
  if (!req.session.userId) {

      return res.status(401).json({message: 'You do not have access - you must be logged in'})
  }

  // if logged in abd there is a session - continue.. Next!
  next();
});

// Riddles
const riddlesRouter = require('./routes/riddles')
app.use('/riddles', riddlesRouter);

// Users
const usersRouter = require('./routes/users')
app.use('/admin/users', usersRouter);

// Auth
const authRoutes = require('./routes/auth.routes')
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));