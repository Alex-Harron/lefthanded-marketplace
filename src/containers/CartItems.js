import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';

class CartItems extends Component {
    render() {
        const items = this.props.carted.map( item => <Item item={item}/>)
        return (
            <div id="cart-container">
                <h1>Cart Items</h1>
                <p>{items}</p>
            </div>
        )
    }
}

const MSTP = (state) => {
    return {
        carted: state.root_cart.carted
    }
}
export default connect(MSTP)(CartItems)