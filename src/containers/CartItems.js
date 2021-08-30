import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';

class CartItems extends Component {
    render() {
        const items = this.props.saved.map
    }
}

export default connect()(CartItems)