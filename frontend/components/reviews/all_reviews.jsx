import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview } from '../../actions/review_actions'
import Header from '../header';
import Footer from '../footer';

const mSTP = (state) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getReview: (id) => dispatch(getReview(id)),
}); 

class AllReviews extends React.Component {

    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.getReviews(); 
    }

    render() {
        const reviewArr = Object.values(this.props.reviews); 
        const allReviews = reviewArr.map((review, idx) => {
            return (
                <div className='allReviews' key={`allReviews-${idx}`}>
                    <Link to={`/reviews/${review.id}`}> Review ID: {review.id}
                    </Link>
                    <p>relationship ID: {review.relationship_id}</p>
                    <p>user ID: {review.user_id}</p>
                    <p>name: {review.name}</p>
                    <p>rating: {review.rating}</p>
                    <p>review: {review.review} </p>
                    <p>date reviewed: {review.created_at.split("T")[0]}</p>
                </div>
            )
        })


        return (
            <div>
                <Header />
                
                <h2  className='title_head'>All Reviews</h2>
                <div>
                    {allReviews}
                </div>

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(AllReviews); 