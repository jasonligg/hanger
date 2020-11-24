const db = require('./models/closetModels');

const userController = {};

// adds a user to the db
userController.addUser = async (req, res, next) => {
  const {
    first_name,
    last_name,
    username,
    password,
    email,
    zip_code,
    profile_image,
    city,
    state,
    display_name_1,
    oauth_id,
  } = req.body;

  const queryStr =
    'INSERT INTO Users (_id, first_name, last_name, username, password, email, zip_code, profile_image, city, state, display_name_1, oauth_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
  const queryParams = [
    DEFAULT,
    first_name,
    last_name,
    username,
    password,
    email,
    zip_code,
    profile_image,
    city,
    state,
    display_name_1,
    oauth_id,
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

module.exports = userController;
