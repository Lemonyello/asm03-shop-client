import { createSlice } from "@reduxjs/toolkit";

const initialOrderTotalState = {
  failItems: [],
};

const orderTotalSlice = createSlice({
  name: "order-total",
  initialState: initialOrderTotalState,
  reducers: {
    setFailItems(state, action) {
      state.failItems = action.payload;
    },
  },
});

export const orderTotalActions = orderTotalSlice.actions;
export default orderTotalSlice.reducer;
