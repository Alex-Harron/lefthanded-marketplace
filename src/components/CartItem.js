import React, {Component} from "react";


class CartItem extends Component {

    
    buttonClickHandler = () => {
        this.props.deleteCart(this.props.item)
        window.alert('Item has Been Deleted From Your Cart!')
    }


    render() {
        const i = this.props.item
        console.log()
    return (
        <div className='col-container'>
            <div className='col'>
            <hr/>
            <br/>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <p><b>{i.name}</b></p>
                <p>{i.description}</p>
                <p><b>${i.price}</b></p>
                <button onClick={this.buttonClickHandler}>Remove From Cart</button>
            </div>
        </div>
        )
    }
}

export default CartItem;

