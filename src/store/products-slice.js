import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    muscle: {},
    sports: {},
    motorcycles: {},
    single: {},
    singleImg: {},
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
    replaceProductsSingle(state, action) {
      const newProducts = action.payload;
      const newImages = newProducts.images;

      state.singleImg = newImages;
      state.single = newProducts;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
