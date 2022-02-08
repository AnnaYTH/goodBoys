import * as ReviewsUtil from '../util/reviews_api_util'; 

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'; 
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'; 
export const REMOVE_REVIEW = 'REMOVE_REVIEW'; 

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

const removeReview = (id) => {
    return {
        type: REMOVE_REVIEW, 
        id: id, 
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

export const deleteReview = id => dispatch => {
    return ReviewsUtil.deleteReview(id)
        .then(id => (dispatch(removeReview(id))))
}