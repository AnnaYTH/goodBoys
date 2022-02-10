import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
// import { getReviews, getReview } from '../../actions/review_actions'; 
import { getRelationship, getRelationships, getReviews, getReview } from '../../actions/relationship_actions';
import React from 'react';
import Footer from '../footer'; 
import Header from '../header'; 

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users, 
        reviews: state.entities.reviews, 
        relationships: state.entities.relationships,
    })
}

const mapDispatchToProps = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
    fetchUsers: () => dispatch(fetchUsers()), 
});


class AllFriends extends React.Component {


    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers(); 
        this.props.getRelationships(); 
        this.props.getReviews(); 
    }
 
    render() {
        const usersArr = Object.values(this.props.users)
        if (!usersArr) {
            return null; 
        }
        // I will eventually put an if conditional so that the currentuser won't be shown to themself
        const allUsers = usersArr.map((user, idx) => {
            return (
                <div key={`allUsers-${idx}`}>
                    {/* insert link to individual profile page here */}
                    <Link to={`/friends/${user.id}`}>
                        <p> id: {user.id} </p>
                        <p> name: {user.name}</p>
                        <p> email: {user.email} </p>
                        <p> member since: {user.created_at.split("T")[0]} </p>
                    </Link>
                    <br />
                </div>
            )
        })

        return (
            <div>
                <Header/>

                <h2  className='title_head'>All Users</h2>
                <p> {allUsers} </p>

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(AllFriends);