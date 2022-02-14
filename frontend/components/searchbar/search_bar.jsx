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

        // this.sendToReview = this.sendToReview.bind(this); 
        this.sendToShip = this.sendToShip.bind(this); 
        this.sendToUser = this.sendToUser.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        // this.handleSearch = this.handleSearch.bind(this); 
    }

    componentDidMount() {
        debugger;
        this.props.fetchUsers(); 
        this.props.getRelationships(); 
    }

    sendToShip(id) {
        this.props.history.push(`/relationships/${id}`)
    }

    sendToUser(id) {
        this.props.history.push(`/friends/${id}`)
    }

    // sendToReview(id) {
    //     //not sure if I want to let them search by review... but why not...? errrr, maybe I'll come back to this later, for now it is unneccessary 
    //     this.props.history.push(`/reviews/${id}`)
    // }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            search: e.target.value,
        }) 
    }

    // handleSearch() {
    //     const results = []; 

    //     this.props.relationships.forEach(ship => {
    //         if(ship.relationship_name.toLowerCase().includes(this.state.search.toLowerCase())) {
    //             results.push(ship); 
    //             // pushing the entire object of the ship
    //         }
    //     })
    // }

    render() {

        if(Object.values(this.props.relationships).length < 2) {
            return null; 
        }

        // if(!Object.values(this.props.reviews).length < 2) {
        //     return null; 
        // }

        if(Object.values(this.props.users).length < 2) {
            return null; 
        }
        
        const shipArr = Object.values(this.props.relationships); 
        const userArr = Object.values(this.props.users); 

        return(
            <div className='search-body'>
                <p> This is the Search Bar </p>
                <input 
                type="text" 
                placeholder='Search goodBoys' 
                value={this.state.search}
                onChange={this.handleChange}
                />

                <div className='search-result'>
                    {shipArr.map((ship, idx) => (
                        <li key={`ship-result-${idx}`} onClick={() => this.sendToShip(ship.id)}>

                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SearchBar); 