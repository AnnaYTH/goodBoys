import * as ReviewsUtil from '../util/reviews_api_util'; 

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'; 
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'; 

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW, 
        review: review, 
    }
}

const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS, 
        reviews: reviews,
    }
}

export const getReview = (id) => dispatch => {
    return ReviewsUtil.getReview(id)
    .then(review => dispatch(receiveReview(review)))
}

export const getReviews = () => dispatch => {
    return ReviewsUtil.getReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = review => dispatch => {
    // debugger; 
    return ReviewsUtil.createReview(review)
        .then(review => {
            // debugger; 
            return dispatch(receiveReview(review))
        }
    )
}

export const editReview = review => dispatch => {
    return ReviewsUtil.editReview(review)
        .then(review => {
            return dispatch(receiveReview(review))
        }
    )
}