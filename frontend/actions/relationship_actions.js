import * as RelationshipApiUtil from '../util/relationships_api_util'; 

export const RECEIVE_RELATIONSHIP = 'RECEIVE_RELATIONSHIP'; 
export const RECEIVE_RELATIONSHIPS = 'RECEIVE_RELATIONSHIPS'; 

const receiveRelationship = (relationship) => {
    return {
        type: RECEIVE_RELATIONSHIP, 
        relationship: relationship,
    }
}

const receiveRelationships = (relationships) => {
    return {
        type: RECEIVE_RELATIONSHIPS, 
        relationships: relationships, 
    }
}



export const getRelationship = (id) => dispatch => {
    return RelationshipApiUtil.getRelationship(id)
        .then(relationship => dispatch(receiveRelationship(relationship)))
}

export const getRelationships = () => dispatch => {
    return RelationshipApiUtil.getRelationships()
        .then(relationships => dispatch(receiveRelationships(relationships)))
}