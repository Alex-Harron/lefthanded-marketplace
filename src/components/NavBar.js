import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <div id='nav-bar' className='topnav'>
            <Link to="/">
                <h4>&#x1F3E0;</h4>
            </Link>
            <Link to="/cart">
                <h4>&#x1F6D2;</h4>
            </Link>
            <Link to="/about-us">
                <h4>About Us</h4>
            </Link>

            <h3><img src='https://hdclipartall.com/images/hand-images-clip-art-clipart-image-left-hand-clip-art-600_569.png' alt='Hi' class='img'/></h3>
        </div>

    )
}

export default NavBar;