import { combineReducers } from "redux";
import CartItemsReducer from "./CartItemsReducer";
import CategoriesReducer from "./CategoriesReducer";
import ItemsReducer from "./ItemsReducer";
const rootReducer = combineReducers({
    root_items: ItemsReducer,
    root_cart: CartItemsReducer,
    root_category: CategoriesReducer
})

export default rootReducer;