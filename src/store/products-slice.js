import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: {},
  },
  reducers: {
    replaceProducts(state, action) {
      const newProducts = action.payload;
      state.items = newProducts;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
