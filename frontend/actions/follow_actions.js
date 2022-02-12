// import * as FollowAPIUtil from "../util/follows_api_util"; 

// export const ADD_BUDDY = 'ADD_BUDDY'; 
// export const REMOVE_BUDDY = 'REMOVE_BUDDY'; 

// const addBuddy = user => ({
//     type: ADD_BUDDY, 
//     user: user, 
// })

// const removeBuddy = user => ({
//     type: REMOVE_BUDDY, 
//     user: user, 
// })

// // export const followBuddy = follow => dispatch => {
// //     return FollowAPIUtil.addBuddy(follow)
// //     .then(follow => 
// //         dispatch(addBuddy(follow)))
// // }

// export const followBuddy = object => dispatch => {
//     debugger; 
//     return FollowAPIUtil.addBuddy(object['follow_id'], object['user_id'])
//     .then(obj =>      
//         dispatch(addBuddy(obj['follow_id'], obj['user_id'])))
// }

// export const unfollowBuddy = followId => dispatch => {
//     return FollowAPIUtil.removeBuddy(followId)
//     .then(follow => dispatch(removeBuddy(follow)))
// }