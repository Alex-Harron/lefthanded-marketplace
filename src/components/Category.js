import React, {Component} from "react";
import {Link} from "react-router-dom";

class Category extends Component {


    render() {
        const c = this.props.category;

    return (
        <div>
            <Link to={`/categories/${c.id}`}>
                {c.name}
            </Link>
        </div>
    )
}
}

export default Category;

