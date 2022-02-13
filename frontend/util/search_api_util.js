export const fetchSearch = () => {
    return $.ajax({
        url: 'api/relationships', 
        method: 'GET',
    })
}