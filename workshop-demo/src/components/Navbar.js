import React from 'react';
import '../style/navbar.scss';

function Navbar(props) {

  let navStyle = {
    backgroundColor:props.bgColor,
  };

  return (
    <div style={navStyle} className="navbar">
      <div className="nav-content">
        <div className="nav-logo">P</div>
      </div>
    </div>
  );
}

export default Navbar;
