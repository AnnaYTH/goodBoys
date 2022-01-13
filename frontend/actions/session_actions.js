
import * as APIUtil from '../util/sessions_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// export const signup = user => dispatch => (
//   APIUtil.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

export const signup = user => dispatch => {
  return APIUtil.signup(user)
  .then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
};
        
//cannot be responseJSON?! WHY NOT? but now with responseText I'm getting an error that I cannot apply .map to it
//so we tried .responseText

export const login = user => dispatch => {
  return APIUtil.login(user)
  .then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
}; 

// export const login = user => dispatch => {
//   return APIUtil.login(user)
//     .then(user => dispatch(receiveCurrentUser(user)))
//     // .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
// }

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
