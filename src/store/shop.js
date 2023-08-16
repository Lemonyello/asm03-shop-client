import { createSlice } from "@reduxjs/toolkit";

const initialShopState = {
  currentCategory: "all",
  searchWord: "",
  sort: "",
  currentPage: 1,
  animShowUp: true,
  animFadeOut: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialShopState,
  reducers: {
    changeCategory(state, actions) {
      state.currentCategory = actions.payload;
      state.searchWord = "";
      state.animShowUp = true;
      state.animFadeOut = true;
    },
    changeSearchWord(state, actions) {
      state.searchWord = actions.payload;
      state.currentCategory = "";
    },
    changeSort(state, actions) {
      state.sort = actions.payload;
    },
    changePage(state, actions) {
      state.currentPage += actions.payload;
    },
    reset(state) {
      state = initialShopState;
    },
    turnOffAnimShowUp(state) {
      state.animShowUp = false;
      state.animFadeOut = false;
    },
    turnOnAnimFadeOut(state) {
      state.animFadeOut = true;
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
