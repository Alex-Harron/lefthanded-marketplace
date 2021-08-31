import React, {Component} from "react";

class CartItem extends Component {

    render() {
        const i = this.props.item
    return (
        <div className='card'>
            <p><b>{i.name}</b></p>
            <p>{i.description}</p>
            <p>${i.price}</p>
            <button onClick={() => this.props.deleteCart(i)} >Remove From Cart</button>

            <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
            <a href="/reviews">Read All Reviews</a>
        </div>
        )
    }
}

export default CartItem;
