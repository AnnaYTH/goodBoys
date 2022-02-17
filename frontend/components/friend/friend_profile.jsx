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

        const friendReviews = Object.values(this.props.reviews).map((review, idx) => {
            if(this.props.userProfile.id === review.user_id) {
                return (
                <div className='userReview' key={`buddyReview-${idx}`}>
                    <Link to={`/reviews/${review.id}`}>
                        <p>name: {review.name}</p>
                        <p>rating: {review.rating}</p>
                        <p>review: {review.body} </p>
                        <p>date reviewed: {review.created_at.split("T")[0]}</p>
                        <br />
                    </Link>
                </div>
                )
            }
        })

        return (
            <div>
                <Header/>

                <div className='friend-body'>
                    <h1 className='friend_name'> {buddy.name} </h1>
                    <hr />

                    <div className='friend-library-card'>
                        <div className='friend-library-card-left'>
                            <img className='nypl-logo' src={window.nypl_logo} alt="nypl-logo" />
                        </div>

                    {/* logo and colors taken from the NYPL github, thank you! */}


                        <div className='friend-library-card-right'>
                            <p className='nypl'> New York </p>
                            <p className='nypl'> Public </p>
                            <p className='nypl-bold'>   Relationships</p>
                            <p className='friend-details'> Name: {buddy.name} </p>
                            <p className='friend-details'> Email: {buddy.email} </p>
                            <p className='friend-details'> Member Since: {buddy.created_at.split("T")[0]} </p>
                        </div>
                    </div>

                    <div className='friend_profile_meat'>
                        <hr />
                        <button className="logout_button" onClick={this.toggleFollow}> Follow </button>
                        <hr />
                        <div className='userReview'>
                            <p className='profile-subheader'> Reviews Written by {buddy.name} </p>
                            {friendReviews}
                        </div>
                    </div>

                </div>

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(FriendProfile);