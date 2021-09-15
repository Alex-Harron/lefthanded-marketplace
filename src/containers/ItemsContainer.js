import React, { Component } from 'react';
import Item from '../components/Item';
import { addCart } from '../actions/CartActions';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/ItemActions.js'
import { fetchCategories } from '../actions/CategoryActions.js';
import { fetchReviews } from '../actions/ReviewActions';
import Category from '../components/Category';
import Review from '../components/Review';
import CategoryItems from '../components/CategoryItems';
import {
    Switch,
    Route
    } from "react-router-dom";
import SingleItem from '../components/SingleItem';




class ItemsContainer extends Component {

    componentDidMount(){
        this.props.dispatchFetchItems()
        this.props.dispatchCategories()
        this.props.dispatchReviews()
    }


    render() {
        const itemsJSX = this.props.items.map( i => {
            return (
                <Item item={i} key={i.id} reviews={this.props.reviews} addCart={this.props.addCart} /> 
            )
        })

        const categoriesJSX = this.props.categories.map( c => {
            return (
                <Category category={c} key={c.id}/>
            )
        })


        return (
        <div id="items-container" className='padding'>
            <Switch>
                <Route exact path="/products" >
                    <div id='product-categories' className='sidenav' >
                        <h2>Product Categories:</h2>
                        <hr/>
                        {categoriesJSX}
                    </div>
                    <div id='all-products' className='content'>
                        <h1>All Products:</h1>
                    </div>
                    <div id='items-list' className='contentstyle'>
                        {itemsJSX}
                    </div>
                </Route>
                <Route path="/categories/:id" component={(routeInfo) => {
                    const routeId = parseInt(routeInfo.match.params.id)
                    const i = this.props.items.filter(i => i.category_id === routeId)
                    const filteredJSX = i.map( i => {
                        return (
                            <Item item={i} key={i.id} reviews={this.props.reviews}/> 
                        )
                    })
                    const c = this.props.categories.find(c => c.id === routeId)
                    return (!!c ? 
                        <CategoryItems category={c} key={c.id} categories={categoriesJSX} item={filteredJSX} />
                        :
                        <h1 id="error"> Page Doesn't Exist!! </h1>)
                    }} />
                <Route path="/products/:id" component={(route) => {
                    const routeId = parseInt(route.match.params.id)
                    const r = this.props.reviews.filter(r => r.item_id === routeId)
                    const filterReviews = r.map( r => {
                        return(
                            <Review review={r} key={r.id}/>
                        )
                    })
                    const p = this.props.items.find(p => p.id === routeId)
                    return (!!p ?
                        <SingleItem item={p} key={p.id} route={routeId} addCart={this.props.addCart} reviews={filterReviews}/> 
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
        categories: stateFromTheStore.root_category,
        reviews: stateFromTheStore.root_review
    }
}

const MDTP = (dispatch) => {
    return {
        dispatchFetchItems: () => dispatch(fetchItems()),
        dispatchCategories: () => dispatch(fetchCategories()),
        dispatchReviews: () => dispatch(fetchReviews()),
        addCart: (item) => dispatch(addCart(item))
    }
}

export default connect(MSTP, MDTP)(ItemsContainer)