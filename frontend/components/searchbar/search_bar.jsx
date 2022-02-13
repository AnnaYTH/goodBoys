import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getSearch } from '../../actions/search_actions';
import { getReviews } from '../../actions/review_actions';
import { getRelationships } from '../../actions/relationship_actions';
import { fetchUsers } from '../../actions/session_actions';

const mSTP = state => ({
    relationships: state.entities.relationships, 
    currentUser: state.entities.users[state.session.id],
    reviews: state.entities.reviews,
    users: state.entities.users, 
})

const mDTP = dispatch => ({
    getSearch: () => dispatch(getSearch()),
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
    fetchUsers: () => dispatch(fetchUsers()), 
})

class SearchBar extends React.Component{
    constructor(props) {
        super(props); 

        this.state = {
            search: "", 
        }

        this.sendToReview = this.sendToReview.bind(this); 
        this.sendToShip = this.sendToShip.bind(this); 
        this.sendToReview = this.sendToReview.bind(this)
    }

    sendToShip(id) {
        this.props.history.push(`/relationships/${id}`)
    }

    sendToUser(id) {
        this.props.history.push(`/friends/${id}`)
    }

    sendToReview(id) {
        //not sure if I want to let them search by review... but why not...?
        this.props.history.push(`/reviews/${id}`)
    }

    setSearch(e){
        e.preventDefault(); 
        this.setState({search: e.target.value})
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