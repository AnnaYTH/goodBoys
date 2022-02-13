import { fetchSearch } from "../util/search_api_util";

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'; 

const receiveSearch = data => ({
    type: RECEIVE_SEARCH, 
    data: data, 
}); 

export const getSearch = () => dispatch => {
    return fetchSearch()
        .then(data => {
            dispatch(receiveSearch(data))
        })
}