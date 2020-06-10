const express = require('../node_modules/express');
const router = express.Router();
const User = require('../models/user.model');


// GET ALL
router.get('/admin', async (req, res) => {

  // console.log('GET ALL');

  try {
    const user = await User.find();
    res.json(user);
  
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});


// GET USER BY ID
router.get('/admin/:id', getUser, async (req, res) => {
  res.json(res.user);

});



// CREATING ONE
router.post('/admin', async (req, res) => {

  console.log(req.body);

  try {
    let user = await User.findOne({email: req.body.email})
   

    if (user) {
      console.log('There has been an error making your account.')
      return res.status(401).json({message: 'There has been an error creating your account'})
    
    } else {

     user = new User(req.body);
      const newUser = await user.save();
      res.status(201).json({message: 'New user is created', newUser: newUser});

    }
  } catch (error) {
    res.status(400).json({message: "An error occurred" + error});
  }
});



// DELETE
router.delete('/admin/:id', getUser, async (req, res) => {
  // console.log('DELETE');

  try {
    
    await res.user.remove();
    res.status(200).json({message: 'User is now deleted'})
  
  } catch {
    res.status(500).json({message: 'User cant be deleted - An error occurred'})
  } 
});



// Updating One
router.put('/admin/:id', getUser, async (req, res) => {

  // console.log("PUT");

  try {
    res.user.name = req.body.name;
    res.user.email = req.body.email;
    res.user.password = req.body.password;

    await res.user.save();
    res.status(200).json({message: 'User is not updated', updatedUser: res.user});
  
  } catch (error) {
    res.status(400).json({message: 'User cant be updated - An error occurred'});

  }
});


// MIDDLEWARE
// FIND BY ID

async function getUser(req, res, next) {
  console.log('FIND BY ID', req.params.id);
  let user;

  try {
    user = await User.findById(req.params.id);

    if (user == null) {
      return res.status(400).json({message: 'No user with that ID'});
    }

  } catch (error) {

    console.log(error);
    return res.status(500).json({message: error.message});
  }

  res.user = user; // Put the found user in the response
  next();
}

module.exports = router;