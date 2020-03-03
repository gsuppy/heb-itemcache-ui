import React from 'react';
import '../styles/Nav.css';
const logo = require('../images/HEB-logo.png');

function Nav() {
    return (
        <div className="Nav">
            <div className="logo">
              <img alt="logo" src={logo} />
            </div>
        </div>
    );
}
export default Nav;
