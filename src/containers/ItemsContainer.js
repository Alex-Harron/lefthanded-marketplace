import React, { Component } from 'react';
import Item from '../components/Item';
import CategoryFilterBar from '../components/CategoryFilterBar';
import { addCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/ItemActions.js'
import { fetchCategories } from '../actions/CategoryActions.js';

class ItemsContainer extends Component {

    componentDidMount(){
        this.props.dispatchFetchItems()
        this.props.dispatchCategoriesItems()
    }
    render() {
        const itemsJSX = this.props.items.map( i => {
            return (
                <Item item={i} key={i.id} addCart={this.props.addCart} /> 
            )
        })

        const categoriesJSX = this.props.categories.map( c => {
            return (
                <CategoryFilterBar category={c} key={c.id} />
            )
        })
        return (
            <div>
                <p>{categoriesJSX}</p>
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
        dispatchCategoriesItems: () => dispatch(fetchCategories()),
        addCart: (item) => dispatch(addCart(item)),
    }
}

export default connect(MSTP, MDTP)(ItemsContainer)