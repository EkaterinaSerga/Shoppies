const db = require('./db');
const Movie = require('./Movie');

const seed = async () => {
  await db.sync({ force: true });
};

module.exports = seed;
