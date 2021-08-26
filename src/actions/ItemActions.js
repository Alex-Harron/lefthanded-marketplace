export const fetchItems = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:3000/items")
        .then(res => res.json())
        .then(items => dispatch({
            type: "GET_ITEMS",
            payload: items
        }))
    }
}

