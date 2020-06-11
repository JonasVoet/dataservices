const express = require('express');
const router = express.Router();
const session = require("express-session");
// const TWO_HOURS = 1000 * 60 * 60 * 2;
const User = require('../models/user.model');

// router.use(
//     session({
//       name: SESS_NAME,
//       store: new FileStore(fileStoreOptions),
//       resave: false,
//       saveUninitialized: false,
//       secret: SESS_SECRET,
//       cookie: {
//         maxAge: SESS_LIFETIME,
//         sameSite: true,
//         secure: IN_PROD,
//       },
//     })
//   );

// BASE ROUTE: /auth
// /auth/Login and /auth/Logout

// LOGIN (Add session if match)
// GET http://localhost:3000/auth/Login

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    if (email && password) {
        const user = await User.findOne({email: email});
        user.comparePassword(password, function (err, ismatch) {

        });
        if (user) {
            req.session.userId = user.id;
        }
    }
});

// LOGOUT (destroy session)
// GET http://localhost:3000/auth/logout

router.get('/logout', async (req, res) => {

});

// Logged in? True or false
// GET http://localhost:3000/auth/loggedin

router.get('/loggedin', async (req, res) => {

});

module.exports = router;