import { connect } from 'react-redux'; 
import Relationship from './relationship'; 
import { getRelationship, getRelationships } from '../../actions/relationship_actions';

const mSTP = (state, ownProps) => {
    return({
        relationship: state.entities.songs[ownProps.match.params.id], 
        relationships: Object.values(state.entities.relationships)
    })
}

const mDTP = dispatch => ({
    getRelationships: () => dispatch (getRelationships()),
    getRelationship: () => dispatch(getRelationship(relationshipId))
})

export default connect(mSTP, mDTP)(Relationship); 