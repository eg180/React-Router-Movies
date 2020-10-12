import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import Movie from './Movie'


export default function MovieList(props) {
  const { movies } = props
  const { url } = useRouteMatch() // returns obj (path also) - gives us the present base URL
  

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
    <Link to={'${url}/${movie.id}'}>
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
