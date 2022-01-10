
import React from 'react';
import { Link } from 'react-router-dom';


class Relationship extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRelationships(); 
    }

    render() {
        return (
        <div className='body'>
            <p> Hey Buddy </p>
            <ul>
                {Object.values(this.props.relationships).map((ship) =>
                    <li>
                        {ship.id}
                        <h1> {ship.relationship_name} </h1>
                        <h2> {ship.pronounciation} </h2>
                        {ship.relationship_definition}
                    </li>
                )}
            </ul>
        </div>
        )
    }
}

export default Relationship; 