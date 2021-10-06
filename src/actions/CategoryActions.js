export const fetchCategories = () => {
    return (dispatch) => {
        fetch("https://infinite-woodland-28641.herokuapp.com/categories")
        .then(res => res.json())
        .then(categories => dispatch({
            type: "GET_CATEGORIES",
            payload: categories
        }))
    }
}