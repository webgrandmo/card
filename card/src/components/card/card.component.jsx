import React from 'react';
import './card.styles.css';

const Card = (props) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} alt={props.monster.name}/>
            <h4>{props.monster.name}</h4>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;