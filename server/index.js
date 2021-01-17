const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 8080;
const db = require('./db');

if (process.env.SEED) {
  try {
    db.seed();
    console.log('Seeded!');
  } catch (error) {
    throw Error(ex);
  }
}

app.listen(port, () => console.log(`listening on port ${port}`));
