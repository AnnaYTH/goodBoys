import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { getReviews, getReview } from '../../actions/review_actions'; 
import { getRelationship, getRelationships } from '../../actions/relationship_actions';
import React from 'react';
import Footer from '../footer'; 
import Header from '../header'; 

const mSTP = (state, ownProps) => {
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
        // if(Object.keys(this.props.users) < 2) {
        //     return null; 
        // }
        const usersArr = Object.values(this.props.users)
        if (!usersArr) {
            return null; 
        }

        const allUsers = usersArr.map((user, idx) => {
            return (
                <div key={`allUsers-${idx}`}>
                    {/* insert link to individual profile page here */}
                    <p> name: {user.name}</p>
                    <p> email: {user.email} </p>
                    <p> member since:{user.created_at.split("T")[0]} </p>
                    <br />
                </div>
            )
        })
        return (
            <div>
                <Header/>

                <p>This is where I show you all the possible friends</p>
                <p> {allUsers} </p>

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(AllFriends);