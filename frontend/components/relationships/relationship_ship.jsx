import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer'; 
import Header from '../header'; 


class RelationshipShip extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRelationships(); 
    }

    render() {
        return (
            <div className='one-ship-body'>
     
            
                <Header/>

                <p>Hey Buddy This is Ship # {this.props.match.params.id}</p>
                <div className='ship_horizontal'>
                    <div className='ship_col1'>
                        <p className='ship_profile_image'> This is an image </p>
                        <button className='button'> Rate this Relationship </button>
                    </div>

                    <div className='ship_col2'>
                        <h1>Title</h1>
                        <h2>Pronounciation</h2>
                        <h3>Definition</h3>
                        <h4>Reviews</h4>
                    </div>
                </div>


                <Footer />
            

            </div>
        )
    }
}

export default RelationshipShip; 