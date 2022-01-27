import { connect } from 'react-redux'; 
import UserReview from './user_reviews';
import { getReviews } from '../../actions/review_actions'

const mSTP = (state) => {
    // debugger; 
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
}); 

export default connect(mSTP, mDTP)(UserReview); 