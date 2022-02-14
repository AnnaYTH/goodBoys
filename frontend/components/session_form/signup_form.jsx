import React from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field] : e.currentTarget.value})
        }
    }

    errorMessages() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
    }

    render() {

        const renderError = (errors ? (
            errors.map((err, idx) => {
                return <div> {err} </div>
            })
        ) : "")

        return (
            <div className='body'>
                <div className='header'> 
                    <img src={window.gdby_logo} alt='logo' /> 
                </div>

                <div className='signup-body'>
                    <form className='signup-form' onSubmit = {this.handleSubmit}>
                        <h2>Sign up for GoodBoys</h2>
                        <h3> Sign up to see what your friends are thinking, get referrals, and join the world’s largest community of friends.</h3>

                        {renderError}
                        
                        <div className='input'>
                            <label> Name
                                <div>
                                    <input type="text" value = {this.state.name} onChange = {this.update("name")} />
                                </div>
                            </label>
                        </div>

                        <div className='input'>
                            <label> Email
                                <div>
                                    <input type="text" value = {this.state.email} onChange = {this.update("email")} />
                                </div>
                            </label>
                        </div>

                        <div className='input'>
                            <label> Password
                                <div>
                                    <input type="password" value = {this.state.password} onChange = {this.update("password")} />
                                </div>
                            </label>
                        </div>
                        
                        <div>
                            <input className='signup-buttons' type="submit" value = "Sign up" />
                        </div>
                        
                        {/* <div>
                            <button  className='signup-buttons' onClick = {this.handleDemoUser}>Demo User</button>
                        </div> */}

                        <div className='redirect'> 
                            <p className='already-text'>
                                Already a Member? 
                            </p>       
                            <Link to='/login'>Sign In</Link>
                        </div>

                        <p className='terms-service-sign'> By clicking 'Sign up', I agree to the goodBoys Terms of Service and confirm that I am at least 13 years of age. Read our Privacy Policy.</p>
                    </form>

                </div>


                    <div className='bookshelf-footer'> 
                        {/* <img src={window.bookshelf} alt='bookshelf' />  */}
                    </div>


            </div>
        )
    }
}

export default SignupForm;