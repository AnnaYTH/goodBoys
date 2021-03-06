import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar/search_bar'; 

const Header = () => {
    return (
        <div className='header'> 
            <img src={window.gdby_logo} alt='logo' />

            <Link to ="/relationships"> Home </Link>

            <Link to='/reviews'> Recent Reviews </Link>

            <Link to ="/relationships"> All Relationships </Link>

            {/* <Link to="/friends"> All Users </Link> */}
            
            <SearchBar />

            <Link to='/users/:id' className='header_profile'> Profile </Link>

        </div>
    )
}

export default Header; 