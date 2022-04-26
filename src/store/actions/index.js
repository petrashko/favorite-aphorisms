export const fetchAphorisms = (request) => (dispatch) => {
    dispatch( aphorismsFetching() );
    //
    request("http://localhost:3030/aphorisms")
        .then(data => {
            dispatch( aphorismsFetched(data) );
        })
        .catch(() => {
            dispatch( aphorismsFetchingError() )
        });
}

const aphorismsFetching = () => {
    return {
        type: 'APHORISMS_FETCHING'
    }
}

const aphorismsFetched = (aphorisms) => {
    return {
        type: 'APHORISMS_FETCHED',
        payload: aphorisms
    }
}

const aphorismsFetchingError = () => {
    return {
        type: 'APHORISMS_FETCHING_ERROR'
    }
}

//*******************************************************************

export const fetchCategories = (request) => (dispatch) => {
    dispatch( categoriesFetching() );
    request("http://localhost:3030/categories")
        .then(data => {
            dispatch( categoriesFetched(data) );
        })
        .catch(() => {
            dispatch( categoriesFetchingError() );
        });
}

const categoriesFetching = () => {
    return {
        type: 'CATEGORIES_FETCHING'
    }
}

const categoriesFetched = (categories) => {
    return {
        type: 'CATEGORIES_FETCHED',
        payload: categories
    }
}

const categoriesFetchingError = () => {
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
