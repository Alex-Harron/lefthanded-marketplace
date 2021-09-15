import React, {Component} from "react";
import {Link} from "react-router-dom";



class Item extends Component {


    buttonClickHandler = () => {
        this.props.addCart(this.props.item)
        window.alert('Item has Been Added to Your Cart!')
    }

    render() {
        const i = this.props.item
        const r = this.props.reviews.filter(r => r.item_id === i.id)
    return (
        <div className='contentstyle'>
            <div className='col'>
                <hr/>
                <br/>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <br/>
                <b>{i.name}</b>
                <p>{i.description}</p>
                <b><p>${i.price}</p></b>
                <Link to={`/products/${i.id}`}>
                <button>View Product</button>
                </Link>
                <p>&#11088; &#11088; &#11088; &#11088; ({r.length})</p>
            </div>
        </div>
    )
}
}

export default Item;
