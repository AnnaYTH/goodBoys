import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserReview extends React.Component {

    //haha poor naming, bc I'm also going to render all the users this human is following

    constructor(props) {
        super(props); 
        this.sortByUser = this.sortByUser.bind(this); 
        this.listBuddies = this.listBuddies.bind(this); 
    }

    componentDidMount() {
        this.props.getReviews();  
        this.props.fetchUsers(); 
    }

    sortByUser() {
        let userReviews = []; 
        let allReviews = Object.values(Object.values(this.props.reviews)); 

        allReviews.forEach(review => {
            if (review.user_id === this.props.currentUser.id) {
                userReviews.push(review); 
            }
        })
        return userReviews; 
    }

    listBuddies() {
        const followArr = this.props.currentUser.followIds;
        const allUsers = Object.values(Object.values(this.props.users));

        // if(allUsers.length < 1){
        //     return null; 
        // }
        debugger; 
        const buddyArr = []; 
        // followArr.forEach(userID => {
        //     allUsers.forEach(userObj => {
        //         if(userID === userObj.id) {
        //             buddyArr.push({
        //                 name: userObj.name,
        //                 id: userObj.id
        //             })
        //         }
        //     })
        // })

        for(let i = 0; i < followArr.length; i++) {
            for(let j = 0; j < allUsers.length; j++) {
                if(followArr[i] === (allUsers[j].id)) {
                    buddyArr.push({
                        name: allUsers[j].name, 
                        user_id: allUsers[j].id
                    })
                }
            }
        }
        debugger; 
        return buddyArr; 
    }

    render() {
        
        const userReviews = this.sortByUser().map((review, idx) => {
            return (
                <div className='userReview' key={`userReview-${idx}`}>
                    <Link to={`/reviews/${review.id}`}>
                        {/* <p>Review ID: {review.id}</p> */}
                        {/* <p>relationship ID: {review.relationship_id}</p> */}
                        {/* <p>reviewer id: {review.user_id} </p> */}
                        <p>name: {review.name}</p>
                        <p>rating: {review.rating}</p>
                        <p>review: {review.body} </p>
                        <p>date reviewed: {review.created_at.split("T")[0]}</p>
                    </Link>
                </div>
            )
        }); 

        if(Object.values(this.props.users).length < 2) {
            return null; 
        }; 

        const buddies = this.listBuddies().map((buddy, idx) => {
            return (
                <div className='userBuddy' key={`userBuddy-${idx}`}>
                   <p> {buddy.name} </p>     
                </div>
            )
        }); 

        

        return (
            <div> 

                {/* <div>
                    THESE ARE THE REVIEWS THAT ONE USER HAS WRITTEN
                </div> */}
                
                <div>
                    {userReviews}
                </div>

                <hr />
                <br />

                <div> {this.props.currentUser.name}'s following these buddies (just the Ids for now)</div>

                <div>
                    {buddies}
                </div>
            </div>
        )
    }
}

export default UserReview; 
// if a user has not written any reviews, render "No reviews yet!"