import { createSlice } from "@reduxjs/toolkit";
import * as storage from "./local-storage";

// state of cart
// has products in cart, actions to modify products in cart

const initialCartState = {
  // when page first loads or reloads, load the cart from local storage into cart state
  listCart: storage.getFromStorage(storage.CART_LIST, []),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, actions) {
      const product = state.listCart.find(
        (prod) => prod._id === actions.payload._id
      );
      product
        ? (product.quantity += actions.payload.quantity)
        : state.listCart.push(actions.payload);
    },
    updateItem(state, actions) {
      const product = state.listCart.find(
        (prod) => prod._id === actions.payload._id
      );
      product.quantity += actions.payload.quantity;
    },
    removeItem(state, actions) {
      state.listCart = state.listCart.filter(
        (prod) => prod._id !== actions.payload
      );
    },
    deleteCart(state) {
      state.listCart = initialCartState.listCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
