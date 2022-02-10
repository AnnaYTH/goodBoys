import { connect } from 'react-redux'; 
import UserReview from './user_reviews';
import { getReviews } from '../../actions/review_actions'
// import { getRelationships, getRelationship } from '../../actions/relationship_actions'; 
import { getRelationships, getRelationship, getReviews, getReview, createReview, editReview, deleteReview } from '../../actions/relationship_actions'; 

const mSTP = (state) => {
    // debugger; 
    return ({
        reviews: state.entities.relationships.reviews,
        relationships: state.entities.relationships, 
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
}); 

export default connect(mSTP, mDTP)(UserReview); 