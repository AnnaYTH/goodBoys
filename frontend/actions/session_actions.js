
import * as APIUtil from '../util/sessions_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"; 
export const RECEIVE_USER = "RECEIVE_USER"

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS, 
  users: users, 
})

const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user, 
})

export const signup = user => dispatch => {
  return APIUtil.signup(user)
  .then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
};

export const login = user => dispatch => {
  return APIUtil.login(user)
  .then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
}; 

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
  .then(users => 
    dispatch(receiveAllUsers(users)))
)

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
  .then(user => 
    dispatch(receiveUser(user)))
)






import * as FollowAPIUtil from "../util/follows_api_util"; 

export const ADD_BUDDY = 'ADD_BUDDY'; 
export const REMOVE_BUDDY = 'REMOVE_BUDDY'; 

const addBuddy = obj => ({
    type: ADD_BUDDY, 
    obj: obj, 
})

const removeBuddy = followId => ({
    type: REMOVE_BUDDY, 
    followId: followId, 
})

// export const followBuddy = follow => dispatch => {
//     return FollowAPIUtil.addBuddy(follow)
//     .then(follow => 
//         dispatch(addBuddy(follow)))
// }

export const followBuddy = object => dispatch => {
    return FollowAPIUtil.addBuddy(object['follow_id'], object['user_id'])
    .then(user => dispatch(receiveUser(user)))}; 

export const unfollowBuddy = followId => dispatch => {
    return FollowAPIUtil.removeBuddy(followId)
    .then(user => dispatch(receiveUser(user)))};