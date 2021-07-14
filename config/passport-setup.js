const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const db = require('../models/closetModels');
const FacebookStrategy = require('passport-facebook').Strategy;

//serialize user's oauth_id for our cookie
passport.serializeUser((user, done) => {
  done(null, user.rows[0]._id);
});

passport.deserializeUser(async (id, done) => {
  // we need to pass in the user we're making the cookie for in done, so we will grab that user (again) via their oath_id in our query string
  const userQuery = 'SELECT * FROM users WHERE oauth_id = $1';
  const queryParam = [id];
  //query db to find user based on their oath_id
  const user = await db.query(userQuery, queryParam);
  //pass user into done
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      //options for the strategy
      //need to add a redirectURL, found in our google developer console
      callbackURL: '/auth/google/redirect',
      //need a client ID and a client secret
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      //passport callback function
      // check if user exists in our db first
      try {
        const findUserStr = `SELECT EXISTS (SELECT * FROM USERS WHERE oauth_id=$1)`;
        //finduser params
        const authID = profile.id;
        const query2 = [authID];

        //insert string params
        const { givenName, familyName } = profile.name;
        const emails = profile.emails[0].value;
        const profileImage = profile.photos[0].value;
        const insertUser = `INSERT INTO USERS (first_name1, last_name1, username, email, profile_Image, display_name_1, oauth_id) VALUES
          ($1, $2, $3, $4, $5, $6, $7)`;
        const findUserQuery = [
          givenName,
          familyName,
          emails,
          emails,
          profileImage,
          givenName,
          authID,
        ];
        //check if user exists in db
        const response = await db.query(findUserStr, query2);
        //if user does not exists, quuery the db again to add the user
        if (!response.rows[0].exists) await db.query(insertUser, findUserQuery);
        //otherwise query the database to find the ID of the newly added user on line 37
        const userQuery = 'SELECT * FROM USERS WHERE oauth_id = $1';
        //assign a var the value of findind the newly added or already added user in table and assign it as second arg in done()
        const user = await db.query(userQuery, query2);
        done(null, user);
      } catch (error) {
        console.log('we got here somehow');
      }
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.AppSecret,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        const findUserStr = `SELECT EXISTS (SELECT * FROM USERS WHERE oauth_id=$1)`;
        //finduser params
        const authID = profile.id;
        const query2 = [authID];

        //insert string params
        const displayName = profile.displayName;
        let first_Name = displayName.split(' ')[0];
        let last_Name = displayName.split(' ')[1];

        // const profileImage = profile.photos[0].value;
        const insertUser = `INSERT INTO USERS (first_name1, last_name1, username, email, profile_Image, display_name_1, oauth_id) VALUES
          ($1, $2, $3, 'N/A', 'N/A', $3, $4)`;

        const findUserQuery = [first_Name, last_Name, displayName, authID];
        //check if user exists in db
        const response = await db.query(findUserStr, query2);
        //if user does not exists, quuery the db again to add the user
        if (!response.rows[0].exists) await db.query(insertUser, findUserQuery);
        //otherwise query the database to find the ID of the newly added user on line 37
        const userQuery = 'SELECT * FROM USERS WHERE oauth_id = $1';
        //assign a var the value of findind the newly added or already added user in table and assign it as second arg in done()
        const user = await db.query(userQuery, query2);
        done(null, user);
      } catch (error) {
        console.log('we got here somehow');
      }
    }
  )
);
