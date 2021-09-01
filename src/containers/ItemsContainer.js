import React, { Component } from 'react';
import Item from '../components/Item';
import { addCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/ItemActions.js'
import { fetchCategories } from '../actions/CategoryActions.js';
import Category from '../components/Categoy';
class ItemsContainer extends Component {

    componentDidMount(){
        this.props.dispatchFetchItems()
        this.props.dispatchCategories()
    }

    render() {
        const itemsJSX = this.props.items.map( i => {
            return (
                <Item item={i} key={i.id} addCart={this.props.addCart} /> 
            )
        })

        const categoriesJSX = this.props.categories.map( c => {
            return (
                <Category category={c} key={c.id}/>
            )
        } )


        return (
            <div>
            <h1>All Categories</h1>
                {categoriesJSX}
                <h1>All Items</h1>
                {itemsJSX}
            </div>
        )
    }
}

const MSTP = (stateFromTheStore) => {
    return {
        items: stateFromTheStore.root_items,
        categories: stateFromTheStore.root_category
    }
}

const MDTP = (dispatch) => {
    return {
        dispatchFetchItems: () => dispatch(fetchItems()),
        dispatchCategories: () => dispatch(fetchCategories()),
        addCart: (item) => dispatch(addCart(item)),
    }
}

export default connect(MSTP, MDTP)(ItemsContainer)