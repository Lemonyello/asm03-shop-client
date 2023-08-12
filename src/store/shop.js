import { createSlice } from "@reduxjs/toolkit";

const initialShopState = {
  currentCategory: "all",
  searchWord: "",
  sort: "",
  currentPage: 1,
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialShopState,
  reducers: {
    changeCategory(state, actions) {
      state.currentCategory = actions.payload;
      state.searchWord = "";
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
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice.reducer;
