import React, {Component} from "react";



class Review extends Component {
    render() {
        const r = this.props.review
    return (
        <div>
            <li>{r.text}</li>
        </div>
    )
    }
}

export default Review;