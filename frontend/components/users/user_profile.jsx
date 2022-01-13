import React from 'react';
import { Link } from 'react-router-dom';
import UserReview from '../reviews/user_reviews';

// nbsp non breaking space 

const UserProfile = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <Link to="/login">Login</Link>
//       &nbsp;or&nbsp;
//       <Link to="/signup">Sign up!</Link>
//     </nav>
//   );
//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.email}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return currentUser ? personalGreeting() : sessionLinks();

    return (
        <div>
            This is the current User's profile page content
            <UserReview />
        </div>
    )
};


export default UserProfile;