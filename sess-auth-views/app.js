const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const TWO_HOURS = 1000 * 60 * 60 * 2;
const {
  PORT = 5000
  ,
  NODE_ENV = "delevopment",
  SESS_NAME = "sid",
  SESS_SECRET = "ssh!quiet,it'asecret!",
  SESS_LIFETIME = TWO_HOURS,
} = process.env;
const IN_PROD = NODE_ENV === "production";
const users = [
  { id: 1, name: "Alex", email: "alex@gmail.com", password: "secret", age: "100" },
  { id: 2, name: "John", email: "John@gmail.com", password: "secret" },
  { id: 3, name: "Ida", email: "Ida@gmail.com", password: "secret" },
];
const app = express();



// React-views
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: IN_PROD,
    },
  })
);
const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};
const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    res.redirect("/home");
  } else {
    next();
  }
};


app.get("/", (req, res) => {
  const { userId } = req.session;
  
  res.render('index', {userId : userId, welcomeTitle: "siden" })


});


app.get("/home", redirectLogin, (req, res) => {
  const user = users.find((user) => user.id === req.session.userId); 
  

  res.render('./pages/home', {user: user});
});


app.get("/login", redirectHome, (req, res) => {
 

  res.render('./pages/login')
});


app.get("/register", redirectHome, (req, res) => {
 

  res.render('./pages/register');
});


app.post("/login", redirectHome, (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      req.session.userId = user.id;
      return res.redirect("/home");
    }
  }
  res.redirect("/login");
});


app.post("/register", redirectHome, (req, res) => {
  const { name, email, password, age } = req.body;
  if (name && email && password && age) {
    //TODO: validation
    const exists = users.some((user) => user.email === email);
    if (!exists) {
      const user = {
        id: users.length + 1,
        name,
        email,
        password,
        age
      };
      users.push(user);
      req.session.userId = user.id;
      return res.redirect("/home");
    }
  }
  res.redirect("/register");
});


app.post("/logout", redirectLogin, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect("/home");
    }
    res.clearCookie(SESS_NAME);
    res.redirect("/login");
  });
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));