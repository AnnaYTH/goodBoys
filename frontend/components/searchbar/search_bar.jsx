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
            active: false,
        }

        this.handleChange = this.handleChange.bind(this); 
        this.setActive = this.setActive.bind(this); 
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

    setActive() {
        if (this.state.active) {
            setTimeout(() => {
                this.setState({active: false})
            }, 200)
        }else {
            this.setState({active: true})
        }
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
                className='search-bar-input'
                type="text" 
                placeholder='Search goodBoys' 
                value={this.state.search}
                onChange={this.handleChange}
                onFocus={this.setActive}
                onBlur={this.setActive}
                />

                <div className={this.state.active ? 'search-result-body' : 'search-result-body-hidden'}>
                    {shipArr.map((ship, idx) => {
                        if((ship.relationship_name).toLowerCase().includes(this.state.search.toLowerCase())){
                            return (
                                <div className='search-result-ship'>
                                <Link className='search-result-link' key={`ship-result-${idx}`} to={`/relationships/${ship.id}`}> 
                                    {ship.relationship_name}
                                </Link>
                                </div>
                            )
                        }
                    })}
                    {userArr.map((user, idx) => {
                        if((user.name).toLowerCase().includes(this.state.search.toLowerCase())){
                            return (
                                <div className='search-result-ship'>
                                <Link className='search-result-link' key={`ship-result-${idx}`} to={`/friends/${user.id}`}> 
                                    {user.name}
                                </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SearchBar); 