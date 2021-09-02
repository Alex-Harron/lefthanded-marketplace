import React, { Component } from 'react';
import Item from '../components/Item';
import { addCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/ItemActions.js'
import { fetchCategories } from '../actions/CategoryActions.js';
import Category from '../components/Categoy';
import {
    Switch,
    Route,
    Link
    } from "react-router-dom";




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
                <div>
                <Link to={`/categories/${c.id}`}>
                    {c.name}
                </Link>
            </div>
            )
        } )


        return (
            <div id="recipe-container">
            <Switch>
                <Route exact path="/products">
                    <h1>All Categories</h1>
                    {categoriesJSX}
                    <h1>All Products</h1>
                    {itemsJSX}
                </Route>
                <Route path="/categories/:id" component={(routeInfo) => {

                    const routeId = parseInt(routeInfo.match.params.id)
                    const c = this.props.categories.find(c => c.id === routeId)
                
                    return (!!c ? 
                        <Category  items={itemsJSX} category={c} key={c.id}/> 

                        :
                        <h1 id="error"> Product Doesn't Exist!! </h1>)
                    }} />

                <Route path="*" render={() => <h1 id="error">CONTAINER ERROR!!!</h1>}/>

            </Switch>
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