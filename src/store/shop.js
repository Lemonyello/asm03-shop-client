import { createSlice } from "@reduxjs/toolkit";

// state of list of products in shop page
// has current showing category, current search word, current type of sorting, current page of the list, state to show anim on product or not

const initialShopState = {
  currentCategory: "all",
  searchWord: "",
  sort: "",
  currentPage: 1,
  animShowUp: true,
  preventAnimRun: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialShopState,
  reducers: {
    changeCategory(state, actions) {
      state.currentCategory = actions.payload;
      state.searchWord = "";
      state.animShowUp = true;
      state.preventAnimRun = true;
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
      state.preventAnimRun = false;
    },
    turnOnPreventAnimRun(state) {
      state.preventAnimRun = true;
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
