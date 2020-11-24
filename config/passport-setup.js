const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const db = require('../models/closetModels')


passport.use(
    new GoogleStrategy({
    //options for the strategy
    //need to add a redirectURL, found in our google developer console
    callbackURL: '/auth/google/redirect',
    //need a client ID and a client secret
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken,profile,done) => {
    //passport callback function
    console.log('passport callback function fired')
    // console.log(profile.name.givenName,profile.name.familyName,profile.emails[0].value, profile.photos[0].value)
    const {givenName,familyName} = profile.name
    const emails = profile.emails[0].value
    const profileImage = profile.photos[0].value
    console.log(givenName, familyName, emails, profileImage)
    const queryStr = 'INSERT INTO Users (first_name1, last_name1, email, profile_Image) VALUES ($1, $2, $3, $4)';
    const queryParams = [givenName, familyName, emails, profileImage];
    db.query(queryStr,queryParams)
})
)