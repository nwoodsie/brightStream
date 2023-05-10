import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  //name of the slice
  name: "user",
  //initial state of the information that we want to track
  initialState: {
    user: null,
    selected: null,
    stream: {
      streamId: null,
      streamName: null,
      streamDisplayName: null,
      streamTitle: null,
      streamTopic: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    selectPage: (state, action) => {
      state.selected = action.payload;
    },
    setCurrentStream: (state, action) => {
      state.streamId = action.payload.streamId;
      state.streamName = action.payload.streamName;
      state.streamDisplayName = action.payload.streamDisplayName;
      state.streamTitle = action.payload.streamTitle;
      state.streamTopic = action.payload.streamTopic;
    },
  },
});

export const { login, logout, selectPage, setCurrentStream } =
  userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectedPage = (state) => state.user.selected;
export const selectStream = (state) => state.user.stream;
export default userSlice.reducer;
