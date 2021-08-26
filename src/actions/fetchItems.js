export function fetchItems() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_ITEMS_REQUEST'});
        fetch('http://127.0.0.1:3000/items')
            .then(res => res.json())
            .then(items => dispatch({type: 'ADD_ITEMS', items}))
    };
};

