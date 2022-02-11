export const addBuddy = (follow_id, user_id) => {
    debugger; 
    return $.ajax({
        method: 'POST', 
        url: 'api/follows', 
        data: { follow_id, user_id }
    })
}; 

export const removeBuddy = followId => {
    return $.ajax({
        method: 'DELETE', 
        url: `api/follows/${followId}`
    })
}; 