export const fetchReviews = () => {
    return (dispatch) => {
        fetch("https://infinite-woodland-28641.herokuapp.com")
        .then(res => res.json())
        .then(reviews => dispatch({
            type: "GET_REVIEWS",
            payload: reviews
        }))
    }
}

export const addReview = (text, star_rating) => {
return (dispatch) => {
fetch('https://infinite-woodland-28641.herokuapp.com', {
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