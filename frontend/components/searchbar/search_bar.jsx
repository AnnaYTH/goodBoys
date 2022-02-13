import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getSearch } from '../../actions/search_actions';

const mSTP = state => ({
    relationships = state.entities.relationships
})

const mDTP = dispatch => ({
    getSearch: () => dispatch(getSearch())
})

class SearchBar extends React.Component{
    constructor(props) {
        super(props); 
    }

    render() {

        return(
            <div>
                This is the Search Bar 
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SearchBar); 