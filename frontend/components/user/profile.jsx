import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import Footer from '../footer'; 
import Header from '../header'; 

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
    })
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});




class Profile extends React.Component {


    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.logout(); 
    }
 
    render() {
        return (
            <div>
                <Header/>
                <div>Hey Buddy</div>
                <div> {currentUser} </div>

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(Profile);