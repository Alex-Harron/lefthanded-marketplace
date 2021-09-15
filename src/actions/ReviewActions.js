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

export const addReview = (text, star_rating) => {
return (dispatch) => {
fetch('http://127.0.0.1:3000/reviews', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
    },
    body: JSON.stringify(text, star_rating)
})
    .then(r => r.json())
    .then(data => dispatch({type: "ADD_REVIEW", payload: data}))
}
}