import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
}); 

class OneReview extends React.Component {

    render() {
        return (
            <div> This is a singular Review </div>
        )
    }
}

export default connect(mSTP, mDTP)(OneReview); 