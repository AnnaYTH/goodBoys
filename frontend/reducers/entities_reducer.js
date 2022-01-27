import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import relationshipReducer from "./relationship_reducer";
import reviewReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer, 
  relationships: relationshipReducer, 
  reviews: reviewReducer,
});

export default entitiesReducer;