import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class NavBar extends React.Component {
    render() {
        return(
        <div className='padding'>
            <div id='nav-bar' className='topnav'>
                <Link to="/">
                    <h4>&#127968; Home</h4>
                </Link>
                <Link to="/products">
                    <h4>&#129508; All Products</h4>
                </Link>
                <Link to="/cart">
                    <h4>
                    <span>&#x1F6D2; Cart </span>
                    <span className="badge">{this.props.carted.length}</span>
                    </h4>
                </Link>
                <h3><img src='https://www.dhpstudios.com/wp-content/uploads/2018/03/Southpaw-Logo-2017-Black-RGB.png' alt='Hi' className='img'/></h3>
            </div>
        </div>
    )
}
}

const MSTP = (state) => {
    return {
        carted: state.root_cart.carted
    }
}

export default connect(MSTP)(NavBar);