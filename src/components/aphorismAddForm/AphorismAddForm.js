import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//
import { v4 as uuidv4 } from 'uuid';
//
import { useHttp } from '../../hooks/http.hook';
import { aphorismCreated } from '../../actions';

const AphorismAddForm = () => {
    const [aphosismAuthor, setAphosismAuthor] = useState('');
    const [aphosismText, setAphosismText] = useState('');
    const [aphosismCategory, setAphosismCategory] = useState('');
    //
    const {categoryList, categoriesLoadingStatus} = useSelector(state => state.category);
    //
    const dispatch = useDispatch();
    //
    const {request} = useHttp();

    //
    const onSubmitHandler = (e) => {
        e.preventDefault();
        //
        const newAphorism = {
            id: uuidv4(),
            author: aphosismAuthor,
            text: aphosismText,
            category: aphosismCategory
        }

        // Отправляем данные на сервер в формате JSON
        request("http://localhost:3030/aphorisms", "POST", JSON.stringify(newAphorism))
            .then((res) => {
                console.log(res, 'Отправка успешна');
            })
            .then(() => {
                // ТОЛЬКО если запрос успешен - отправляем данные в store
                dispatch( aphorismCreated(newAphorism) );
            })
            .catch((err) => {
                console.log(err);
            });

        // Очищаем форму после отправки
        setAphosismAuthor('');
        setAphosismText('');
        setAphosismCategory('');
    }

    //
    const renderCategories = (categories, status) => {
        if (status === "loading") {
            return (
                <option>Загрузка элементов</option>
            );
        }
        else if (status === "error") {
            return (
                <option>Ошибка загрузки</option>
            );
        }
        
        if (categories && categories.length > 0 ) {
            return categories.map(({name, label}) => {
                // Один из фильтров тут не нужен
                if (name === 'all') {
                    // eslint-disable-next-line
                    return;
                }

                return (
                    <option
                        key={name}
                        value={name}
                    >
                        {label}
                    </option>
                );
            })
        }
    }

    //
    return (
        <form
            className="border p-4 shadow-lg rounded"
            onSubmit={(ev) => onSubmitHandler(ev)}
        >
            <div className="mb-3">
                <label htmlFor="author" className="form-label fs-4">Автор</label>
                <input
                    required
                    className="form-control" 
                    type="text"
                    id="author" 
                    name="author"
                    placeholder="Автор"
                    value={aphosismAuthor}
                    onChange={(ev) => setAphosismAuthor(author => ev.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Высказывание</label>
                <textarea
                    required
                    className="form-control" 
                    id="text" 
                    name="text"
                    placeholder="Текст"
                    style={{"height": '130px'}}
                    value={aphosismText}
                    onChange={(ev) => setAphosismText(text => ev.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Выбрать категорию</label>
                <select 
                    required
                    className="form-select" 
                    id="category"
                    name="category"
                    value={aphosismCategory}
                    onChange={(ev) => setAphosismCategory(cat => ev.target.value)}
                >
                    <option value="">Категория...</option>
                    {
                        renderCategories(categoryList, categoriesLoadingStatus)
                    }
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    );
}

export default AphorismAddForm;
