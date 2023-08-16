import { createSlice } from "@reduxjs/toolkit";
import * as storage from "./local-storage";

const initialCartState = {
  listCart: storage.getFromStorage(storage.CART_LIST, []),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, actions) {
      const product = state.listCart.find(
        (prod) => prod.id === actions.payload.id
      );
      product
        ? (product.amount += actions.payload.amount)
        : state.listCart.push(actions.payload);
    },
    updateItem(state, actions) {
      const product = state.listCart.find(
        (prod) => prod.id === actions.payload.id
      );
      product.amount += actions.payload.amount;
    },
    removeItem(state, actions) {
      state.listCart = state.listCart.filter(
        (prod) => prod.id !== actions.payload
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
