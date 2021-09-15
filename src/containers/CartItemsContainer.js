import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../components/CartItem';


import { deleteCart } from '../actions/CartActions';
class CartItemsContainer extends Component {


    render() {

        const items = this.props.carted.map( item => <CartItem item={item} key={item.id} deleteCart={this.props.deleteCart}/>)
        return (
        <div>
            <div id="cart-container" className='contentstyle'>
                <h1>Your Cart</h1>
            <p>{items}</p>
            <p></p>
            <button className='content'><b>Checkout</b></button>
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

const MDTP = (dispatch) => {
    return {
        deleteCart: (item) => dispatch(deleteCart(item))
    }
}

export default connect(MSTP, MDTP)(CartItemsContainer)