import React from 'react';
import { useMovieContext } from './context/GlobalContext';
import * as actions from './context/ActionTypes';
import './MovieControl.css';

const MovieControl = ({ movie, type }) => {
  const MovieContext = useMovieContext();

  return (
    <div className='inner-card-controls'>

      {type === 'watchlist' && (
        <>
        
          <button 
            className='ctrl-btn' 
            onClick={() => {
              MovieContext.MovieDispatch({ type: actions.ADD_MOVIE_TO_WATCHED, payload: movie });
              MovieContext.MovieDispatch({ type: actions.REMOVE_MOVIE_FROM_WATCHLIST, payload: movie });
            }}
          >
            <i className='fa-solid fa-eye'></i>
          </button>
          
          <button 
            className='ctrl-btn' 
            onClick={() => MovieContext.MovieDispatch({ type: actions.REMOVE_MOVIE_FROM_WATCHLIST, payload: movie })}
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        </>
      )}
     
  
      {type === 'watched' && (
        <>

          <button 
            className='ctrl-btn' 
            title="Move back to Watchlist" 
            onClick={() => {
              MovieContext.MovieDispatch({ type: actions.ADD_MOVIE_TO_WATCHLIST, payload: movie });
              MovieContext.MovieDispatch({ type: actions.REMOVE_MOVIE_FROM_WATCHED, payload: movie });
            }}
          >
            <i className='fa-solid fa-eye-slash'></i>
          </button>

          <button 
            className='ctrl-btn' 
            title="Remove from Watched" 
            onClick={() => MovieContext.MovieDispatch({ type: actions.REMOVE_MOVIE_FROM_WATCHED, payload: movie })}
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControl;