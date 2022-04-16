import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//
import { useHttp}  from '../../hooks/http.hook';
import { aphorismsFetching, aphorismsFetched, aphorismsFetchingError } from '../../actions';
import AphorismListItem from "../aphorismListItem/AphorismListItem";
import Spinner from '../spinner/Spinner';

const AphorismList = () => {
    const {aphorisms, aphorismsLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => 
        {
            dispatch( aphorismsFetching() );
            request("http://localhost:3030/aphorisms")
                .then((data) => {
                    dispatch( aphorismsFetched(data) );
                })
                .catch((err) => {
                    dispatch( aphorismsFetchingError() );
                });
        },
        // eslint-disable-next-line
        []
    );

    if (aphorismsLoadingStatus === "loading") {
        return <Spinner/>;
    }
    else if (aphorismsLoadingStatus === "error") {
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
                <AphorismListItem
                    key={id}
                    {...props}
                />
            );
        })
    }

    const elements = renderAphorismList(aphorisms);
    //
    return (
        <ul>
            {elements}
        </ul>
    );
}

export default AphorismList;