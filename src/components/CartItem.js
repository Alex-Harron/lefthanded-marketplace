import React, {Component} from "react";

class CartItem extends Component {
    render() {
        const i = this.props.item
    return (
        <div className='card'>
            <p><b>{i.name}</b></p>
            <p>{i.description}</p>
            <p>${i.price}</p>
            <button onClick={() => this.props.deleteCart(i)}>Remove From Cart</button>
        </div>
    )
}
}

export default CartItem;
