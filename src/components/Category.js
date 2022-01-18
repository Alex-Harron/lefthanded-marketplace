import React, {Component} from "react";
import {Link} from "react-router-dom";

class Category extends Component {


    render() {
        const c = this.props.category;
        let uniqueCategories;
        if (c.id < 31) {
            uniqueCategories = c.name
        }


    return (
        <div>
            <Link to={`/categories/${c.id}`}>
                {uniqueCategories}
            </Link>
        </div>
    )
}
}

export default Category;

