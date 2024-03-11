import { createSlice } from "@reduxjs/toolkit";

// state of live chat in all pages
// change state to show chat or hide chat

const initialChatState = {
  showChat: false,
  chats: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    toggleChat(state) {
      state.showChat = !state.showChat;
    },
    chat(state, action) {
      state.chats.push(action.payload);
    },
    deleteChat(state, action) {
      state.chats = [];
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
