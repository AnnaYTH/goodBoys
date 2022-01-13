import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    handleDemoUser(e) {
        e.preventDefault();
        // debugger
        const user = {
            email: "buddy@gmail.com",
            password: "hunter12",
        };
        // debugger 
        this.props.login(user);
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

    // errorMessages() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //             <li key={`error-${i}`}>
    //                 NOOOOO 
    //             </li>
    //         </ul>
    //     )
    // }

    render() {
        return (
            <div className='body'>
                <div className='header'> 
                    <img src={window.gdby_logo} alt='logo' /> 
                </div>

                <div className='signup-body'>
                    <form className='signup-form' onSubmit = {this.handleSubmit}>
                        <h2>Sign in to GoodBoys</h2>

                        {this.errorMessages()}

                        <div className='email-input input'>
                            <label> Email
                                <div className='input-box'>
                                    <input type="text" value = {this.state.email} onChange = {this.update("email")} />
                                </div>
                            </label>
                        </div>
                    
                        <div className='password-input input'>
                            <label> Password
                                <div className='input-box'>
                                    <input type="password" value = {this.state.password} onChange = {this.update("password")} />
                                </div>
                            </label>
                        </div>
                        
                        <div>
                            <input className='signup-buttons' type="submit" value = "Sign In" />
                        </div>

                        <div>
                            <button  className='signup-buttons' onClick = {this.handleDemoUser}>Demo User</button>
                        </div>

                        <div> 
                            <p className='already-text'>
                                Not a member? 
                            </p>       
                            <Link to ="signup">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;