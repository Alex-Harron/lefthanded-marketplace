export const fetchItems = () => {
    return (dispatch) => {
        fetch("https://infinite-woodland-28641.herokuapp.com")
        .then(res => res.json())
        .then(items => dispatch({
            type: "GET_ITEMS",
            payload: items
        }))
    }
}

