import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Category extends Component {

    render() {
        const c = this.props.category
    return (
        <div>
            <Link to={c.id + '/categories'}>
                <a href='true'>{c.name}</a>
            </Link>
        </div>
    )
}
}

export default Category;
