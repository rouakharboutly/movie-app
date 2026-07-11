import React from 'react'
import {useMovieContext} from './context/GlobalContext';
import './Resulat.css';
import * as actions from './context/ActionTypes';
const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storedMovies = MovieContext.watchlist.find((o) => o.imdbID === movie.imdbID);
  const watchlistDisabled = storedMovies ? true : false;
  const storedMoviesWatched = MovieContext.watched.find((o) => o.imdbID === movie.imdbID);
const storedMoviesWatchedDisabled = storedMoviesWatched ? true : false;
  return (
    <div className='result-card'>
      <div className='poster'>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className='info'>
        <div className='heading'>
          <h3 className='title'>{movie.Title}</h3>
          <p className='year'>{movie.Year ? <span>{movie.Year}</span> : null}</p>
        </div>
        <div className='controls'>
          <button onClick={() => MovieContext.MovieDispatch({type:actions.ADD_MOVIE_TO_WATCHLIST,payload:movie})} disabled={watchlistDisabled}>
            Add to Watchlist
          </button>
          <button onClick={() => MovieContext.MovieDispatch({type:actions.ADD_MOVIE_TO_WATCHED,payload:movie})} disabled={storedMoviesWatchedDisabled}>
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard