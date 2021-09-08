import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <div className='padding'>
            <div id='nav-bar' className='topnav'>
                <Link to="/">
                    <h4>&#x1F3E0; Home</h4>
                </Link>
                <Link to="/about-us">
                    <h4>About Us</h4>
                </Link>
                <Link to="/cart">
                    <h4>&#x1F6D2; Cart</h4>
                </Link>
                <h3><img src='https://www.dhpstudios.com/wp-content/uploads/2018/03/Southpaw-Logo-2017-Black-RGB.png' alt='Hi' className='img'/></h3>
            </div>
        </div>

    )
}


export default NavBar;