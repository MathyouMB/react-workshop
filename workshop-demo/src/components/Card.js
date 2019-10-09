import React from 'react';
import '../style/card.scss';

function Card() {
  return (
    <div className="card">
        <img className="card-image" src="https://www.w3schools.com/howto/img_avatar.png"></img>
        <div className="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
        </div>
    </div>
  );
}

export default Card;
