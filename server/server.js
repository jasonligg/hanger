const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const fileController = require('../fileController.js');
const closetRouter = require('../routes/closet.js');
const authRoutes = require('../routes/oauth-routes.js')
const passportSetup = require('../config/passport-setup.js')
let app = express();

//parse request body//
app.use(bodyParser.json());


app.use('/auth' , authRoutes)
app.use('/api', closetRouter);

/**
 * configire express global error handler
 */
//catch all for errors//
app.use('*', (req,res,next) => {
  return res.status(404).send('invalid end point')
})


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


app.listen(3000, () => console.log('Listening on port 3000...'))

module.exports = app; 