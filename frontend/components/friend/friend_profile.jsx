import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { getReviews, getReview } from '../../actions/review_actions'; 
import { getRelationship, getRelationships } from '../../actions/relationship_actions';
import React from 'react';
import Footer from '../footer'; 
import Header from '../header'; 

// import { followBuddy, unfollowBuddy } from '../../actions/follow_actions'
import { followBuddy, unfollowBuddy } from '../../actions/session_actions'

const mSTP = (state, ownProps) => {

    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users, 
        reviews: state.entities.reviews, 
        relationships: state.entities.relationships,
        userProfile: state.entities.users[ownProps.match.params.id],
    })
}

const mapDispatchToProps = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
    fetchUsers: () => dispatch(fetchUsers()), 
    followBuddy: (object) => dispatch(followBuddy(object)), 
});


class FriendProfile extends React.Component {


    constructor(props) {
        super(props)

        this.toggleFollow = this.toggleFollow.bind(this); 
    }
    
    componentDidMount() {
        this.props.fetchUsers(); 
        this.props.getRelationships(); 
        this.props.getReviews(); 
    }

    toggleFollow(e) {
        e.preventDefault(); 
        let humanNumber = parseInt(this.props.match.params.id)
        let follow = {'follow_id': humanNumber, 'user_id': this.props.currentUser.id}

        this.props.followBuddy(follow); 

        // codeFairies - insert error handling here!
        this.props.history.push(`/relationships`) ;
    }
 
    render() {
 
        const buddy = this.props.userProfile; 
        if(!buddy) {
            return null; 
        }

        const friendReviews = this.props.reviews.map((review, idx) => {
            if(ownProps.match.params.id === review.reviewer_id) {
                return (
                    <Link to={`reviews/${review.id}`}>
                        <p>name: {review.name}</p>
                        <p>rating: {review.rating}</p>
                        <p>review: {review.body} </p>
                        <p>date reviewed: {review.created_at.split("T")[0]}</p>
                    </Link>
                )
            }
        })

        return (
            <div>
                <Header/>

                <div className='friend-body'>

                    <p> Name: {buddy.name} </p>
                    <p> Email: {buddy.email} </p>
                    <p> Member Since: {buddy.created_at.split("T")[0]} </p>

                    <button onClick={this.toggleFollow}> Follow </button>

                </div>

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(FriendProfile);