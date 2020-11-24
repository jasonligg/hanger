const db = require('./models/closetModels');

const fileController = {};

fileController.getClothes = async (req, res, next) => {
  const queryStr = 'SELECT * FROM Closet ORDER BY _id ASC';
  try {
    const data = await db.query(queryStr);
    res.locals.clothes = data.rows;
    return next();
  } catch (error) {
    return next(error);
  }
};

fileController.newClothingItem = async (req, res, next) => {
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

fileController.updateClosetItem = async (req, res, next) => {
  const id = req.body._id;
  const firstQuery = 'SELECT times_worn FROM Closet WHERE _id = $1';

  try {
    const data = await db.query(firstQuery, [id]);
    let { times_worn } = data.rows[0];
    times_worn += 1;
    const todaysDate = new Date();

    const queryStr =
      'UPDATE Closet SET last_worn = $1, times_worn = $2 WHERE _id= $3';
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

fileController.deleteClothingItem = async (req, res, next) => {
  const id = req.body._id;
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
module.exports = fileController;
