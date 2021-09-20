import React, {Component} from "react";
import {Link} from "react-router-dom";



class Item extends Component {

    render() {
        const i = this.props.item
        const r = this.props.reviews.filter(r => r.item_id === i.id)
        let star;
            if (r.length === 0) {
            star = <h2> &#9734; &#9734; &#9734; &#9734; &#9734; </h2>;
            } else if (r.length === 2) {
            star = <h2>&#9733; &#9734; &#9734; &#9734; &#9734;</h2>
            } else if (r.length >= 3) {
                star = <h2>&#9733; &#9733; &#9733;  &#9734; &#9734;</h2> 
            }else if (r.length === 1) {
                star = <h2>&#9733; &#9733; &#9733; &#9733; &#9733;</h2> 
            }
    return (
        <div className='col-container'>
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
                <p>Reviews ({r.length})</p>
                {star}
            </div>
        </div>
    )
}
}

export default Item;
