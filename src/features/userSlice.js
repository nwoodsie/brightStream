import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  //name of the slice
  name: "user",
  //initial state of the information that we want to track
  initialState: {
    user: null,
    selected: null,
    streamId: null,
    streamName: null,
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
      state.streamId = action.payload.userId;
      state.streamName = action.payload.streamName;
    },
  },
});

export const { login, logout, selectPage, setCurrentStream } =
  userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectedPage = (state) => state.user.selected;
export default userSlice.reducer;
