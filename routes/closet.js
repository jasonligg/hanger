const express = require('express');
const path = require('path')
const fileController = require('../fileController.js')
const router = express.Router()


// Jason: created a new GET endpoint to /closet that queries the database
// for all entries and returns the result to the response
// should handle getting all items from the database
router.get('/', fileController.getClothes, (req, res) => {
  res.json(res.locals.clothes);
});


//should handle entering items into database //
router.post('/', fileController.newClothingItem, fileController.getClothes, (req, res) => {
  console.log(res.locals.clothes)
  res.json(res.locals.clothes);
});
    
//deletes an item from the closet using the id
router.delete('/', fileController.deleteClothingItem, (req, res) => {
  res.json(res.locals.clothes);
});
    
//updates an item from the closet using the id
router.patch('/', fileController.updateClosetItem, (req, res) => {
    res.send('happy stuff')
//   res.json(res.locals.clothes);
})


module.exports = router;