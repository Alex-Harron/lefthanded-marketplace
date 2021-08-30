import { combineReducers } from "redux";
import CartItemsReducer from "./CartItemsReducer";
import ItemsReducer from "./ItemsReducer";
const rootReducer = combineReducers({
    root_items: ItemsReducer,
    root_cart: CartItemsReducer
})

export default rootReducer;