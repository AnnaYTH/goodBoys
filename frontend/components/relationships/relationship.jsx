import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer'; 
import Header from '../header'; 


class Relationship extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRelationships(); 
    }

    render() {
        return (
            <div className='main-body'>
     
            
                <Header/>


                <div className='ship_list_item'>
                    <p className='title_head'> All Types of Relationships </p>
                    <ul>
                        {Object.values(this.props.relationships).map((ship, idx) =>
                            <li className='ship_list' key={`ship_${idx}`}>
                                <p className='image_place'> IMAGE GOES HERE</p>

                                <div className='column_2'>
                                    <h1>
                                        <Link className='h1' to = {`/relationships/${ship.id}`}>
                                        {ship.relationship_name}
                                        </Link>
                                    </h1>
                                    <h2> pronounced {ship.pronounciation} </h2>
                                    <h3>{ship.relationship_definition} </h3>
                                </div>

                                <div className='column_3'> 
                                    <button className='button'> Rate this Relationship </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>


                <Footer />
            

            </div>
        )
    }
}

export default Relationship; 