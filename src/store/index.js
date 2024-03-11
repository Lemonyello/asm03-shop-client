import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";
import shopReducer from "./shop";
import authReducer from "./auth";
import cartReducer from "./cart";
import chatReducer from "./chat";
import orderTotalReducer from "./order-total";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    shop: shopReducer,
    auth: authReducer,
    cart: cartReducer,
    chat: chatReducer,
    orderTotal: orderTotalReducer,
  },
});

export default store;
