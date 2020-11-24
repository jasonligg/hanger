const express = require('express');
const path = require('path');
const { route } = require('./closet');
const router = express.Router()
const passport = require('passport')
// const fileController = require('..')

//auth login
router.get('/login', (req, res) => {
    //here is where we serve up our login page
    res.send('put something here later, he had res.render his login page')
})

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

//auth logout
router.get('/logout', (req, res) => {
    //this will be handled later with passport
    res.send('logging out')
})

//callback route for google to redirect to 

router.get('/google/redirect', (req,res) => {
    res.send('you reached the callback URI')
})

module.exports = router;