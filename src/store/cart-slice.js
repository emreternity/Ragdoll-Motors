import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];

const totalQuantity =
  localStorage.getItem("cartQuantity") !== null
    ? JSON.parse(localStorage.getItem("cartQuantity"))
    : 0;

const totalPrice =
  localStorage.getItem("cartTotal") !== null
    ? JSON.parse(localStorage.getItem("cartTotal"))
    : 0;

const setCartListFunc = (items, totalQuantity, totalPrice) => {
  localStorage.setItem("cartList", JSON.stringify(items));
  localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("cartTotal", JSON.stringify(totalPrice));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: items,
    totalQuantity: totalQuantity,
    totalPrice: totalPrice,
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

      setCartListFunc(
        state.items.map((item) => item),
        state.totalQuantity,
        state.totalPrice
      );
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
      setCartListFunc(
        state.items.map((item) => item),
        state.totalQuantity,
        state.totalPrice
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
