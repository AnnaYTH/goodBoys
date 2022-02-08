import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer'; 
import Header from '../header'; 
import RelationshipReview from '../reviews/relationship_reviews';
import { getRelationship, getRelationships } from '../../actions/relationship_actions';
import { connect } from 'react-redux'; 
import { getReviews } from '../../util/reviews_api_util';


const mSTP = (state, ownProps) => {
    return({
        relationship: state.entities.relationships[ownProps.match.params.id], 
        relationships: (state.entities.relationships),
    })
}

const mDTP = dispatch => ({
    getRelationships: () => dispatch(getRelationships()),
    getRelationship: (relationshipId) => dispatch(getRelationship(relationshipId)), 
})

class RelationshipShip extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRelationships(); 
        // this.props.getRelationship(this.props.match.params.id); 
        // this is unnecessary because I just need to populate once with all relationships
    }

    render() {
        // debugger; 
        const ship = this.props.relationship
        // [this.props.match.params.id]; 
        if(!ship) {
            return null; 
        }

        // debugger; 
        return (
            <div className='one-ship-body'>
     
            
                <Header/>

                <p>Hey Buddy This is Ship # {this.props.match.params.id}</p>
                
                <div className='ship_horizontal'>
                    <div className='ship_col1'>
                        <p className='ship_profile_image'> 
                            <img src={ship.photo_url} alt='logo' /> 
                        </p>
                        
                        <Link to={`/relationships/${this.props.match.params.id}/create`}>
                            <button className='button'> Rate this Relationship </button>
                        </Link>
                    </div>
            
                    <div className='ship_col2'>
                        <h1> {ship.relationship_name} </h1>
                        <h2> {ship.pronounciation} </h2>
                        <h3>{ship.relationship_definition}</h3>
                        <h4>
                            <div className='ship_subtitle'> More Details </div>
                            <div className='ship_subtitle'>Ratings and Reviews</div>

                            <RelationshipReview shipId={this.props.match.params.id}/>

                            
                            <div className='ship_subtitle'>Friends and Following</div>
                        </h4>
                    </div>
                </div>


                <Footer />
            

            </div>
        )
    }
}

// export default RelationshipShip; 
export default connect(mSTP, mDTP)(RelationshipShip); 