const express = require('express');
const path = require('path');
const closetController = require('../controllers/closetController.js');
const userController = require('../controllers/userController.js');
const router = express.Router();

//
// should handle getting all items from the database

// CLOSET ROUTES:

// tested and works in postman
router.get('/closet/:id', closetController.getClothes, (req, res) => {
  res.json(res.locals.clothes);
});

//should handle entering clothing items into database
router.post(
  '/',
  closetController.newClothingItem,
  closetController.getClothes,
  (req, res) => {
    // console.log(res.locals.clothes);
    res.json(res.locals.clothes);
  }
);

//deletes an item from the closet using the id
router.delete(
  '/delete/:id',
  closetController.deleteClothingItem,
  (req, res) => {
    // res.json(res.locals.clothes);
  }
);

//updates an item
router.patch('/updateItem', closetController.updateClosetItem, (req, res) => {
  res.send('happy stuff');
});

// get marketplace items
// tested and works in postman
router.get('/marketplace', closetController.getMarketplaceItems, (req, res) => {
  res.json(res.locals.clothes);
});

// donation status
// tested and works in postman
router.post(
  '/closet/donation',
  closetController.donationStatusUpdate,
  (req, res) => {
    // res.json(res.locals.clothes);
    res.send('donation status updated!');
  }
);

// USER ROUTES:

// adds a new user to the db
router.post('/signup', userController.addUser, (req, res) => {
  res.send('Account signup success!');
});

// logs user in
router.post('/login', userController.userLogin, (req, res) => {
  res.send('Successfully logged in');
});

// tested and works in postman
router.get('/user/:id', userController.getUser, (req, res) => {
  res.json(res.locals.user);
});

module.exports = router;
