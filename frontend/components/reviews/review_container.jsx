import { connect } from 'react-redux'; 
import UserReview from './user_reviews';
import { getReviews } from '../../actions/review_actions'
import { getRelationships, getRelationship } from '../../actions/relationship_actions'; 
// import { getRelationships, getRelationship, getReviews, getReview, createReview, editReview, deleteReview } from '../../actions/relationship_actions'; 
import { fetchUsers } from '../../actions/session_actions';


const mSTP = (state) => {

    return ({
        reviews: state.entities.reviews,
        // relationships: state.entities.relationships, 
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users, 
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    fetchUsers: () => dispatch(fetchUsers()), 
}); 

export default connect(mSTP, mDTP)(UserReview); 