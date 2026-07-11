import React from 'react'
import MovieControl from './MovieControl';
import './MovieCard.css';
const MovieCard = ({ movie,type }) => {
  return (
    <div className='movie-card'>
        <div className='overlay'></div>
    { movie.Poster ? <img src={movie.Poster} alt={movie.Title}  /> :
    <div className='filler-poster'></div>}
<MovieControl movie={movie} type={type} />
    </div>
  )
}

export default MovieCard