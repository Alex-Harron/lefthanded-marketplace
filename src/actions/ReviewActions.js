export const fetchReviews = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/reviews")
        .then(res => res.json())
        .then(reviews => dispatch({
            type: "GET_REVIEWS",
            payload: reviews
        }))
    }
}
