const express = require('express');
const path = require('path');
const { route } = require('./closet');
const router = express.Router();
const passport = require('passport');
// const fileController = require('..')

//auth login
router.get('/login', (req, res) => {
  //here is where we serve up our login page
  res.send('');
});

//auth with google
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
  })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
  })
);

//auth with google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

//auth logout
router.get('/logout', (req, res) => {
  //this will be handled later with passport
  req.logout();

  res.redirect('/');
});

//callback route for google to redirect to

// this will be used to check if a user is logged in so they can see their profile, or if they should be sent to the login page
// const authCheck = (req,res,next) => {
// if(!req.user){
//     //if user is not logged in
//     res.redirect('/auth/login')
// } else {
//     next()
// }
// }
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user)
  console.log(req.user.rows[0]._id);
  //sending our OAuth user data
  const user = req.user.rows[0]._id;
  // res.redirect(`/api/${user}`);
  res.json(user);
  //router needs to route to where we want to render
  //if the route is to a username as the endpoint, write a function that renders an html page with everything for their closet
  //make another get request to get the user information that is stored in the database
  //as far as react router -- the only private route we need is instead of sending it to /closet, send it to /closet/joeschmoe and /closet would need some js that would populate /:name, which can be done as a route in middleware
  //render the page with the data you get back from /:name
  //with that :name absolute path, you can send that in react router, but in the frontend you would have to create that path
  //you could create it if you have a function that runs when you have a path to go to
});

module.exports = router;
