const db = require('./db');
const Movie = require('./Movie');
const seed = require('./seed');

module.exports = {
  db,
  seed,
  models: { Movie },
};
