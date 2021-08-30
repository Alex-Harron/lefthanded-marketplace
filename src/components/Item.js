import React from 'react'

export default function Item(props) {

    return (
        <div className='card'>
            <p><b>{props.name}</b></p>
            <p>{props.description}</p>
            <h3>${props.price}</h3>
            <button onClick={() => props.addCart(props.name)}>Add to Cart</button>
        </div>
    )
}
