import { configureStore } from '@reduxjs/toolkit';
//
import aphorism from './reducers/aphorism.js';
import category from './reducers/category.js';

const store = configureStore({
    reducer: {
        aphorism,
        category
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
