import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';


class CategoryFilterBar extends Component {

    render() {
        const c = this.props.category
        return (

            <div id='filter-bar'>
                <Link to={ '/categories' + c.name}>
                <a href='true'>{c.name}</a>
                </Link>
            </div>
    
        )
    }
}


export default (CategoryFilterBar);


