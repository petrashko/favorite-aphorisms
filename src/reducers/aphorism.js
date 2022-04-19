const initialState = {
    aphorismList: [],
    aphorismLoadingStatus: 'idle',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APHORISMS_FETCHING':
            return {
                ...state,
                aphorismLoadingStatus: 'loading'
            }
        case 'APHORISMS_FETCHED':
            return {
                ...state,
                aphorismList: action.payload,
                aphorismLoadingStatus: 'idle'
            }
        case 'APHORISMS_FETCHING_ERROR':
            return {
                ...state,
                aphorismLoadingStatus: 'error'
            }
        case 'APHORISM_CREATED':
            return {
                ...state,
                aphorismList: [...state.aphorismList, action.payload]
            }
        case 'APHORISM_DELETED': 
            return {
                ...state,
                aphorismList: state.aphorismList.filter(item => item.id !== action.payload)
            }
        default: return state
    }
}

export default reducer;
