import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {

    state = {
        items: []
    }

    componentDidMount(){
        fetch('http://127.0.0.1:3000/items')
        .then(res => res.json())
        .then(data => this.setState({
            items: data
        }))
    }
    render() {
        return (
            <div>
                <h1>All Items</h1>
                {this.state.items.map(i => <Item {...i} key={i.id}/>)}
            </div>
        )
    }
}
