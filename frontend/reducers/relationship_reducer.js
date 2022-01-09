import { RECEIVE_RELATIONSHIP, RECEIVE_RELATIONSHIPS } from "../actions/relationship_actions";

const relationshipReducer = (state = {}, action) => {
    Object.freeze(); 
    switch(action.type) {
        case RECEIVE_RELATIONSHIP: 
            return Object.assign({}, state, {[action.relationship.id]: action.relationship })
        case RECEIVE_RELATIONSHIPS: 
            return action.relationships 
        default: 
            return state; 
    }
}

export default relationshipReducer; 