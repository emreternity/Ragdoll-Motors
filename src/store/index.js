import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productsSlice from "./products-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, products: productsSlice.reducer },
});

export default store;
