import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer'; 
import Header from '../header'; 


class RelationshipShip extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger;
        this.props.getRelationships(); 
        // this.props.getRelationship(this.props.match.params.id); 
        // this is unnecessary because I just need to populate once with all relationships
    }

    render() {
        const ship = this.props.relationship
        // [this.props.match.params.id]; 
        if(!ship) {
            return null
        }
        return (
            <div className='one-ship-body'>
     
            
                <Header/>

                <p>Hey Buddy This is Ship # {this.props.match.params.id}</p>
                <div className='ship_horizontal'>
                    <div className='ship_col1'>
                        <p className='ship_profile_image'> This is an image </p>
                        <button className='button'> Rate this Relationship </button>
                    </div>
                    <div>
                        
                    </div>
                    <div className='ship_col2'>

                        <h1> {ship.relationship_name} </h1>
                        <h2> {ship.pronounciation} </h2>
                        <h3>{ship.relationship_definition}</h3>
                        <h4>Reviews</h4>
                    </div>
                </div>


                <Footer />
            

            </div>
        )
    }
}

export default RelationshipShip; 