import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview, deleteReview } from '../../actions/review_actions'
// import { getRelationships, getRelationship, getReviews, getReview, createReview, editReview, deleteReview } from '../../actions/relationship_actions'; 
import { getRelationships, getRelationship } from '../../actions/relationship_actions'; 
import Header from '../header';
import Footer from '../footer';
// import { getRelationships } from '../../actions/relationship_actions'; 
import ReactStars from "react-rating-stars-component";
import { fetchUsers } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        // relationships: state.entities.relationships,
        currentUser: state.entities.users[state.session.id],
        currentReview: state.entities.reviews[ownProps.match.params.id], 
        relationships: state.entities.relationships, 
        users: state.entities.users, 
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getReview: (id) => dispatch(getReview(id)),
    deleteReview: (id) => dispatch(deleteReview(id)), 
    getRelationships: () => dispatch(getRelationships()), 
    fetchUsers: () => dispatch(fetchUsers()), 
}); 

class OneReview extends React.Component {
    constructor(props) {
        super(props); 

        this.handleDelete = this.handleDelete.bind(this); 
    }

    componentDidMount() {
        this.props.getReviews(); 
        this.props.getReview(this.props.match.params.id); 
        
        this.props.getRelationships(); 
        this.props.fetchUsers(); 
    }

    handleDelete(e) {
        e.preventDefault(); 
        this.props.deleteReview(this.props.match.params.id); 
        this.props.history.push(`/users/${this.props.currentUser.id}`);
    }

    render() {
        const currentReview = this.props.currentReview; 
        if (!currentReview) {
            return null; 
        }
        
        // let shipId = currentReview.relationship_id; 
        const currentRelationship = this.props.relationships[currentReview.relationship_id]; 
        if(!currentRelationship) {
            return null; 
        }

        const reviewUser = this.props.users[currentReview.user_id]; 
        if(!reviewUser) {
            return null; 
        }

        const loggedUser = this.props.currentUser; 

        return (
            <div>
                <Header />
                
                {/* <div>
                    <p>
                    This is a singular Review -  # {this.props.match.params.id}
                    </p>
                    <p> It is reviewing the relationship of {currentRelationship.relationship_name}</p>
                </div> */}

                <div className='review-body'>

                    <div className='review-bottom'>
                        <div className='review-left-col'> 
                            <h1 className='review-header'> 
                            <Link to={`/friends/${reviewUser.id}`}>{reviewUser.name}'s Reviews</Link> {'>'}  {currentRelationship.relationship_name}</h1>

                            <p className='ship_profile_image'> 
                                <img src={currentRelationship.photo_url} alt='cover' /> 
                            </p>
                        </div>
                        <div className='review-right-col'>
                            <h1> {currentRelationship.relationship_name} </h1>
                            <h2> pronounced: {currentRelationship.pronounciation} </h2>
                            <hr />
                            <br />
                            <Link to={`/friends/${reviewUser.id}`}><h2> {reviewUser.name}'s review</h2></Link>
                            <p>rating: {currentReview.rating}</p> 
                            {/* change this to a star rating with pictures of stars⭐ */}
                            <p>{currentReview.body} </p>


                            {/* <h1>{currentReview.id}</h1> */}
                            {/* <p>relationship ID: {currentReview.relationship_id}</p> */}
                            {/* <p>user ID: {currentReview.user_id}</p> */}
                            {/* <p> <ReactStars /></p> */}
                            {/* <p>name: {currentReview.name}</p> */}
                        </div>

                        <div className={loggedUser.name === reviewUser.name ?'review-options' : 'review-options-hidden'}>
                            <p>{currentReview.created_at.split("T")[0]}</p>
                            · 
                            <Link to={`/reviews/${this.props.match.params.id}/edit`} className='review-options'>
                                <button> Edit </button>
                            </Link>
                             · 
                            <button onClick={this.handleDelete}>
                                Delete Review
                            </button>
                        </div>
                    </div>


                    {/* <p>Comments</p> */}


                </div>

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(OneReview); 