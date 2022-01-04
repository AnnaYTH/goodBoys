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
        const user = {
            email: "buddy@gmail.com",
            password: "hunter12",
            name: 'Buddy'
        };
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
            <div>
                <button onClick = {this.handleDemoUser}>Demo User</button>
                <h2>Sign In</h2>
                <form onSubmit = {this.handleSubmit}>
                    {this.errorMessages()}
                    <label> Email:
                        <input type="text" value = {this.state.email} onChange = {this.update("email")} />
                    </label>
                  
                    <label> Password:
                        <input type="password" value = {this.state.password} onChange = {this.update("password")} />
                    </label>
                   
                   
                    <input type="submit" value = "Sign In" />
                </form>
                {/* <button onClick={this.handleDemoUser}>
                    Demo User</button> */}
                <Link to ="signup">Create Account</Link>
            </div>
        )
    }
}

export default LoginForm;