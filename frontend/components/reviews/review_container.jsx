import { connect } from 'react-redux'; 
import UserReview from './user_reviews';

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: users[session.id]
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
}); 

export default connect(mSTP, mDTP)(UserReview); 