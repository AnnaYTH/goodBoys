// export const getRelationshipReviews = (review) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/relationships/${review.relationship_id}/reviews`
//     })
// )

// export const getUserReviews = (review) => (
//     $.ajax({
//         method: 'GET', 
//         url: `/api/users/${review.reviewer_id}/reviews`
//     })
// )

// export const createReview = (review) => (
//     $.ajax({
//         method: 'POST', 
//         url: `api/relationships/${review.relationship_id}/review`
//     })
// )

// export const editReview


export const getReviews = () => (
    $.ajax({
        method: 'GET',
        url: `/api/review`
    })
)

export const getReview = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/review/${id}`
    })
)