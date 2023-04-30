import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    //name of the slice
    name:"user",
    //initial state of the information that we want to track
    initialState:{
        user:null,
    },
    reducers:{
        login: (state,action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
})

export const {login, logout} = userSlice.actions;
export const selectUser = (state) => state.user.user
export default userSlice.reducer;