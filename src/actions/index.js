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