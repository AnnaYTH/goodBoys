import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview, createReview } from '../../actions/review_actions'
// import { getRelationships, getRelationship, getReviews, getReview, createReview } from '../../actions/relationship_actions'; 
import { getRelationships, getRelationship } from '../../actions/relationship_actions'; 
import Header from '../header';
import Footer from '../footer';
// import StarRatings from 'react-star-ratings';
import ReactStars from "react-rating-stars-component";

const mSTP = (state, ownProps) => {
    // debugger; 
    return ({
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id],
        currentRelationshipId: ownProps.match.params.id, 
        relationship: state.entities.relationships[ownProps.match.params.id],
        relationships: (state.entities.relationships),
        review: {
            user_id: state.session.id,
            name: '', 
            relationship_id: ownProps.match.params.id,
            body: '', 
            rating: ''
        }, 
    })
}

const mDTP = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    // getReview: (id) => dispatch(getReview(id)),
    getRelationships: () => dispatch(getRelationships()), 
    createReview: (review) => dispatch(createReview(review)),
}); 





class CreateReview extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.review; 

        this.handleSubmit = this.handleSubmit.bind(this); 
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
        this.props.createReview(this.state)
        // console.log('review is created, good job')\

        // only if there are no errors, then I will send them back, else wish I will render the errors
        // or just hope that the user isn't a dumbbie and doesn't create a bad review
        // the relationship does not update immediately with the new review yet
        this.props.history.push(`/relationships/${this.props.currentRelationshipId}`) ;
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }


    render() {

        const ship = this.props.relationship
        if(!ship) {
            return null; 
        }

        const starRating = {
            size: 25, 
            onChange: (newValue) => {
                this.setState({rating: newValue})
            }
        }

        // debugger; 
        return (
            <div>
                <Header />
                
                <div className='review-body'>
                    {/* <h1> CREATE REVIEW FORM IS HERE! </h1>
                    <h1>You are currently reviewing relationship # {ship.id}</h1> */}
                    <h1 className='create-review-header'>
                        <p> {ship.relationship_name} {'>'} Review {'>'} Create </p>
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
                            <textarea value={this.state.body} onChange={this.update('body')} cols="100" rows="20" placeholder="Review..."> 
                            </textarea>
                                {/* <input type="text" value={this.state.body} onChange={this.update('body')} /> */}
                        </label>

                        <br />

                        <button className='review-button' type='submit' value='Create Review'> Save </button>

                    </form>
                </div>

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(CreateReview); 