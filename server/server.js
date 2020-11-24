const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const closetRouter = require('../routes/closet.js');
const authRoutes = require('../routes/oauth-routes.js');
const passportSetup = require('../config/passport-setup.js');
let app = express();
const keys = require('../config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
//parse request body
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
//   });
// }

app.use('/auth', authRoutes);
app.use('/api', closetRouter);

/**
 * configire express global error handler
 */
//catch all for errors//
app.use('*', (req, res, next) => {
  return res.status(404).send('invalid end point');
});

app.use(function (err, req, res, next) {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('Listening on port 3000...'));

module.exports = app;
