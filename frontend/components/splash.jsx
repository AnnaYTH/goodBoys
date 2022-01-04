import React from 'react'; 
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return(
            <div className='body'>
                <div className='header'> goodBoys(logo)</div>

                <div className='horizontal'>
                    <div className='choice-awards'> 
                        <div className='choice-awards-text'> Announcing the Best Relationships of 2021</div>
                    </div>
                    <div className = "interactive-buttons">
                            <Link to = "/signup" ><button className = "signup">Create Account</button></Link>
                            <p>Already a Member?</p>
                            <Link to = "/login" ><button  className = "login">Sign In</button></Link>
                    </div>
                </div>

                <div className='discover'> Who will _you_ discover? </div>
                <div className='love-lists'> Love Lists? </div>
            </div>
        )
    }
}

export default Splash; 