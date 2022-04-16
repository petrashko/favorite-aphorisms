const initialState = {
    aphorisms: [],
    aphorismsLoadingStatus: 'idle',
    categories: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APHORISMS_FETCHING':
            return {
                ...state,
                aphorismsLoadingStatus: 'loading'
            }
        case 'APHORISMS_FETCHED':
            return {
                ...state,
                aphorisms: action.payload,
                aphorismsLoadingStatus: 'idle'
            }
        case 'APHORISMS_FETCHING_ERROR':
            return {
                ...state,
                aphorismsLoadingStatus: 'error'
            }
        default: return state
    }
}

export default reducer;
