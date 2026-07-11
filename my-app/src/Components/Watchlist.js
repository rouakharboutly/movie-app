import React from 'react'
import { useMovieContext } from './context/GlobalContext';

import MovieCard from './MovieCard';
import'./Resulat.css';
const Watchlist = () => {
    const MovieContext = useMovieContext();
  return (
    <div>
        <h2>
  {MovieContext.watchlist.length } 
  {MovieContext.watchlist.length === 1 ?"Movie" :"Movies"}
        </h2>
{
    MovieContext.watchlist.length >0? (
       <div className='movie-grid'>
        {MovieContext.watchlist.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
        ))}
       </div>):<h2 className='no-movies'>No movies in your list, add some!</h2>}
    </div>

  )
}

export default Watchlist