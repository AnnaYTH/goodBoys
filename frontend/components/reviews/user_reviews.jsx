import React from 'react';
// import { Link } from 'react-router-dom';

class UserReview extends React.Component {

    constructor(props) {
        super(props); 
        this.sortByUser = this.sortByUser.bind(this); 
    }

    componentDidMount() {
        this.props.getReviews();  
    }

    sortByUser() {
        let userReviews = []; 
        let allReviews = Object.values(this.props.reviews); 

        allReviews.forEach(review => {
            if (review.reviewer_id === this.props.currentUser.id) {
                userReviews.push(review); 
            }
        })
        return userReviews; 
    }

    render() {
        debugger; 
        
        const userReviews = this.sortByUser().map((review, idx) => {
            return (
                <div className='userReview' key={`userReview-${idx}`}>
                    <p>relationship ID: {review.relationship_type}</p>
                    <p>reviewer id: {review.reviewer_id} </p>
                    <p>name: {review.name}</p>
                    <p>rating: {review.rating}</p>
                    <p>review: {review.review} </p>
                    <p>date reviewed: {review.created_at.split("T")[0]}</p>
                </div>
            )
        })

        return (
            <div> 

                <div>
                    THESE ARE THE REVIEWS THAT ONE USER HAS WRITTEN
                </div>
                
                <div>
                    {userReviews}
                </div>
            </div>
        )
    }
}

export default UserReview; 
// if a user has not written any reviews, render "No reviews yet!"