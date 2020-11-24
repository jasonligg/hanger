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
}, async (accessToken, refreshToken,profile,done) => {
    //passport callback function
    console.log('passport callback function fired')
    // console.log(profile.name.givenName,profile.name.familyName,profile.emails[0].value, profile.photos[0].value)
    const {givenName,familyName} = profile.name
    const emails = profile.emails[0].value
    const profileImage = profile.photos[0].value
    console.log(givenName, familyName, emails, profileImage)
    const queryStr = 'INSERT INTO Users (first_name1, last_name1, username, email, profile_Image, display_name_1) VALUES ($1, $2, $3, $4, $5, $6)';
    const queryParams = [givenName, familyName, emails, emails, profileImage, givenName];
    try {
    await db.query(queryStr,queryParams)
    } catch (error) {
        return 'There\'s an error, fool'
    }
})
)