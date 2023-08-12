import { createSlice } from "@reduxjs/toolkit";

const initialStatePopup = {
  showPopup: false,
  showCloseAnim: false,
  productShowing: {
    _id: "",
    name: "",
    price: "",
    category: "",
    short_desc: "",
    long_desc: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  },
};

const popupSlice = createSlice({
  name: "popup",
  initialState: initialStatePopup,
  reducers: {
    showPopup(state, actions) {
      state.showPopup = true;
      state.showBackdrop = true;
      state.productShowing = actions.payload;
    },
    hidePopup(state) {
      state.showPopup = false;
      state.showCloseAnim = false;
    },
    closeAnimation(state) {
      state.showCloseAnim = true;
    },
  },
});

export const popupActions = popupSlice.actions;
export default popupSlice.reducer;
