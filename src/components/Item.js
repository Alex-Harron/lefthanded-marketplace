import React from 'react'

export default function Item(props) {
    return (
        <div>
            <p><b>{props.name}</b></p>
            <p>{props.description}</p>
            <h3>${props.price}</h3>
        </div>
    )
}
