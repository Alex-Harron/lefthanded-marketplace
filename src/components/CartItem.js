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
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <p><b>{i.name}</b></p>
                <p>{i.description}</p>
                <p>${i.price}</p>
                <button onClick={this.buttonClickHandler} >Remove From Cart</button>
                <p>&#x2B50; &#x2B50; &#x2B50; &#x2B50;</p>
                <hr/>
            </div>
        </div>
        )
    }
}

export default CartItem;
