import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview } from '../../actions/review_actions'
import Header from '../header';
import Footer from '../footer';

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        currentReview: state.entities.reviews[ownProps.match.params.id],
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getReview: (id) => dispatch(getReview(id)),
}); 

class OneReview extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.getReviews(); 
        this.props.getReview(this.props.match.params.id); 
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.reviews !== this.props.reviews) {
    //         this.props.getReviews(); 
    //     }
    // }  

    render() {
        const currentReview = this.props.currentReview; 

        if (!currentReview) {
            return null; 
        }

        // debugger; 
        return (
            <div>
                <Header />
                <div>
                    This is a singular Review -  # {this.props.match.params.id}
                </div>
                <div>
                    <h1>{currentReview.id}</h1>
                    <p>relationship ID: {currentReview.relationship_id}</p>
                    <p>user ID: {currentReview.user_id}</p>
                    <p>name: {currentReview.name}</p>
                    <p>rating: {currentReview.rating}</p>
                    <p>review: {currentReview.review} </p>
                    <p>date reviewed: {currentReview.created_at.split("T")[0]}</p>
                </div>
                <button> Edit </button>
                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(OneReview); 