import React, {Component} from "react";
import ReviewForm from "./ReviewForm";



class SingleItem extends Component {




    buttonClickHandler = () => {
        this.props.addCart(this.props.item)
        window.alert('Item has Been Added to Your Cart!')
    }

    render() {
        const i = this.props.item
        const r = this.props.reviews
    return (
        <div>
                <div className="sidenav"><h2>Reviews ({r.length})</h2>
                {r}</div>
        <div className='contentstyle'>
                <h1><b>{i.name}</b></h1>
                <hr/>
                <br/>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
                <p>{i.description}</p>
                <b><p>${i.price}</p></b>
                <button onClick={this.buttonClickHandler}>Add to Cart</button>
                <p>Write A Review For This Product:</p>
                <ReviewForm route={this.props.route}/>
        </div>
        </div>
    )
    }
}

export default SingleItem;