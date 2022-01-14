import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';

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
 
};



export default connect(mapStateToProps, mapDispatchToProps)(Profile);