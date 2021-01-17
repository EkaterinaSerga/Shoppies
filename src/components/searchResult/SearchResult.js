import React from 'react';
import './Styles.scss';
import { Link } from 'react-router-dom';

function SearchResult(props) {
  return props.searchResult.length ? (
    <div className="searchResult">
      {props.searchResult.map((el) => (
        <div className="searchResult--singleMovie">
          <Link
            to={{
              pathname: `/movies/${el.imdb_id}`,
            }}
          >
            <h1>{el.title}</h1>
          </Link>
          <h2>Year: {el.year}</h2>
        </div>
      ))}
    </div>
  ) : (
    'No movies found'
  );
}

export default SearchResult;
