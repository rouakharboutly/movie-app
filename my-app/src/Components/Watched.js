import React from 'react'
import { useMovieContext } from './context/GlobalContext';
import MovieCard from './MovieCard';

function Watched() {
  const MovieContext = useMovieContext();
  return (
    <div className='watched'>
   <div className="container">
    <h1>Watched Movies</h1>
      <span className='count-movies'>
        {MovieContext.watched.length} 
        {MovieContext.watched.length === 1 ? "Movie" : "Movies"}
      </span>
      </div>
      {MovieContext.watched.length > 0 ? (
        <div className='movie-grid'>
          {MovieContext.watched.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} type="watched" />
          ))}
        </div>
      ) : (
        <h1>No watched movies yet.</h1>
      )}
    </div>
  )
}

export default Watched