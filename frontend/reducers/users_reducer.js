import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/session_actions';
import { ADD_BUDDY, REMOVE_BUDDY } from '../actions/follow_actions'; 

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case ADD_BUDDY: 
      // debugger; 
    case REMOVE_BUDDY: 
      const nextState = Object.assign({}, state)
      delete nextState[action.user.id]
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;