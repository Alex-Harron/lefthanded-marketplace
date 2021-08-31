import React, {Component} from "react";

class CartItem extends Component {
    render() {
        const i = this.props.item
    return (
        <div className='card'>
            <p><b>{i.name}</b></p>
            <p>{i.description}</p>
            <h3>${i.price}</h3>
        </div>
    )
}
}

export default CartItem;
