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
        // debugger
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
        return (
            <div className='body'>
                <h2>Create Account</h2>
                <button onClick = {this.handleDemoUser}>Demo User</button>
                <form onSubmit = {this.handleSubmit}>
                    {this.errorMessages()}
                    
                    <label> Name:
                         <input type="text" value = {this.state.name} onChange = {this.update("name")} />
                    </label>

                    <label> Email:
                         <input type="text" value = {this.state.email} onChange = {this.update("email")} />
                    </label>

                    <label> Password:
                            <input type="password" value = {this.state.password} onChange = {this.update("password")} />
                    </label>
                    
                    <input type="submit" value = "Create Account" />
                </form>

                <div> Already a Member? 
                    <Link to='/login'>Sign In Instead</Link>
                </div>
            </div>
        )
    }
}

export default SignupForm;