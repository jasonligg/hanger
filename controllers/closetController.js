const db = require('../models/closetModels');

const closetController = {};

// adds a new item to a user's closet
closetController.newClothingItem = async (req, res, next) => {
  const {
    itemName,
    itemClothingType,
    itemColor,
    itemImage,
    user_id,
    season,
    size,
    availability,
  } = req.body;

  const queryStr =
    'INSERT INTO Closet (itemName, itemClothingType, itemColor, itemImage, user_id, season, size, availability) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
  const queryParams = [
    itemName,
    itemClothingType,
    itemColor,
    itemImage,
    user_id,
    season,
    size,
    availability,
  ];

  try {
    await db.query(queryStr, queryParams);
    return next();
  } catch (error) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${error.stack}` },
    });
  }
};

// retrieves all clothes from Clothes table
closetController.getClothes = async (req, res, next) => {
<<<<<<< HEAD
  // would this be req.params??
  const userId = req.params.id;
  const queryStr =
    'SELECT u._id, c.* FROM Users u LEFT OUTER JOIN Closet c ON c.user_id = $1';
  // const queryStr = 'SELECT * FROM Closet ORDER BY _id ASC';
=======
  // const userId = req.params.id;
  // const queryStr =
  //   'SELECT u._id, c.* FROM Users u LEFT OUTER JOIN Closet c ON c.user_id = ($1)';
  const queryStr = 'SELECT * FROM Closet ORDER BY _id ASC';
>>>>>>> 20e0058fa54b3bf184e61c6a9d284c804aa14154
  try {
    const data = await db.query(queryStr, [userId]);
    res.locals.clothes = data.rows;
    return next();
  } catch (error) {
    return next(error);
  }
};

// updates how many times an item has been worn and date of last wear
// id of item is passed through as key/value on request body
closetController.updateClosetItem = async (req, res, next) => {
<<<<<<< HEAD
  const worn = req.body.worn;
  const { id, itemname, itemclothingtype, itemcolor } = req.body;
  console.log(id);
  console.log(worn);
  const firstQuery = 'SELECT times_worn FROM Closet WHERE _id = $1';

  if (worn) {
    try {
      const data = await db.query(firstQuery, [id]);
      let { times_worn } = data.rows[0];
      console.log(times_worn);
      times_worn += 1;
      const todaysDate = new Date();

      const queryStr =
        'UPDATE Closet SET itemname = $1, itemclothingtype = $2, itemcolor = $3, last_worn = $4, times_worn = $5 WHERE _id= $6';
      const queryParams = [
        itemname,
        itemclothingtype,
        itemcolor,
        todaysDate,
        times_worn,
        id,
      ];
      await db.query(queryStr, queryParams);
      return next();
    } catch (error) {
      return next({
        log: `Database error`,
        status: 502,
        message: { err: `${error.stack}` },
      });
    }
=======
  // worn will be true or false 
  const worn = req.body.worn;
  const { id, itemname, itemclothingtype, itemcolor } = req.body; 

  const firstQuery = 'SELECT times_worn FROM Closet WHERE _id = $1';
 // if worn is true:
 if (worn) { 
  try {
    const data = await db.query(firstQuery, [id]);
    let { times_worn } = data.rows[0];
    times_worn += 1;
    const todaysDate = new Date();

    const queryStr =
      'UPDATE Closet SET itemname = $1, itemclothingtype = $2, itemcolor = $3, last_worn = $4, times_worn = $5 WHERE _id= $6';
    const queryParams = [itemname, itemclothingtype, itemcolor, todaysDate, times_worn, id];
    await db.query(queryStr, queryParams);
    return next();
  } catch (error) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${error.stack}` },
    });
>>>>>>> 20e0058fa54b3bf184e61c6a9d284c804aa14154
  }
}
};

// removes a piece of clothing from the Closet table
// request body includes key/value of clothing item id
closetController.deleteClothingItem = async (req, res, next) => {
<<<<<<< HEAD
  const id = req.body.id;
=======
  const id = req.params.id;
>>>>>>> 20e0058fa54b3bf184e61c6a9d284c804aa14154

  // query string is to delete item from closet table where id matches passed in id
  const queryStr = 'DELETE FROM Closet WHERE _id = $1';
  const queryParams = [id];

  try {
    await db.query(queryStr, queryParams);
    return next();
  } catch (error) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${error.stack}` },
    });
  }
};

// update donation status in closet table
// select donation_status matching clothing item _id
closetController.donationStatusUpdate = async (req, res, next) => {
<<<<<<< HEAD
  const id = req.body.id;
  console.log(id);
=======
  const id = req.params.id;
>>>>>>> 20e0058fa54b3bf184e61c6a9d284c804aa14154
  const firstQuery = 'SELECT donation_status FROM Closet WHERE _id = $1';

  try {
    const data = await db.query(firstQuery, [id]);
    let { donation_status } = data.rows[0];
    console.log(donation_status);
    // swap donation_status based on current value
    donation_status = donation_status === 'Inactive' ? 'Active' : 'Inactive';

    const queryStr = 'UPDATE Closet SET donation_status = $1 WHERE _id= $2';
    const queryParams = [donation_status, id];

    await db.query(queryStr, queryParams);
    return next();
  } catch (error) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${error.stack}` },
    });
  }
};

// query to find donation items for marketplace
// pulls everything matching donation status of 'Active'
closetController.getMarketplaceItems = async (req, res, next) => {
  console.log('inside marketplace middleware!');
  const queryStr = 'SELECT * FROM Closet WHERE donation_status = $1';
  queryParams = ['Active'];

  try {
    const data = await db.query(queryStr, queryParams);
    res.locals.clothes = data.rows;
    return next();
  } catch (error) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${error.stack}` },
    });
  }
};

module.exports = closetController;
