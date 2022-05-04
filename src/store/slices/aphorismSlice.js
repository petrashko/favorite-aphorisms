import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    aphorismList: [],
    aphorismLoadingStatus: 'idle',
}

const aphorismSlice = createSlice({
    name: 'aphorism',
    initialState: initialState,
    reducers: {
        //
        aphorismsFetching: (state, action) => {
            state.aphorismsLoadingStatus = 'loading';
        },
        //
        aphorismsFetched: {
            reducer: (state, action) => {
                state.aphorismsLoadingStatus = 'idle';
                state.aphorismList = action.payload;
            },
            prepare: (list) => {
                return {
                    payload: list
                }
            }
        },
        //
        aphorismsFetchingError: (state, action) => {
            state.aphorismsLoadingStatus = 'error';
        },
        //
        aphorismCreated: {
            reducer: (state, action) => {
                state.aphorismList.push(action.payload);
            },
            prepare: (aphorism) => {
                return {
                    payload: aphorism
                }
            }
        },
        //
        aphorismDeleted: {
            reducer: (state, action) => {
                state.aphorismList = state.aphorismList.filter(item => item.id !== action.payload);
            },
            prepare: (aphorismId) => {
                return {
                    payload: aphorismId
                }
            }
        }
    }
});

//
const { actions, reducer } = aphorismSlice;
//
export default reducer;
//
export const {
    aphorismsFetching,
    aphorismsFetched,
    aphorismsFetchingError,
    aphorismCreated,
    aphorismDeleted
} = actions;
