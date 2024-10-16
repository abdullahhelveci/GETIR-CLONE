import { createStore, combineReducers } from "redux";
import cartItems from "./reducers/cartItem";

const reducers = combineReducers({
    cartItems
});

const store = createStore(reducers); // Middleware olmadan

export default store;