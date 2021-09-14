import { combineReducers } from "redux";
import CartItemsReducer from "./CartItemsReducer";
import CategoriesReducer from "./CategoriesReducer";
import ItemsReducer from "./ItemsReducer";
import ReviewsReducer from "./ReviewsReducer";
const rootReducer = combineReducers({
    root_items: ItemsReducer,
    root_cart: CartItemsReducer,
    root_category: CategoriesReducer,
    root_review: ReviewsReducer
})

export default rootReducer;