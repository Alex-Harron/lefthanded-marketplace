import React, { Component } from 'react';
import CategoryFilterBar from '../components/CategoryFilterBar';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/CategoryActions.js';

class CategoriesContainer extends Component {

    componentDidMount(){
        this.props.dispatchCategoriesItems()
    }
    render() {
        const categoriesJSX = this.props.categories.map( c => {
            return (
                <CategoryFilterBar category={c} key={c.id} />
            )
        })
        return (
            <div>
                <h1>All Categories</h1>
                <p>{categoriesJSX}</p>
            </div>
        )
    }
}

const MSTP = (stateFromTheStore) => {
    return {
        categories: stateFromTheStore.root_category

    }
}

const MDTP = (dispatch) => {
    return {
        dispatchCategoriesItems: () => dispatch(fetchCategories()),
    }
}

export default connect(MSTP, MDTP)(CategoriesContainer)