const router = require('express').Router();
const axios = require('axios').default;
const {
  models: { Movie },
} = require('../db');

router.get('/details/:id', async (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
    params: { imdb: req.params.id, type: 'get-movie-details' },
    headers: {
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.get('/liked/:imdbId', async (req, res, next) => {
  try {
    const movie = await Movie.findOne({
      where: {
        imdbId: req.params.imdbId,
      },
    });
    res.status(200).send(movie);
  } catch (error) {
    next(error);
  }
});

router.get('/:title', async (req, res, next) => {
  var options = {
    method: 'GET',
    url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
    params: { title: req.params.title, type: 'get-movies-by-title' },
    headers: {
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

router.post(`/liked/:imdbId`, async (req, res, next) => {
  try {
    const newMovie = {
      title: req.body.movie.title,
      imdbId: req.body.movie.imdb_id,
      likes: 0,
      dislikes: 0,
    };

    const [movie] = await Movie.findOrCreate({
      where: {
        imdbId: req.body.movie.imdb_id,
      },
      defaults: newMovie,
    });

    if (req.body.like) {
      await movie.increment(['likes'], { by: 1 });
    }
    if (req.body.dislike) {
      await movie.increment(['dislikes'], { by: 1 });
    }
    res.json(movie);
  } catch (error) {
    console.error({ error });
    next(error);
  }
});

module.exports = router;
