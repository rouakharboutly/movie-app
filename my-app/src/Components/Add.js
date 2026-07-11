import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';
import './Add.css';
const Add = () => {
    const [Search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (Search) { 
            axios.get(`https://www.omdbapi.com/?s=${Search}&apikey=a7ba24b9`)
                .then((response) => {
                    if (response.data.Search) {
                        setMovies(response.data.Search);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching movies:', error);
                });
        }
    }, [Search]);

    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-container'>
                        <input
                            type="text"
                            placeholder="Search for a movie..."
                            value={Search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    {movies?.length > 0 && (
                        <ul className='results'>
                            {movies.map((movie) => (
                                <li key={movie.imdbID}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Add;