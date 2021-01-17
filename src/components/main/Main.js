import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import App from '../app/App';
import SingleMovie from '../singleMovie/SingleMovie';

const Main = () => (
  <Router>
    <Route path="/movies/:id" component={SingleMovie} />
    <Route exact path="/" component={App} />
  </Router>
);

export default Main;
