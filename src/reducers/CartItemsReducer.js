const initialState = {
    carted: []
}

function CartItemsReducer(state= initialState, action) {
    switch(action.type){
        case "ADD_CART":
            return {
                ...state, 
                carted: [...state.carted, action.payload]
            }

        case "DELETE_ITEM":
            return {
                ...state,
                carted: state.carted.filter(i => i !== action.payload)
            }
        default:
            return state
    }
}

export default CartItemsReducer