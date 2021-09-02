import React, {Component} from "react";

class Category extends Component {


    render() {
        const c = this.props.category;
        const i = this.props.items;

    return (
        <div>
            <h1>{c.name} Products</h1>
            <h2>{i}</h2>
            
        </div>
    )
}
}

export default Category;

