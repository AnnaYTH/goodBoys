import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer'; 
import Header from '../header';
import UserReview from '../reviews/review_container'; 

// nbsp non breaking space 
const Greeting = ({ currentUser, logout }) => {
  
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );

  const personalGreeting = () => {
    // debugger;
    return (
    <hgroup className="profile-body">
      <Header/>

      <div className='profile_meat'>

        <h1 className='user_name'> {currentUser.name} </h1>
        <hr />

        <div>Email:  {currentUser.email}</div>
        <div>Activity: Joined goodBoys on {currentUser.created_at.split("T")[0]} </div>

        <hr />

        <Link to='/'>
          <button className="logout_button" onClick={logout}>Log Out</button>
        </Link>

        <hr />
        <div className='profile-subheader'> {currentUser.name}'s recent activity</div>
        
        <UserReview/>
        <hr />
      </div>

      <Footer/>
    </hgroup>
    )
  };  

  return currentUser ? personalGreeting() : sessionLinks();

  // return personalGreeting(); 
};


export default Greeting;
