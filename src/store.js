import { createStore, applyMiddleware} from "redux";
import itemsReducer from "./reducers/itemsReducer";
import thunk from 'redux-thunk';

const store = createStore(
    itemsReducer,
    applyMiddleware(thunk)
)

export default store;