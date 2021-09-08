import React, {Component} from "react";

class CategoryItems extends Component {


    render() {
        const i = this.props.item
        const c = this.props.category

    return (
        <div>
        <div className='content'>
        <h1> {c.name} Products:</h1>
        </div>
            <p>{i}</p>
        </div>
    )
}
}

export default CategoryItems;
