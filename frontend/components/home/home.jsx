import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer'; 
import Header from '../header'; 
import RelationshipReview from '../reviews/relationship_reviews';
import { getRelationship, getRelationships } from '../../actions/relationship_actions';
import { connect } from 'react-redux'; 
import { getReviews } from '../../util/reviews_api_util';
import { fetchUsers } from '../../actions/session_actions';
import { followBuddy, unfollowBuddy } from '../../actions/session_actions'

const mSTP = (state, ownProps) => {

    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users, 
        reviews: state.entities.reviews, 
        relationships: state.entities.relationships,
        userProfile: state.entities.users[ownProps.match.params.id],
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
    fetchUsers: () => dispatch(fetchUsers()), 
    followBuddy: (object) => dispatch(followBuddy(object)), 
});

class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        this.props.fetchUsers(); 
        this.props.getRelationships(); 
        this.props.getReviews(); 
    }

    render() {

        return (
            <div>
                Home Component
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(Home); 