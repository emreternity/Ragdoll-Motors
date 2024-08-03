import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.model === item.model
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          model: newItem.model,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
  removeItemFromCart(state, action) {
    const id = action.payload;
    const existingItem = state.items.find((item) => item.model === model);
    state.totalQuantity--;
    if (existingItem.quantity === 1) {
      state.items = state.items.filter((item) => item.model !== model);
    } else {
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
