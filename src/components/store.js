import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice.js';

let store = configureStore({
    reducer: {
        user:userReducer
    }
});

export default store;