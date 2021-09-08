import React, {Component} from "react";


class Item extends Component {

    buttonClickHandler = () => {
        this.props.addCart(this.props.item)
        window.alert('Item has Been Added to Your Cart!')
    }

    render() {
        const i = this.props.item
    return (
        <div className='col-container'>
            <div className='col'>
                <hr/>
                <br/>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <p><b>{i.name}</b></p>
                <p>{i.description}</p>
                <b><p>${i.price}</p></b>
                <button onClick={this.buttonClickHandler}>Add to Cart</button>
            </div>
        </div>
    )
}
}

export default Item;
