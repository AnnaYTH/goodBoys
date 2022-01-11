import { connect } from 'react-redux'; 
import RelationshipShip from './relationship_ship'; 
import { getRelationship, getRelationships } from '../../actions/relationship_actions';

const mSTP = (state, ownProps) => {
    // debugger  
    return({
        relationship: state.entities.relationships[ownProps.match.params.id], 
        relationships: (state.entities.relationships),
    })
}

const mDTP = dispatch => ({
    getRelationships: () => dispatch(getRelationships()),
    getRelationship: (relationshipId) => dispatch(getRelationship(relationshipId))
})

export default connect(mSTP, mDTP)(RelationshipShip); 