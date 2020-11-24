const express = require('express');
const path = require('path');
const closetController = require('../controllers/closetController.js');
const userController = require('../controllers/userController.js');
const router = express.Router();

// Jason: created a new GET endpoint to /closet that queries the database
// for all entries and returns the result to the response
// should handle getting all items from the database

// CLOSET ROUTES:
router.get('/', closetController.getClothes, (req, res) => {
  res.json(res.locals.clothes);
});

//should handle entering items into database
router.post(
  '/',
  closetController.newClothingItem,
  closetController.getClothes,
  (req, res) => {
    console.log(res.locals.clothes);
    res.json(res.locals.clothes);
  }
);

// should delete and update also get clothes??
//deletes an item from the closet using the id
router.delete('/', closetController.deleteClothingItem, (req, res) => {
  res.json(res.locals.clothes);
});

//updates an item from the closet using the id
router.patch('/', closetController.updateClosetItem, (req, res) => {
  res.send('happy stuff');
  //   res.json(res.locals.clothes);
});

// USER ROUTES:

// add a new user
router.post;

// add new user

// update user

// get marketplace items

// donation status

module.exports = router;
