import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.model === newItem.model
      );
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({
          model: newItem.model,
          price: newItem.price,
          speed: newItem.speed,
          frontQuarter: newItem.frontQuarter,
          rearQuarter: newItem.rearQuarter,
          front: newItem.front,
          rear: newItem.rear,
          manufacturer: newItem.manufacturer,
          seats: newItem.seats,
          topSpeed: newItem.topSpeed,
          acceleration: newItem.acceleration,
          handling: newItem.handling,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const model = action.payload;
      const existingItem = state.items.find((item) => item.model === model);
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.model !== model);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
