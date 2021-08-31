import React, { Component } from 'react';
import Item from '../components/Item';
import { addCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/ItemActions.js'

class ItemsContainer extends Component {

    componentDidMount(){
        this.props.dispatchFetchItems()
    }
    render() {
        const itemsJSX = this.props.items.map( i => {
            return (
                <Item item={i} addCart={this.props.addCart} /> 
            )
        })
        return (
            <div>
                <h1>All Items</h1>
                {itemsJSX}
            </div>
        )
    }
}

const MSTP = (stateFromTheStore) => {
    return {
        items: stateFromTheStore.root_items
    }
}

const MDTP = (dispatch) => {
    return {
        dispatchFetchItems: () => dispatch(fetchItems()),
        addCart: (item) => dispatch(addCart(item))
    }
}

export default connect(MSTP, MDTP)(ItemsContainer)