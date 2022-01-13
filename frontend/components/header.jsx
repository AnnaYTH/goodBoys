import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'> 
            <img src={window.gdby_logo} alt='logo' /> 

            <Link to ="relationships"> Home </Link>

            <p>This is the header</p>
            <p>Home</p>
            <p>My Relationships</p>
            <p>All Relationships</p>
            <p>Search Bar</p>
            <p>Profile Drop Down</p>
        </div>
    )
}

export default Header; 