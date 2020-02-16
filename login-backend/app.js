var express = require('express');
var cors = require("cors");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var app = express();
let port = 3001;
if (process.env.NODE_ENV === 'prod') {
    port = process.env.port || process.env.PORT || 1337;
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const uri = "mongodb+srv://admin:admin@cluster0-icg1q.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { dbName: "login" });

app.get('/', (req, res) => res.send('Hello World!'));

//Bruger Start

let UserSchema = new Schema({
    Name: String,
    Email: String,
    Password: String,
    Aktiv: Boolean,
});
let UserModel = mongoose.model("User", UserSchema, "User");

app.get("/user", function (req, res) {
    UserModel.find({}, function (err, user) {
        res.send(user);
    });
});

app.post("/user/create", function (req, res) {
    UserModel.create(req.body, function () {
        res.send();
    })
});

app.post("/user/delete/:id", function (req, res) {
    UserModel.deleteOne({ _id: req.params.id }, function (err) {
        res.send();
    });
});

app.get("/user/get/:id", function (req, res) {
    UserModel.findById(req.params.id, function (err, user) {
        res.send(user);
    });
});

app.post("/user/edit/:id", function (req, res) {
    UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, user) {
        res.send();
    });
});

app.post("/user/login", function (req, res) {
    UserModel.findOne({ Email: req.body.Email }, function (err, user) {
        if (user) {
            if (user.Password == req.body.Password) {
                res.send(user.id);
            } else {
                res.status(400).send("Wrong email or password!");
            }
        } else {
            res.status(400).send("Wrong email or password!");
        }
    });
});


//Bruger End



app.listen(port, () => console.log(`Example app listening on port ${port}!`))