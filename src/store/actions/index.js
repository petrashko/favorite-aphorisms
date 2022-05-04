import { aphorismsFetching, aphorismsFetched, aphorismsFetchingError } from '../slices/aphorismSlice.js';
import { categoriesFetching, categoriesFetched, categoriesFetchingError } from '../slices/categorySlice.js';

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
