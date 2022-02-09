import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { getReviews, getReview } from '../../actions/review_actions'; 
import React from 'react';
import Footer from '../footer'; 
import Header from '../header'; 

const mSTP = (state, ownProps) => {
    debugger; 
    return ({
        currentUser: state.entities.users[state.session.id],
    })
}

const mapDispatchToProps = dispatch => ({
    getReviews: () => dispatch(getReviews()),
    getRelationships: () => dispatch(getRelationships()), 
});


class AllFriends extends React.Component {


    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.getRelationships(); 
    //     this.props.getReviews(); 
    // }
 
    render() {
        debugger; 
        return (
            <div>
                <Header/>

                <p>This is where I show you all the possible friends</p>
                

                <Footer/>
            </div>
        )
    }
};



export default connect(mSTP, mapDispatchToProps)(AllFriends);