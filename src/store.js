import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import productsReducer from "./features/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())