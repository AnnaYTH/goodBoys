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
        // this.sortByRelationship = this.sortByRelationship.bind(this); 
        this.state = {
            shipReview: [],
        }
    }

    componentDidMount() {
        // debugger; 
        this.props.getReviews(); 

        let allReviews = Object.values(this.props.reviews); 
        let filtered = allReviews.filter(review => review.relationship_type === this.props.shipId)

        this.setState({
            shipReview: filtered,
        })
        debugger; 
    }

    // componentDidUpdate() {
    //     if (this.sortByRelationship === null) {

    //     }
    // }

    // sortByRelationship() {
    //     let shipReviews = []; 
    //     let allReviews = Object.values(this.props.reviews); 

    //     allReviews.forEach(review => {
    //         debugger; 
    //         if (review.relationship_id === this.props.shipId) {
    //             shipReviews.push(review); 
    //         }
    //     })
    //     // debugger; 
    //     return shipReviews; 
    // }

    render() {

        const shipReviews = this.state.shipReview.map((review, idx) => {
            return (
                <div className='shipReview' key={`shipReview-${idx}`}>
                    <p>relationship ID: {review.relationship_type}</p>
                    <p>reviewer id: {review.reviewer_id} </p>
                    <p>name: {review.name}</p>
                    <p>rating: {review.rating}</p>
                    <p>review: {review.review} </p>
                    <p>date reviewed: {review.created_at.split("T")[0]}</p>
                </div>
            )
        })

        // debugger; 
        return (
            <div> 
                <div>
                    THESE ARE THE REVIEWS FOR ONE RELATIONSHIP 
                </div>
                <div>
                    {shipReviews}
                </div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(RelationshipReview); 