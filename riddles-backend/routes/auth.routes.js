const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


// BASE ROUTE: /auth
// /auth/Login and /auth/Logout

// LOGIN (Add session if match)
// GET http://localhost:3000/auth/Login

router.post('/login', async (req, res) => {
    const { email, password } = req.body 
    const user = await User.findOne({ email : email });
    if (!user) {
        return res.status(404).json({ message: "Email not found" });
      };
   user.comparePassword(password, function (err, isMatch) {
       if (err) throw err;
       console.log('password: ', isMatch)
       if (isMatch) {
           req.session.userId = user._id;
           res.json({name: user.name, userID: user._id});
       } else {
           res.status(401).clearCookie(process.env.SESSION_NAME).json({message: "fejl"})
       }
   })
})

// LOGOUT (destroy session)
// GET http://localhost:3000/auth/logout

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(404).json({message: "Logout failed - try again"})
        }
        res.clearCookie(process.env.SESSION_NAME)
        res.json({message: 'You are now logged out, and cookie deleted'})
    });
});

// Logged in? True or false
// GET http://localhost:3000/auth/loggedin

router.get('/loggedin', async (req, res) => {
    // Save userId in cookie. If logged in
    if (req.session.userId) {
        // if logged in
        return res.status(200).json({message: 'Login still active'}) // route
    
    } else {
        // if there is no login/session
        return res.status(401).json({message: 'Login does not exist or expired'})

    }

});

module.exports = router;