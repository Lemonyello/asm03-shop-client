import { createSlice } from "@reduxjs/toolkit";
import * as storage from "./local-storage";

// state of user accounts
// has list of user accounts, current user that is logged in, action to register, login, logout

const initialAuthState = {
  // if there is no current_user in local storage, user is not logged in
  isLoggedIn: storage.getFromStorage(storage.CURRENT_USER, null) ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
