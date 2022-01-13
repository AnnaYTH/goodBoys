import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
<<<<<<< HEAD
        currentUser: users[session.id]
=======
>>>>>>> reviews
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
}); 
<<<<<<< HEAD
=======



>>>>>>> reviews

class RelationshipReview extends React.Component {

    render() {
        return (
            <div> THESE ARE THE REVIEWS FOR ONE RELATIONSHIP </div>
        )
    }
}

export default connect(mSTP, mDTP)(RelationshipReview); 