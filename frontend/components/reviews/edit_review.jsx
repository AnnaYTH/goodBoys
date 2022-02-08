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

                <h1> EDIT REVIEW FORM IS HERE! </h1>
              
                <h1>You are currently editing review # {this.props.currentReviewId} for the relationship of {rev.relationship_id} </h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" value={this.state.name} onChange={this.update('name')} />
                    </label>

                    <p>RADIO BUTTONS HERE FOR STAR REVIEW </p>

                    <label>
                        Rating: 
                        <ReactStars {... starRating} activeColor='#F6B443'/>
                        {/* <input type="radio" name='rating' value='1'  onChange={this.update('rating')}/>
                        <label for='one-star'> one </label>

                        <input type="radio" name='rating' value='2'  onChange={this.update('rating')}/>
                        <label for='two-star'> two </label>

                        <input type="radio" name='rating' value='3'  onChange={this.update('rating')}/>
                        <label for='three-star'> three </label>

                        <input type="radio" name='rating' value='4'  onChange={this.update('rating')}/>
                        <label for='four-star'> four </label>
                        
                        <input type="radio" name='rating' value='5'  onChange={this.update('rating')}/>
                        <label for='five-star'> five </label> */}
                        <br />
                    </label>

                    <label>
                        Review: 
                        <input type="text" value={this.state.body} onChange={this.update('body')} />
                    </label>

                    
                    <button type='submit' value='Create Review'> Edit Review </button>

                </form>

                <button onClick={this.handleDelete}> Delete Review </button>
                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(EditReview); 