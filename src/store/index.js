import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";
import shopReducer from "./shop";
import authReducer from "./auth";
import cartReducer from "./cart";
import chatReducer from "./chat";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    shop: shopReducer,
    auth: authReducer,
    cart: cartReducer,
    chat: chatReducer,
  },
});

export default store;
