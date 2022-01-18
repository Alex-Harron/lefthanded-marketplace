import React, {Component} from "react";
import {Link} from "react-router-dom";

class Category extends Component {


    render() {
        const c = this.props.category;
        const uniqueCategories = Array.from(new Set(c.name));

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

