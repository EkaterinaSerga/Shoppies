import React from 'react';
import './Styles.scss';
import SearchResult from '../searchResult/SearchResult';
import axios from 'axios';
// var querystring = require("querystring");
// var result = querystring.stringify({query: "SELECT name FROM user WHERE uid = me()"});

function App() {
  const [search, setSearch] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`/api/movies/${search}`);
    const movies = data.movie_results;
    setSearchResult(movies);
    setSearch('');
  };

  return (
    <div className="app">
      <div className="app--search">
        <input
          className="app--search-bar"
          type="text"
          key="searchBar"
          value={search}
          placeholder={'Search movie'}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className="app--search-button" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="app--result">
        <SearchResult searchResult={searchResult} />
      </div>
    </div>
  );
}

export default App;
