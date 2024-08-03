import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    muscle: {},
    motorcycles: {},
    sports: {},
  },
  reducers: {
    replaceProductsMuscle(state, action) {
      const newProducts = action.payload;
      state.muscle = newProducts;
    },
    replaceProductsSports(state, action) {
      const newProducts = action.payload;
      state.sports = newProducts;
    },
    replaceProductsMotorcycles(state, action) {
      const newProducts = action.payload;
      state.motorcycles = newProducts;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
