import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
// import reviewReducer from './reviews_reducer';
// import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  // reviews: reviewReducer,
  // users: usersReducer, 
});

export default rootReducer;
