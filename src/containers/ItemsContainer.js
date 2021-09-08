import React, { Component } from 'react';
import Item from '../components/Item';
import { addCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/ItemActions.js'
import { fetchCategories } from '../actions/CategoryActions.js';
import Category from '../components/Category';
import CategoryItems from '../components/CategoryItems';
import {
    Switch,
    Route
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
                <Category category={c} key={c.id}/>
            </div>
            )
        } )



        return (
            <div id="items-container">
            <Switch>
                <Route exact path="/products" >
                    <div className='sidenav' >
                    <h1>Categories:</h1>
                    {categoriesJSX}
                    </div>
                    <div className='contentstyle'>
                        <div className="content">
                            <h1>All Products</h1>
                        </div>
                    {itemsJSX}
                    </div>
                </Route>
                <Route path="/categories/:id" component={(routeInfo) => {

                    const routeId = parseInt(routeInfo.match.params.id)
                    const i = this.props.items.filter(i => i.category_id === routeId)
                    const filteredJSX = i.map( i => {
                        return (
                            <Item item={i} key={i.id} addCart={this.props.addCart} /> 
                        )
                    })
                    
                    const c = this.props.categories.find(c => c.id === routeId)
        
                    return (!!c ? 
                        <CategoryItems category={c} key={c.id} route={routeId} item={filteredJSX} />

                        :
                        <h1 id="error"> Product Doesn't Exist!! </h1>)
                    }} />

                <Route path="*" render={() => <h1 id="error">404 Page Not Found</h1>}/>

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