
const AphorismAddForm = () => {
    //
    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Автор</label>
                <input 
                    required
                    type="text" 
                    name="author" 
                    className="form-control" 
                    id="author" 
                    placeholder="Автор"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Высказывание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Текст"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать категорию</label>
                <select 
                    required
                    name="category"
                    className="form-select" 
                    id="category"
                >
                    <option >Категория...</option>
                    <option value="work">Работа</option>
                    <option value="health">Здоровье</option>
                    <option value="love">Любовь</option>
                    <option value="other">Прочее</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    );
}

export default AphorismAddForm;
