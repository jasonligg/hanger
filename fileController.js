const db = require('./models/closetModels');

const fileController = {};

// User Table queries:
// add a user to the db
fileController.addUser = async (req, res, next) => {
  const {
    first_name,
    last_name,
    username,
    password,
    email,
    phone,
    zip_code,
    profile_image,
    city,
    state,
    display_name_1,
  } = req.body;

  const queryStr =
    'INSERT INTO Users (first_name, last_name, username, password, email, phone, zip_code, profile_image, city, state, display_name_1) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
  const queryParams = [
    first_name,
    last_name,
    username,
    password,
    email,
    phone,
    zip_code,
    profile_image,
    city,
    state,
    display_name_1,
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

// update a user's information:
fileController.updateUser = async (req, res, next) => {
  // find out what fields user will be able to update
};

// adds a new item to a user's closet
fileController.newClothingItem = async (req, res, next) => {
  // ADD a user_id foreign key to attach the item to a specific user?
  const { itemName, itemClothingType, itemColor, itemImage } = req.body;

  const queryStr =
    'INSERT INTO Closet (itemName, itemClothingType, itemColor, itemImage) VALUES ($1, $2, $3, $4)';
  const queryParams = [itemName, itemClothingType, itemColor, itemImage];

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
fileController.getClothes = async (req, res, next) => {
  // change to join query: selects all clothes matching user_id foreign key:
  // 'SELECT u._id, c.* FROM Users u LEFT OUTER JOIN Closet c ON c.user_id = u._id'
  const queryStr = 'SELECT * FROM Closet ORDER BY _id ASC';
  try {
    const data = await db.query(queryStr);
    // creates clothes key in res.locals, assigns to data.rows (all data columns for that item)
    res.locals.clothes = data.rows;
    return next();
  } catch (error) {
    return next(error);
  }
};

// updates how many times an item has been worn and date of last wear
// id of item is passed through as key/value on request body
fileController.updateClosetItem = async (req, res, next) => {
  const id = req.body._id;
  const firstQuery = 'SELECT times_worn FROM Closet WHERE _id = $1';

  try {
    // query db, passing in query string and item id
    // capture and store the num of times item has been worn
    // increases the num of times worn, store current date
    const data = await db.query(firstQuery, [id]);
    let { times_worn } = data.rows[0];
    times_worn += 1;
    const todaysDate = new Date();

    const queryStr =
      'UPDATE Closet SET todaysDate = $1, times_worn = $2 WHERE _id= $3';

    // query params: today's date, num or times worn and item id
    // query db with query string and params and update item with last worn date and times worn
    const queryParams = [todaysDate, times_worn, id];

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

// removes a piece of clothing from the Closet table
// request body includes key/value of clothing item id
fileController.deleteClothingItem = async (req, res, next) => {
  const id = req.body._id;

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
fileController.donationStatus = async (req, res, next) => {
  const id = req.body._id;
  const firstQuery = 'SELECT donation_status FROM Closet WHERE _id = $1';

  try{
  const data = await db.query(firstQuery, [id]);
  let { donation_status } = data.rows[0];
  const queryString;
  // update donation_status to active or inactive based on current status 
  if (donation_status === 'Inactive') {
    queryString = 'UPDATE Closet SET donation_status = active WHERE _id= $1';
  } else {
      queryString = 'UPDATE Closet SET donation_status = inactive WHERE _id=$1';
  }
  await db.query(queryStr, [id]);
  return next();
} catch (error) {
  return next({
    log: `Database error`,
    status: 502,
    message: { err: `${error.stack}` },
  });
}
};

// query to find donatable items for marketplace

module.exports = fileController;
