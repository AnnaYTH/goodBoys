import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview, createReview, editReview, deleteReview } from '../../actions/review_actions'
import { getRelationships, getRelationship } from '../../actions/relationship_actions'; 
import Header from '../header';
import Footer from '../footer';
import ReactStars from "react-rating-stars-component";

const mSTP = (state, ownProps) => {
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        currentReviewId: ownProps.match.params.id, 
        relationships: (state.entities.relationships),
        review: state.entities.reviews[ownProps.match.params.id], 
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
    editReview: (review) => dispatch(editReview(review)), 
    deleteReview: (id) => dispatch(deleteReview(id)), 
}); 

class EditReview extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.review; 

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDelete = this.handleDelete.bind(this); 
    }

    componentDidMount() {
        // debugger; 
        this.props.getReviews(); 
        // this.props.getReview(this.props.match.params.id); 
        this.props.getRelationships(); 
        // this.props.createReview(review); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.editReview(this.state)
        // console.log('review is created, good job')\

        // only if there are no errors, then I will send them back, else wish I will render the errors
        // or just hope that the user isn't a dumbbie and doesn't create a bad review
        this.props.history.push(`/reviews/${this.props.currentReviewId}`) ;
    }

    handleDelete(e) {
        e.preventDefault(); 
        debugger; 
        this.props.deleteReview(this.state.id)
        this.props.history.push(`/users/${this.props.currentUser.id}`); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }


    render() {
        
        const rev = this.props.review
        if(!rev) {
            return null; 
        }

        const stateName = this.state.name; 
        if(!stateName) {
            return null; 
        }

        const ship = this.props.relationships[rev.relationship_id]
        if(!ship) {
            return null; 
        }

        const starRating = {
            size: 25, 
            onChange: (newValue) => {
                this.setState({rating: newValue})
            }
            // activeColor: '#F6B443',This is not working, i'll figure it out later
        }

        // debugger; 
        return (
            <div>
                <Header />
              
                {/* <h1>You are currently editing review # {this.props.currentReviewId} for the relationship of {ship.name} </h1> */}

                <div className='review-body'>

                    <h1 className='create-review-header'>
                        <p> {ship.relationship_name} {'>'} Review {'>'} Edit </p>
                    </h1>


                    <div className='create-review-middle'>
                        <div className='create-review-middle-left'>
                            <img src={ship.photo_url} alt={ship.relationship_name} className='image-create' /> 
                        </div >
                        <div className='create-review-middle-right'>
                            <h1> {ship.relationship_name} </h1>
                            <h2> pronounced: {ship.pronounciation} </h2>
                        </div>
                    </div>


                    <form onSubmit={this.handleSubmit} className='create-review-bottom'>
                        <label className='review-rating'>
                            My rating: 
                            <ReactStars {... starRating} />
                        </label>

                        <label className='name-rating'>
                            Name of Subject: 
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </label>

                        <br />

                        <label className='think-rating'>
                            What did you think? 
                            <br />
                            <input type="text" value={this.state.body} onChange={this.update('body')} />
                        </label>

                        <br />
                        <button className='review-button'  type='submit' value='Create Review'> Save </button>
                        
                    </form>

                    <button className='review-button' onClick={this.handleDelete}> Delete </button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(EditReview); 