import React from 'react'

export default function Item(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p><b>{props.description}</b></p>
            
        </div>
    )
}
