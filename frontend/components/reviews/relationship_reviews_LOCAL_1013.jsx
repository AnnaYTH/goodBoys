import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: users[session.id]
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
}); 

class RelationshipReview extends React.Component {

    render() {
        return (
            <div> THESE ARE THE REVIEWS FOR ONE RELATIONSHIP </div>
        )
    }
}

export default connect(mSTP, mDTP)(RelationshipReview); 