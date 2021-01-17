const Sequelize = require('sequelize');
const db = require('./db');

const Movie = db.define('movie', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  imdbId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  likes: {
    type: Sequelize.INTEGER,
    dafaultValue: 0,
    validate: {
      min: 0,
    },
  },
  dislikes: {
    type: Sequelize.INTEGER,
    dafaultValue: 0,
    validate: {
      min: 0,
    },
  },
});

module.exports = Movie;
