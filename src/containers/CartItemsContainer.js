import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../components/CartItem';


import { deleteCart } from '../actions/CartActions';
class CartItemsContainer extends Component {


    render() {

        const items = this.props.carted.map( item => <CartItem item={item} key={item.id} deleteCart={this.props.deleteCart}/>)
        return (
        <div>
            <div id="cart-container" className='content'>
                <h1>Your Cart ({items.length})</h1>
            </div>
            <p className='contentstyle'>{items}</p>
            <p></p>
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