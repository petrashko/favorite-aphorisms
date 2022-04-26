const initialState = {
    categoryList: [],
    categoriesLoadingStatus: 'idle',
    activeCategory: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORIES_FETCHING':
            return {
                ...state,
                categoriesLoadingStatus: 'loading'
            }
        case 'CATEGORIES_FETCHED':
            return {
                ...state,
                categoryList: action.payload,
                categoriesLoadingStatus: 'idle'
            }
        case 'CATEGORIES_FETCHING_ERROR':
            return {
                ...state,
                categoriesLoadingStatus: 'error'
            }
        case 'ACTIVE_CATEGORY_CHANGED':
            return {
                ...state,
                activeCategory: action.payload
            }
        default: return state
    }
}

export default reducer;
