// eslint-disable-next-line
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// eslint-disable-next-line
import ReduxThunk from 'redux-thunk';
//
import aphorism from '../reducers/aphorism.js';
import category from '../reducers/category.js';

const store = createStore(
    combineReducers({aphorism, category}),
    compose(
        applyMiddleware(
            ReduxThunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
