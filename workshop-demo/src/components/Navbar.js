import React from 'react';
import '../style/navbar.scss';
import {Link} from 'react-router-dom'

function Navbar(props) {

  let navStyle = {
    backgroundColor:props.bgColor,
  };

  return (
    <div style={navStyle} className="navbar">
      <div className="nav-content">
        <div className="nav-logo"><Link to="/home">R</Link></div>
      </div>
    </div>
  );
}

export default Navbar;
