import * as RelationshipApiUtil from '../util/relationships_api_util'; 

export const RECEIVE_RELATIONSHIP = 'RECEIVE_RELATIONSHIP'; 
export const RECEIVE_RELATIONSHIPS = 'RECEIVE_RELATIONSHIPS'; 

const receiveRelationship = (relationship) => {
    return {
        type: RECEIVE_RELATIONSHIP, 
        relationship: relationship,
    }
}

const receiveRelationships = (relationships) => {
    return {
        type: RECEIVE_RELATIONSHIPS, 
        relationships: relationships, 
    }
}

export const getRelationship = (id) => dispatch => {
    return RelationshipApiUtil.getRelationship(id)
        .then(relationship => dispatch(receiveRelationship(relationship)))
}

export const getRelationships = () => dispatch => {
    return RelationshipApiUtil.getRelationships()
        .then(relationships => dispatch(receiveRelationships(relationships)))
}







// import * as ReviewsUtil from '../util/reviews_api_util'; 

// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'; 
// export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'; 
// export const REMOVE_REVIEW = 'REMOVE_REVIEW'; 

// const receiveReview = (review) => {
//     return {
//         type: RECEIVE_REVIEW, 
//         review: review, 
//     }
// }

// const receiveReviews = (reviews) => {
//     return {
//         type: RECEIVE_REVIEWS, 
//         reviews: reviews,
//     }
// }

// const removeReview = (id) => {
//     return {
//         type: REMOVE_REVIEW, 
//         id: id, 
//     }
// }

// export const getReview = (id) => dispatch => {
//     return ReviewsUtil.getReview(id)
//     .then(review => dispatch(receiveReview(review)))
// }

// export const getReviews = () => dispatch => {
//     return ReviewsUtil.getReviews()
//         .then(reviews => dispatch(receiveReviews(reviews)))
// }

// export const createReview = review => dispatch => {
//     return ReviewsUtil.createReview(review)
//         .then(relationship => {
//             dispatch(receiveRelationship(relationship))
//         }
//     )
// }

// export const editReview = review => dispatch => {
//     return ReviewsUtil.editReview(review)
//     .then(relationship => {
//         dispatch(receiveRelationship(relationship))
//         }
//     )
// }

// export const deleteReview = id => dispatch => {
//     return ReviewsUtil.deleteReview(id)
//         .then(relationship => {
//             dispatch(receiveRelationship(relationship))
//         }
//     )
// }