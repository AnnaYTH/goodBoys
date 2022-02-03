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
        let filtered = allReviews.filter(review => review.relationship_id === parseInt(this.props.shipId))
        // it was giving me this.props.shipId as a string and not as an integer, so I cried for a long time. 

        this.setState({
            shipReview: filtered,
        })
        // debugger; 

        //now this won't render the first time, only after I navigate away and then comes back
        // window.location.reload(); 
    }

    render() {

        const shipReviews = this.state.shipReview.map((review, idx) => {
            return (
                <div className='shipReview' key={`shipReview-${idx}`}>
                    <Link to={`/reviews/${review.id}`}> Review ID: {review.id}
                    </Link>
                    <p>relationship ID: {review.relationship_id}</p>
                    <p>reviewer id: {review.user_id} </p>
                    <p>name: {review.name}</p>
                    <p>rating: {review.rating}</p>
                    <p>review: {review.review} </p>
                    <p>date reviewed: {review.created_at.split("T")[0]}</p>
                    <hr />
                </div>
            )
        })

        // if (!shipReviews) {
        //     return null; 
        // }

        return (
            <div> 
                <div>
                    THESE ARE THE REVIEWS FOR ONE RELATIONSHIP 
                </div>
                <div>
                    {this.state.shipReview.length ? shipReviews : 'This relationship does not have any reviews yet'}
                </div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(RelationshipReview); 