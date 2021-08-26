import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/ItemActions.js'

class Items extends Component {

    // state = {
    //     items: []
    // }

    componentDidMount(){
        this.props.dispatchFetchItems()
    }
    render() {
        return (
            <div>
                <h1>All Items</h1>
                {this.props.items.map(i => <Item {...i} key={i.id}/>)}
            </div>
        )
    }
}

const MSTP = (state) => {
    return {
        items: state
    }
}

const MDTP = (dispatch) => {
    return {
        dispatchFetchItems: () => dispatch(fetchItems())
    }
}

export default connect(MSTP, MDTP)(Items)