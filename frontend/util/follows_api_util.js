export const addBuddy = (follow) => {
    // debugger; 
    return $.ajax({
        method: 'POST', 
        url: 'api/follows', 
        data: { follow }
    })
}; 

export const removeBuddy = followId => {
    return $.ajax({
        method: 'DELETE', 
        url: `api/follows/${followId}`
    })
}; 