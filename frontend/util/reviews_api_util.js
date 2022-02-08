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
        url: `/api/reviews`
    })
)

export const getReview = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${id}`
    })
)

export const createReview = review => {
    return $.ajax({
        method: 'POST', 
        url: 'api/reviews', 
        data: {review},
    })
}; 

export const editReview = review => {
    return $.ajax({
        method: 'PATCH', 
        url: `api/reviews/${review.id}`, 
        data: {review},
    })
}; 

export const deleteReview = (id) => {
    return $.ajax({
        method: "DELETE", 
        url: `api/reviews/${id}`
    })
}