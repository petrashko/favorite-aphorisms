import { configureStore } from '@reduxjs/toolkit';
//
import aphorism from './slices/aphorismSlice.js';
import category from './slices/categorySlice.js';

const store = configureStore({
    reducer: {
        aphorism,
        category
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
