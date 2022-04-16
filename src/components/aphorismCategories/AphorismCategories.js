
const AphorismCategories = () => {
    //
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Фильтры по категориям</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Работа</button>
                    <button className="btn btn-primary">Здоровье</button>
                    <button className="btn btn-success">Любовь</button>
                    <button className="btn btn-secondary">Прочее</button>
                </div>
            </div>
        </div>
    );
}

export default AphorismCategories;
