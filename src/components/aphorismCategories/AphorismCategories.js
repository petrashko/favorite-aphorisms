
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//
import classNames from 'classnames';
//
import { useHttp } from '../../hooks/http.hook';
import { categoriesFetching, categoriesFetched, categoriesFetchingError, activeCategoryChanged } from '../../actions';
import Spinner from '../spinner/Spinner';

const AphorismCategories = () => {
    //
    const {categoryList, categoriesLoadingStatus, activeCategory} = useSelector(state => state.category);
    //
    const dispatch = useDispatch();
    //
    const {request} = useHttp();

    //
    useEffect(
        () => {
            dispatch(categoriesFetching());
            request("http://localhost:3030/categories")
                .then(data => dispatch(categoriesFetched(data)))
                .catch(() => dispatch(categoriesFetchingError()));
        },
        // eslint-disable-next-line
        []
    );

    if (categoriesLoadingStatus === "loading") {
        return (
            <Spinner/>
        );
    }
    else if (categoriesLoadingStatus === "error") {
        return (
            <h5 className="text-center mt-5">Ошибка загрузки</h5>
        );
    }

    const renderCategories = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Категории не найдены</h5>
            );
        }

        return arr.map(({name, className, label}) => {
            //
            const btnClass = classNames('btn', className, {
                'active': name === activeCategory
            });
            
            return (
                <button
                    className={btnClass}
                    id={name}
                    key={name}
                    onClick={(ev) => {
                        dispatch( activeCategoryChanged(name) );
                    }}
                >
                    {label}
                </button>
            );
        });
    }

    const elements = renderCategories(categoryList);
    //
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Фильтры по категориям</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    );
}

export default AphorismCategories;
