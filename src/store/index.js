import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";
import shopReducer from "./shop";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    shop: shopReducer,
  },
});

export default store;
