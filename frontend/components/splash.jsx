import React from 'react'; 
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return(
            <div className='box'> hey splash page
            <div className='choice-awards'> Announcing the Best Relationships of 2021 </div>
                <div className = "interactive-buttons">
                    <Link to = "/login" ><button  className = "login">Sign In</button></Link>
                    <Link to = "/signup" ><button className = "signup">Create Account</button></Link>
                </div>
            </div>
        )
    }
}

export default Splash; 