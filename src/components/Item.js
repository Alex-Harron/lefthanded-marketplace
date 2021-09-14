import React, {Component} from "react";
import {Link} from "react-router-dom";



class Item extends Component {


    buttonClickHandler = () => {
        this.props.addCart(this.props.item)
        window.alert('Item has Been Added to Your Cart!')
    }

    render() {
        const i = this.props.item
    return (
        <div className='contentstyle'>
            <div className='col'>
                <hr/>
                <br/>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <b>{i.name}</b>
                <p>{i.description}</p>
                <b><p>${i.price}</p></b>
                <Link to={`/products/${i.id}`}>
                <button>View Product</button>
                </Link>
            </div>
        </div>
    )
}
}

export default Item;
