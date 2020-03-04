import React from 'react';
import '../styles/Nav.css';
const logo = require('../images/HEB-logo.png');

function Nav() {
    return (
        <div className="Nav d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <a className="navbar-brand logo" href="#"><img alt="logo" src={logo}/></a>
            <h2 className="my-0 mr-md-auto font-weight-normal">Item Cache on Anthos</h2>
            <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-light" href="">Shop</a>
            <a className="p-2 text-light" href="">Pharmacy</a>
            <a className="p-2 text-light" href="">Coupons</a>
            <a className="p-2 text-light" href="">Stores</a>
            </nav>
            <a className="btn btn-light" href="">Login or Register</a>
        </div>
    );
}
export default Nav;
