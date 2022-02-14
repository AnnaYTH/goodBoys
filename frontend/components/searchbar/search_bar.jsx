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

        this.handleChange = this.handleChange.bind(this); 
    }

    componentDidMount() {
        this.props.fetchUsers(); 
        this.props.getRelationships(); 
    }


    handleChange(e) {
        e.preventDefault()
        this.setState({
            search: e.target.value,
        }) 
    }

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
                {/* <p> This is the Search Bar </p> */}
                <input 
                type="text" 
                placeholder='Search goodBoys' 
                value={this.state.search}
                onChange={this.handleChange}
                />

                <div className='search-result'>
                    {shipArr.map((ship, idx) => {
                        if((ship.relationship_name).toLowerCase().includes(this.state.search.toLowerCase())){
                            return (
                                <Link key={`ship-result-${idx}`} to={`/relationships/${ship.id}`}> 
                                    <p>{ship.relationship_name}</p>
                                </Link>
                            )
                        }
                    })}
                    {userArr.map((user, idx) => {
                        if((user.name).toLowerCase().includes(this.state.search.toLowerCase())){
                            return (
                                <Link key={`ship-result-${idx}`} to={`/friends/${user.id}`}> 
                                    <p>{user.name}</p>
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SearchBar); 