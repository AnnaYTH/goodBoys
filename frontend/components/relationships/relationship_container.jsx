import { connect } from 'react-redux'; 
import Relationship from './relationship'; 
// import { getRelationship, getRelationships, getReviews } from '../../actions/relationship_actions';
import { getRelationship, getRelationships } from '../../actions/relationship_actions';
import { getReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
    return({
        relationship: state.entities.relationships[ownProps.match.params.id], 
        relationships: (state.entities.relationships),
    })
}

const mDTP = dispatch => ({
    getRelationships: () => dispatch(getRelationships()),
    getRelationship: (relationshipId) => dispatch(getRelationship(relationshipId)), 
    getReviews: () => dispatch(getReviews()), 
})

export default connect(mSTP, mDTP)(Relationship); 