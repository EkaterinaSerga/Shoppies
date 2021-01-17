import React from 'react';
import './Styles.scss';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function SingleMovie(props) {
  const [movie, setMovie] = React.useState({});
  const [likedMovie, setLikedMovie] = React.useState(0);
  const id = props.match.params.id;

  React.useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/movies/details/${id}`);
      setMovie(data);
      const liked = await axios.get(`/api/movies/liked/${id}`);
      setLikedMovie(liked.data);
    }
    fetchData();
  }, []);

  const like = async (e) => {
    await axios.post(`/api/movies/liked/${id}`, {
      movie,
      [e.target.name]: true,
    });
    const { data } = await axios.get(`/api/movies/liked/${id}`);
    setLikedMovie(data);
  };

  return movie.title ? (
    <div className="singleMovie">
      <h1>{movie.title}</h1>
      <h2>Director(s):</h2>
      {movie.directors.map((director) => (
        <ul>{director}</ul>
      ))}
      <h2>Release year: {new Date(movie.release_date).getFullYear()}</h2>
      <h2>Description: </h2>
      <p>{movie.description}</p>
      <div className="singleMovie--likeButtons">
        <div className="singleMovie--likeButtons--like">
          <p className="singleMovie--likeButtons--like-count">
            {likedMovie.likes || 0}
          </p>
          <button
            onClick={like}
            name="like"
            className="singleMovie--likeButtons--like-button"
          >
            👍
          </button>
        </div>
        <div className="singleMovie--likeButtons--dislike">
          <p>{likedMovie.dislikes || 0}</p>
          <button
            onClick={like}
            name="dislike"
            className="singleMovie--likeButtons--dislike-button"
          >
            👎
          </button>
        </div>
      </div>
    </div>
  ) : (
    'Loading...'
  );
}

export default SingleMovie;
