import React, {Component} from "react";



class Review extends Component {
    render() {
        const r = this.props.review
        let star;
        if (r.star_rating === 0) {
        star = <h2> &#9734; &#9734; &#9734; &#9734; &#9734; </h2>;
        }else if (r.star_rating === 1) {
            star = <h2>&#9733; &#9734; &#9734; &#9734;</h2>
        }else if (r.star_rating === 2) {
            star = <h2>&#9733; &#9733; &#9734; &#9734; &#9734;</h2>
        } else if (r.star_rating === 3) {
            star = <h2>&#9733; &#9733; &#9733;  &#9734; &#9734;</h2> 
        }else if (r.star_rating === 4) {
            star = <h2>&#9733; &#9733; &#9733; &#9733; &#9734;</h2> 
        }else if (r.star_rating === 5) {
            star = <h2>&#9733; &#9733; &#9733; &#9733; &#9733;</h2>
        }
    return (
        <div>
            <hr/>
            {star}
            <p>{r.text}</p>
        </div>
    )
    }
}

export default Review;