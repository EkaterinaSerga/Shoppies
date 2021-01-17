# Movie Mood

## About

Welcome to 'Movie Mood'. Movie Mood is a small web application that allows users to search for a movie title, click on that movie title for more information, and give that movie a thumbs up or thumbs down.

This project was created with [Create React App](https://github.com/facebook/create-react-app) as a starting point. It utilizes React on the front-end and Node.js on the back-end making calls to an external IMDB API. To be able to store information about likes and dislikes I added an Express server and a postgres database.

## Demo

<p align="center">
  <img src="demo.gif" alt="GIF showcasing: Search page, Single Movie Page, functionality to like and dislike movie, persistant data on reload" />
</p>

## How to run the project

In the project directory, please run the following commands in the presented order:

- `npm install`
- Make sure your Postgres database is running!
- Create a database: `createdb movie-mood`
- Use .env.sample file in the root to create a .env file filling missing values
- Seed the database and run express server: `npm run seed` (plase bear in mind that database will re-seed every time you re-start the server)
- In a separate terminal tab run the app in the development mode: `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Hope you enjoy the app!

### Authors:

**Ekaterina Serga** - _Initial work_ - [EkaterinaSerga](https://github.com/ekaterinaSerga)
