import React, {Component} from "react";
import {Link} from "react-router-dom";

class CategoryItems extends Component {


    render() {
        const i = this.props.item
        const c = this.props.category
        const categoriesJSX = this.props.categories

    return (
        <div>
        <div className='sidenav' >
                    <h2>Product Categories:</h2>
                    <hr/>
                    {categoriesJSX}
        </div>
        <div className='content'>
        <h1> {c.name} Products:</h1>
        </div>
            <p>{i}</p>
        </div>
    )
}
}

export default CategoryItems;
