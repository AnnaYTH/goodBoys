import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview, createReview } from '../../actions/review_actions'
import Header from '../header';
import Footer from '../footer';

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        currentRelationshipId: this.props.match.params.id
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    // getReview: (id) => dispatch(getReview(id)),
    // createReview: (review) => dispatch(createReview(review)),
}); 

class CreateReview extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            user_id: this.props.currentUser, 
            name: '', 
            relationship_id: this.props.reviews[this.props.match.params.id], 
            review: '', 
            rating: ''
        }
    }

    componentDidMount() {
        // debugger; 
        // this.props.getReviews(); 
        // this.props.getReview(this.props.match.params.id); 
        // this.props.createReview(review); 
    }

    handleSubmit() {
        console.log('review is created, good job')
    }


    render() {
        // const currentReview = this.props.currentReview; 

        // if (!currentReview) {
        //     return null; 
        // }


        return (
            <div>
                <Header />

                CREATE REVIEW FORM IS HERE!
                {/* <button onClick={this.handleSubmit()}> Submit
                </button> */}

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(CreateReview); 