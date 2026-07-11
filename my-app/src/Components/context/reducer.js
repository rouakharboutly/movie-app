import React from 'react'
import * as actions from "./ActionTypes";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload.imdbID)
      };
    case actions.ADD_MOVIE_TO_WATCHED:
        return {
          ...state,
          watched: [...state.watched, action.payload],
          watchlist: state.watchlist.filter((movie) => movie.imdbID !== action.payload.imdbID)
        };
    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID)
      };
    default:
      return state;
  }
};

export default reducer