function itemsReducer(state ={ items:[], requesting: false}, action) {
    switch (action.type) {

        case 'START_ADDING_ITEMS_REQUEST':
        return {
            ...state, 
            items: [...state.items],
            requesting: true
        }
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.items,
                requesting: false
            }
        default: 
        return state;
    }
}