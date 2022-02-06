import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getReviews, getReview, createReview } from '../../actions/review_actions'
import { getRelationships, getRelationship } from '../../actions/relationship_actions'; 
import Header from '../header';
import Footer from '../footer';

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
            review: '', 
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
        // console.log('review is created, good job')
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }


    render() {

        const ship = this.props.relationship

        if(!ship) {
            return null; 
        }

        // debugger; 
        return (
            <div>
                <Header />

                <h1> CREATE REVIEW FORM IS HERE! </h1>
                <h1>You are currently reviewing relationship # {this.state.relationship_id}</h1>
                <h1>{this.props.relationship.relationship_name}</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" value={this.state.name} onChange={this.update('name')} />
                    </label>

                    <p>RADIO BUTTONS HERE FOR STAR REVIEW </p>

                    <label>
                        Rating: 
                        <input type="radio" name='rating'/>
                        <label for='one-star'> one </label>
                        <input type="radio" name='rating'/>
                        <label for='two-star'> two </label>
                        <input type="radio" name='rating'/>
                        <label for='three-star'> three </label>
                        <input type="radio" name='rating'/>
                        <label for='four-star'> four </label>
                        <input type="radio" name='rating'/>
                        <label for='five-star'> five </label>
                        <br />
                    </label>

                    <label>
                        Review: 
                        <input type="text" value={this.state.review} onChange={this.update('review')} />
                    </label>


                    <button type='submit' value='Create Review'> Create Review </button>

                </form>

                <Footer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(CreateReview); 