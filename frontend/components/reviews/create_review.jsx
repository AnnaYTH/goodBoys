import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview, createReview } from '../../actions/review_actions'
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
                    <h1> CREATE REVIEW FORM IS HERE! </h1>
                    <h1>You are currently reviewing relationship # {ship.id}</h1>
                    <h1 className='review-header'> 
                        {ship.relationship_name} {'>'} Review {'>'} Create 
                    </h1>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            My Rating: 
                            <ReactStars {... starRating} />
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
                        </label>


                        <label>
                            Name: 
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </label>
                        <br />
                        {/* <p>RADIO BUTTONS HERE FOR STAR REVIEW </p> */}

                        <label>
                            Review: 
                            <input type="text" value={this.state.body} onChange={this.update('body')} />
                        </label>

                        <br />

                        <button type='submit' value='Create Review'> Create Review </button>

                    </form>
                </div>

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(CreateReview); 