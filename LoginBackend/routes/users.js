const express = require('express');
const router = express.Router();
const User = require('../models/user');



router.get("/users", function (req, res) {
    User.find({}, function (err, users) {
        res.send(users);
    });
});

router.post("/user/create", function (req, res) {
    User.create(req.body, function () {
        res.send();
    })
});


router.post("/user/delete/:id", function (req, res) {
    User.deleteOne({ _id: req.params.id }, function (err) {
        res.send();
    });
});

router.get("/user/get/:id", function (req, res) {
    User.findById(req.params.id, function (err, user) {
        res.send(user);
    });
});


router.post("/user/login", function (req, res) {
    User.findOne({ Email: req.body.Email }, function (err, user) {
        if (user) {
            if (user.password == req.body.password) {
                res.send(user.id);
            } else {
                res.status(400).send("Wrong email or password!");
            }
        } else {
            res.status(400).send("Wrong email or password!");
        }
    });
});


module.exports = router
