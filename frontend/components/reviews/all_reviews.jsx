import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview } from '../../actions/review_actions'; 
// import { getRelationship, getRelationships, getReviews, getReview } from '../../actions/relationship_actions';
// import { getRelationship, getRelationships } from '../../actions/relationship_actions';
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
                    <Link to={`/reviews/${review.id}`}> 
                    {/* Review ID: {review.id} */}
                    {/* <p>relationship ID: {review.relationship_id}</p> */}
                    {/* <Link to={`/friends/${review.user_id}`}>
                        <p>user ID: {review.user_id}</p>
                    </Link> */}
                    <p>name: {review.name}</p>
                    <p>rating: {review.rating}</p>
                    <p>review: {review.body} </p>
                    <p>date reviewed: {review.created_at.split("T")[0]}</p>
                    <br />
                    <br />
                    <hr />
                    </Link>
                </div>
            )
        })

        const recentReviews = reviewArr.map((review, idx) => {
            if(idx >= (reviewArr.length - 10) ) {
                return (
                    <div className='allReviews' key={`allReviews-${idx}`}>
                    <Link to={`/reviews/${review.id}`}> 
                    <p>name: {review.name}</p>
                    <p>rating: {review.rating}</p>
                    <br />
                    <p>review: {review.body} </p>
                    <br />
                    <p>date reviewed: {review.created_at.split("T")[0]}</p>
                    <br />
                    <br />
                    <hr />
                    </Link>
                </div>
                )
            }
        })


        return (
            <div>
                <Header />
                <div className='recent-review-body'>
                    <h2 className='title_head'>Recent Reviews</h2>
                    <div>
                        {recentReviews}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(AllReviews); 