export const aphorismsFetching = () => {
    return {
        type: 'APHORISMS_FETCHING'
    }
}

export const aphorismsFetched = (aphorisms) => {
    return {
        type: 'APHORISMS_FETCHED',
        payload: aphorisms
    }
}

export const aphorismsFetchingError = () => {
    return {
        type: 'APHORISMS_FETCHING_ERROR'
    }
}

//*******************************************************************

export const categoriesFetching = () => {
    return {
        type: 'CATEGORIES_FETCHING'
    }
}

export const categoriesFetched = (categories) => {
    return {
        type: 'CATEGORIES_FETCHED',
        payload: categories
    }
}

export const categoriesFetchingError = () => {
    return {
        type: 'CATEGORIES_FETCHING_ERROR'
    }
}

export const activeCategoryChanged = (category) => {
    return {
        type: 'ACTIVE_CATEGORY_CHANGED',
        payload: category
    }
}

//*******************************************************************

export const aphorismCreated = (aphorism) => {
    return {
        type: 'APHORISM_CREATED',
        payload: aphorism
    }
}

export const aphorismDeleted = (id) => {
    return {
        type: 'APHORISM_DELETED',
        payload: id
    }
}
