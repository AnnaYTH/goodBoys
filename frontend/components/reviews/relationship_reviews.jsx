import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews } from '../../actions/review_actions'
// import { getRelationships, getRelationship } from '../../actions/relationship_actions'; 
// import { getRelationships, getRelationship, getReviews, getReview, createReview, editReview, deleteReview } from '../../actions/relationship_actions'; 
import { fetchUsers } from '../../actions/session_actions';


const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users, 
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    fetchUsers: () => dispatch(fetchUsers()), 
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
        this.props.getReviews(); 
        this.props.fetchUsers(); 

        let allReviews = Object.values(this.props.reviews); 
        let filtered = allReviews.filter(review => review.relationship_id === parseInt(this.props.shipId))
        // it was giving me this.props.shipId as a string and not as an integer, so I cried for a long time. 

        this.setState({
            shipReview: filtered,
        })

        //now this won't render the first time, only after I navigate away and then comes back
        // window.location.reload(); 
    }

    render() {
        const usersArr = Object.values(this.props.users)
        // this is when I insert loop to track by user_id from the array - eventually, codeFairies, if you're listening, feel free to chime in

        const shipReviews = this.state.shipReview.map((review, idx) => {
            return (
                <div className='shipReview' key={`shipReview-${idx}`}>

                    <Link to={`/friends/${(review.user_id)}`}>
                    <p>{usersArr[(review.user_id)-1].name}'s Review</p>
                    </Link>
                    <br />
                    {/* I'll go back and not hardcode this later, i promise */}


                    <Link to={`/reviews/${review.id}`}> 
                    {/* <p>Review ID: {review.id}</p> */}
                    {/* <p>relationship ID: {review.relationship_id}</p> */}
                    {/* <p>reviewer id: {review.user_id} </p> */}
                    <p>name: {review.name}</p>
                    <p>rating: {review.rating}</p>
                    <p>review: {review.body} </p>
                    <p>date reviewed: {review.created_at.split("T")[0]}</p>
                    </Link>
                    <br />
                    <hr />
                </div>
            )
        })

        if(Object.values(this.props.users).length < 2) {
            return null; 
        }; 

        return (
            <div> 
                {/* <div>
                    THESE ARE THE REVIEWS FOR ONE RELATIONSHIP 
                </div> */}
                <div>
                    {this.state.shipReview.length ? shipReviews : 'This relationship does not have any reviews yet'}
                </div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(RelationshipReview); 