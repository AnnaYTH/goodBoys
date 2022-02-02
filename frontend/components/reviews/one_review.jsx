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
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getReview: (id) => dispatch(getReview(id)),
}); 

class OneReview extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div>
                    This is a singular Review 
                </div>

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(OneReview); 