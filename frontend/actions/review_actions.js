import * as ReviewsUtil from '../util/reviews'; 

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'; 
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'; 

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW, 
        review: review, 
    }
}

const receiveReviews = (review) => {
    return {
        type: RECEIVE_REVIEWS, 
        reviews: reviews,
    }
}

export const getReview = (id) => dispatch => {
    return ReviewsUtil.getReview(id)
    .then(review => dispatch
    (receiveReview(review)))
}

export const getReviews = () => dispatch => {
    return ReviewsUtil.getReviews()
        .then(reviews => dispatch
        (receiveReviews(reviews)))
}