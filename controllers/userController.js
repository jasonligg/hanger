const db = require('../models/closetModels');

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
  // need to check first if a user with username/password already exists...?

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

userController.userLogin = async (req, res, next) => {
  const { username, password } = req.body;

  const firstQuery =
    'SELECT EXISTS (SELECT 1 FROM Users WHERE username = $1 AND password = $2)';
  const queryParams = [username, password];

  try {
    const validUser = await db.query(firstQuery, queryParams);
    // if validUser is true:
    // query db for id belonging to username and password and return to client?
    if (validUser) {
      const queryString =
        'SELECT _id FROM Users WHERE username = $1 AND password = $2';
      const data = await db.query(queryString, queryParams);
      res.locals._id = data.rows[0];
      return next();
    }
    res.send('Invalid username or password');
  } catch (error) {
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${error.stack}` },
    });
  }
};

userController.getUser = async (req, res, next) => {
  const userId = req.params.id;
<<<<<<< HEAD
  const queryStr = 'SELECT * FROM Users WHERE _id = $1';
=======
  const queryStr= 'SELECT * FROM Users WHERE _id = $1';
>>>>>>> 20e0058fa54b3bf184e61c6a9d284c804aa14154

  try {
    const data = await db.query(queryStr, [userId]);
    res.locals.user = data.rows;
    return next();
  } catch (error) {
<<<<<<< HEAD
    return next({
      log: `Database error`,
      status: 502,
      message: { err: `${error.stack}` },
    });
  }
};
=======
    console.log("error in getUser", error)
  }
}
>>>>>>> 20e0058fa54b3bf184e61c6a9d284c804aa14154

module.exports = userController;
