import React, {Component} from "react";



class SingleItem extends Component {




    buttonClickHandler = () => {
        this.props.addCart(this.props.item)
        window.alert('Item has Been Added to Your Cart!')
    }

    render() {
        const i = this.props.item
        const r = this.props.reviews
    return (
        <div className='contentstyle'>
            <div>
                <h1><b>{i.name}</b></h1>
                <hr/>
                <br/>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <p>{i.description}</p>
                <b><p>${i.price}</p></b>
                <button onClick={this.buttonClickHandler}>Add to Cart</button>
                <hr/>
                <h2 className="content">Reviews ({r.length})</h2>
                <p>{r}</p>
            </div>
        </div>
    )
    }
}

export default SingleItem;