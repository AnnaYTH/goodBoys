import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import relationshipReducer from "./relationship_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer, 
  relationships: relationshipReducer
});

export default entitiesReducer;