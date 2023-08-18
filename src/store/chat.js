import { createSlice } from "@reduxjs/toolkit";

// state of live chat in all pages
// change state to show chat or hide chat

const initialChatState = {
  showChat: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    toggleChat(state) {
      state.showChat = !state.showChat;
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
