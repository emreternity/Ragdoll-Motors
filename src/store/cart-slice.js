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
        (item) => item.model === newItem.model
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          model: newItem.model,
          price: newItem.price,
          speed: newItem.speed,
          frontQuarter: newItem.images.frontQuarter,
          rearQuarter: newItem.images.rearQuarter,
          front: newItem.images.front,
          rear: newItem.images.rear,
          side: newItem.images.side,
          manufacturer: newItem.manufacturer,
          seats: newItem.seats,
          topSpeed: newItem.topSpeed,
          acceleration: newItem.acceleration,
          handling: newItem.handling,
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
