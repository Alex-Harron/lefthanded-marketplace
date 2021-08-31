import React, {Component} from "react"

class Item extends Component {
    render() {
        const i = this.props.item
    return (
        <div className='card'>
            <p><b>{i.name}</b></p>
            <p>{i.description}</p>
            <h3>${i.price}</h3>
        
            <button onClick={() => this.props.addCart(i)}>Add to Cart</button>
        </div>
    )
}
}

export default Item;
