import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../actions/review_actions";

const reviewReducer = (state={}, action) => {
    Object.freeze(); 

    switch(action.type) {
        case RECEIVE_REVIEW: 
            return Object.assign({}, state, {[action.review.id]: action.review })
        case RECEIVE_REVIEWS: 
            return action.reviews
        default: 
            return state; 
    }
}

export default reviewReducer; 