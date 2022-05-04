import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
//
import { useHttp}  from '../../hooks/http.hook';
import { fetchAphorisms } from '../../store/actions';
import { aphorismDeleted } from '../../store/slices/aphorismSlice';
import AphorismItem from "../aphorismItem/AphorismItem";
import Spinner from '../spinner/Spinner';

const AphorismList = () => {
    //
    const filteredAphorismsSelector = createSelector(
        state => state.category.activeCategory,
        state => state.aphorism.aphorismList,
        (filter, aphorismList) => {
            if (filter === 'all') {
                return aphorismList;
            }
            else {
                return aphorismList.filter(item => item.category === filter)
            }
        }
    );
    const filteredAphorisms = useSelector(filteredAphorismsSelector);
    //
    const {aphorismLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => 
        {
            dispatch( fetchAphorisms(request) );
        },
        // eslint-disable-next-line
        []
    );

    //
    const onDelete = useCallback(
        (id) => {
            // Отправляем данные на сервер
            request(`http://localhost:3030/aphorisms/${id}`, "DELETE")
                .then(data => {
                    console.log(data, 'Deleted');
                })
                .then(() => {
                    // ТОЛЬКО если запрос успешен - отправляем данные в store
                    dispatch(aphorismDeleted(id));
                })
                .catch((err) => {
                    console.log(err);
                });
            
        },
        // eslint-disable-next-line
        [request]
    );

    if (aphorismLoadingStatus === "loading") {
        return <Spinner/>;
    }
    else if (aphorismLoadingStatus === "error") {
        return (
            <h5 className="text-center mt-5">Ошибка загрузки</h5>
        );
    }

    const renderAphorismList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Афоризмов пока нет</h5>
            );
        }

        return arr.map(({id, ...props}) => {
            return (
                <AphorismItem
                    key={id}
                    {...props}
                    onDelete={(ev) => onDelete(id)}
                />
            );
        })
    }

    const elements = renderAphorismList(filteredAphorisms);
    //
    return (
        <ul>
            {elements}
        </ul>
    );
}

export default AphorismList;