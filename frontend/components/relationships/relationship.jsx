
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
        <div>
            <p> Hey Buddy </p>
            {/* <ul>
                {this.props.relationships.map((relation) => 
                <li>
                    {relation.pronounciation}
                </li>
                )}
            </ul> */}
            <ul>
                {Object.values(this.props.relationships).map((ship) =>
                    <li>
                        {ship.id}
                        {ship.relationship_name}
                        {ship.pronounciation}
                        {ship.relationship_definition}
                    </li>
                )}
            </ul>
        </div>
        )
    }
}

export default Relationship; 