import React from 'react';
import { Link } from 'react-router-dom'
import Movie from './Movie'

export default function MovieList(props) {
  // const { movies } = props

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
    <Link to={'/movies/${movie.id}'}>
      <h2>{title}</h2>
    </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
