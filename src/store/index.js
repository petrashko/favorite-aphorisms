import { createStore, combineReducers } from 'redux';
//
import aphorism from '../reducers/aphorism.js';
import category from '../reducers/category.js';

const store = createStore(
    combineReducers({aphorism, category}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
