const express = require('../node_modules/express');
const router = express.Router();
const Users = require('../models/user.model');

// router.use(
//     session({
//       name: SESS_NAME,
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

  router.get("/:id", (req, res) => {
    const { userId } = req.session;
    
    res.render('index', {userId : userId})
  });

  router.get("/home", redirectLogin, (req, res) => {
    const user = users.find((user) => user.id === req.session.userId); 
    res.render('./pages/home', {user: user});
  });

  router.get("/login", redirectHome, (req, res) => {
 

    res.render('./pages/login')
  });
  
  
  router.get("/register", redirectHome, (req, res) => {
   
  
    res.render('./pages/register');
  });
  
  
  router.post("/login", redirectHome, (req, res) => {
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
  
  
  router.post("/register", redirectHome, (req, res) => {
    const { name, email, password} = req.body;
    if (name && email && password) {
      //TODO: validation
      const exists = users.some((user) => user.email === email);
      if (!exists) {
        const user = {
          id: users.length + 1,
          name,
          email,
          password
        };
        users.push(user);
        req.session.userId = user.id;
        return res.redirect("/home");
      }
    }
    res.redirect("/register");
  });
  
  
  router.post("/logout", redirectLogin, (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect("/home");
      }
      res.clearCookie(SESS_NAME);
      res.redirect("/login");
    });
  });





module.exports = router;