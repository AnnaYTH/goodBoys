import React from 'react'; 
import { Link } from 'react-router-dom';
import Footer from './footer';

class Splash extends React.Component {

    render() {
        return(
            <div className='body'>
                <div className='column'>
                    <div className='left-col'> 
                        <div className='header-logo'> 
                            <img src={window.gdby_logo} alt='logo' /> 
                        </div>

                        {/* <div className='horizontal-background'> </div> */}

                        <div className='horizontal'>
                            <div className='choice-awards'> 
                                <div className='choice-awards-book-text'>goodBoys CHOICE AWARDS 2021</div>

                                <div className='choice-awards-text'> Announcing the Best Relationships of 2021</div>
                            </div>
                        </div>

                        <div className='mid-horizontal'>
                            <div className='next-friend'>
                                <p className='next-friend-head'>Deciding who to befriend next?</p>
                                <p>You’re in the right place. Tell us what activities and interests you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                            </div>
                            
                            <div className='friends-friending'>
                                <p className='friends-friending-head'>Who are your friends meeting?</p>
                                <p>Chances are your friends are your best way to meet new people. See who they're discussing on GoodBoys.</p>
                            </div>
                        </div>
                    </div>

                    <div className='right-col'> 
                        <div className = "interactive-buttons">
                            <p> Discover and befriend more </p>
                            <Link to = "/signup" ><button className = "signup">Sign up with email</button></Link>
                            <p>Already a Member?</p>
                            <Link to = "/login" ><button  className = "login">Sign In</button></Link>
                            <p> Here's another sign up button! </p>
                            <Link to = "/signup" ><button className = "signup">Sign up with email</button></Link>
                            <p className='terms-service'> By creating an account, you agree to the goodBoys Terms of Service and Privacy Policy.</p>
                        </div>
                    </div>

                    <div className='right-right-col'>
                        <div className='horizontal'>
                            Hey
                        </div>
                    </div>
                </div>


                <div className='bottom-horizontal'>
                    {/* <div className='discover'> 
                        <p> Who will _you_ discover? </p>
                        <p> Because Deborah liked... </p>
                        <p> Quiet, Introspective, Thoughtful </p>
                        <p> She Discovered: </p>
                        <p> If she wants to meet new friends she needs to be more outgoing at first and take initiative. </p>
                    </div> */}

                    {/* <div className='love-lists'> 
                        <p> Love Lists? </p>
                        <p> Best Characteristics of the 20th Century </p>
                        <p> Best Traits for Groups </p>
                        <p> Best Personality Types for Intimate Gatherings </p>
                    </div> */}
                </div>


                {/* <div className='quote'> 
                    <p> Quotes </p>
                    <p> That strangers are friends that we some day may meet</p>
                    <p> - Edgar Guest, Faith, 1915</p>
                </div> */}

                <div className='searchbar'> This is a Search Bar </div>
                <Footer />
            </div>
        )
    }
}

export default Splash; 