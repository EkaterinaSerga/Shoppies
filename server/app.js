const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

if (process.env.NODE_ENV !== 'testing') app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/movies', require('./routes/movies'));

app.use('/api/*', (req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

module.exports = app;
