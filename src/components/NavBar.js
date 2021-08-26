import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function NavBar() {
    return (
        <div id='nav-bar'>
            <Link to="/products">
                <button><h4>&#x1F3C4; All Products</h4></button>
            </Link>
            <Link to="/cart">
                <button><h4>&#x1F6D2; Your Cart</h4></button>
            </Link>
            <Link to="/">
                <button><h4>&#x1F3E0; Home</h4></button>
            </Link>
        </div>
    )
}

export default NavBar;