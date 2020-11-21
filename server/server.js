const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const fileController = require('../fileController.js');
const closetRouter = require('../routes/closet.js');
let app = express();

//parse request body//
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handle requests for static files
//uncomment and correct below when we know which folder we are using 
//app.use('?', express.static(path.resolve(__dirname, ?)))

//handle get requests to home page//
app.get('/', fileController.getClothes, (req,res, next) => {
    res.sendFile(path.resolve(__dirname, '../index.html'), function (err) {
        if (err) {
            next(err)
        } else {
            console.log('data sent!');
        }
    })
})


app.use('/closet', closetRouter);

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