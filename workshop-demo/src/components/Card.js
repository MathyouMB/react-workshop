import React from 'react';
import '../style/card.scss';

function Card(props) {
  return (
    <div className="card">
        <img className="card-image" src={props.url}></img>
        <div className="container">
            <h4><b>{props.name}</b></h4>
            <p>{props.text}</p>
        </div>
    </div>
  );
}

export default Card;
