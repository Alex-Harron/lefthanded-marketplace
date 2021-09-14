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
                <hr/>
                <br/>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <b>{i.name}</b>
                <p>{i.description}</p>
                <b><p>${i.price}</p></b>
                <button onClick={this.buttonClickHandler}>Add to Cart</button>
                <hr/>
                <h2>Reviews</h2>
                <p>{r}</p>

            </div>
        </div>
    )
    }
}

export default SingleItem;