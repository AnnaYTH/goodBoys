import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { getReviews, getReview } from '../../actions/review_actions'; 
import { getRelationship, getRelationships } from '../../actions/relationship_actions';
import React from 'react';
import Footer from '../footer'; 
import Header from '../header'; 

import { followBuddy, unfollowBuddy } from '../../actions/follow_actions'

const mSTP = (state, ownProps) => {
    // debugger; 
    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users, 
        reviews: state.entities.reviews, 
        relationships: state.entities.relationships,
        userProfile: state.entities.users[ownProps.match.params.id],
    })
}

const mapDispatchToProps = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
    fetchUsers: () => dispatch(fetchUsers()), 
    followBuddy: (object) => dispatch(followBuddy(object)), 
});


class FriendProfile extends React.Component {


    constructor(props) {
        super(props)

        this.toggleFollow = this.toggleFollow.bind(this); 
    }
    
    componentDidMount() {
        this.props.fetchUsers(); 
        this.props.getRelationships(); 
        this.props.getReviews(); 
    }

    toggleFollow(e) {
        e.preventDefault(); 
        let obj = {'follow_id': this.props.match.params.id, 'user_id': this.props.currentUser.id}
        this.props.followBuddy(obj); 
    }
 
    render() {
        // debugger; 
        const buddy = this.props.userProfile; 
        if(!buddy) {
            return null; 
        }
        // debugger; 
        return (
            <div>
                <Header/>

                <p> Name: {buddy.name} </p>
                <p> Email: {buddy.email} </p>
                <p> Member Since: {buddy.created_at.split("T")[0]} </p>
                {/* Eventually I can add all the reviews that this one user wrote */}

                <button onClick={this.toggleFollow}> Follow </button>

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(FriendProfile);