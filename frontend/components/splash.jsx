import React from 'react'; 
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return(
            <div className='body'>

                <div className='horizontal'>
                    <div className='choice-awards'> 
                        <div className='choice-awards-book-text'>goodBoys choice awards 2021</div>

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
                <div className='footer'> 
                    <p> Connect With Me </p> 
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className='socials'>
                        <a href="https://www.linkedin.com/in/annatrottherdrich/" target="_blank" className="fa fa-linkedin"></a>
                        <a href="https://github.com/AnnaYTH" target="_blank" class="fa fa-github"></a>
                        <a href="https://www.instagram.com/roaringdragonite/?hl=en" target="_blank" class="fa fa-instagram">
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash; 