import React, {Component} from "react";
import {Link} from 'react-router-dom';


class CartItem extends Component {

    
    buttonClickHandler = () => {
        this.props.deleteCart(this.props.item)
        window.alert('Item has Been Deleted From Your Cart!')
    }


    render() {
        const i = this.props.item
    return (
        <div className='card'>
            <p><b>{i.name}</b></p>
            <p>{i.description}</p>
            <p>${i.price}</p>
            <p>{i.category_id}</p>
            <button onClick={this.buttonClickHandler} >Remove From Cart</button>

            <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
            <Link to={i.id + '/reviews'}>
                <button>See All Reviews</button>
            </Link>
        </div>
        )
    }
}

export default CartItem;
