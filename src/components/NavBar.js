import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function NavBar() {
    return (
        <div id='nav-bar'>
            <Switch>
            <Link to="/products">
                <button><h2>All Products</h2></button>
            </Link>
            </Switch>
        </div>
    )
}

export default NavBar;