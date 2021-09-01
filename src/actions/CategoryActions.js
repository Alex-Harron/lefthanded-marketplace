export const fetchCategories = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/categories")
        .then(res => res.json())
        .then(categories => dispatch({
            type: "GET_CATEGORIES",
            payload: categories
        }))
    }
}