import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Item extends Component {

    buttonClickHandler = () => {
        this.props.addCart(this.props.item)
        window.alert('Item has Been Added to Your Cart!')
    }

    render() {
        const i = this.props.item
    return (
        <div className='card'>
            <p><b>{i.name}</b></p>
            <p>{i.description}</p>
            <h3>${i.price}</h3>
        
            <button onClick={this.buttonClickHandler}>Add to Cart</button>

            <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
            <Link to={i.id + '/reviews'}>
                <a href='true'>See All Reviews</a>
            </Link>
        </div>
    )
}
}

export default Item;
