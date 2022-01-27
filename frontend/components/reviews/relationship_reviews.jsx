import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews } from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
}); 



class RelationshipReview extends React.Component {

    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.getReviews(); 
    }

    render() {
        return (
            <div> THESE ARE THE REVIEWS FOR ONE RELATIONSHIP </div>
        )
    }
}

export default connect(mSTP, mDTP)(RelationshipReview); 