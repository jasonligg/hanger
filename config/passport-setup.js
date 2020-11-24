const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
    //options for the strategy
    //need to add a redirectURL, found in our google developer console
    callbackURL: '/auth/google/redirect',
    //need a client ID and a client secret
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, () => {
    //passport callback function
    console.log('passport callback function fired')
})
)