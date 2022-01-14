import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'> 
            <img src={window.gdby_logo} alt='logo' /> 

            <p>This is the header</p>

            <Link to ="/relationships"> Home </Link>

            <p>My Relationships</p>

            <Link to ="/relationships"> All Relationships </Link>

            <p>Search Bar</p>

            <Link to='/users/:id'> Profile </Link>

            <Link to='/human/:id'> Human </Link>
        </div>
    )
}

export default Header; 