import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import Footer from '../footer'; 
import Header from '../header'; 

const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users, 
    })
}

const mapDispatchToProps = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
});


class AllFriends extends React.Component {


    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRelationships(); 
        this.props.getReviews(); 
    }
 
    render() {
        return (
            <div>
                <Header/>

                <p>This is where I show you all the possible friends</p>
                

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(AllFriends);