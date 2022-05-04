import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryList: [],
    categoriesLoadingStatus: 'idle',
    activeCategory: 'all'
}

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        //
        categoriesFetching: (state, action) => {
            state.categoriesLoadingStatus = 'loading';
        },
        categoriesFetched: {
            reducer: (state, action) => {
                state.categoriesLoadingStatus = 'idle';
                state.categoryList = action.payload;
            },
            prepare: (list) => {
                return {
                    payload: list
                }
            }
        },
        categoriesFetchingError: (state, action) => {
            state.categoriesLoadingStatus = 'error';
        },
        activeCategoryChanged: {
            reducer: (state, action) => {
                state.activeCategory = action.payload;
            },
            prepare: (category) => {
                return {
                    payload: category
                }
            }
        }
    }
});

//
const { actions, reducer } = categorySlice;
//
export default reducer;
//
export const {
    categoriesFetching,
    categoriesFetched,
    categoriesFetchingError,
    activeCategoryChanged
} = actions;
