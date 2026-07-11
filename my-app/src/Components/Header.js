import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='Logo'>
      <Link to="/">Movies</Link>
        </div>
        <ul className='nav'>
    <li>
      <NavLink to="/">WatchList</NavLink>
      </li>
      <li>
        <NavLink to="/watched">Watched</NavLink>
      </li>
      <li className='add'>
      <NavLink to="/add">Add</NavLink>
      </li>
    </ul>

     
    
      </div>
    </div>
  )
}

export default Header