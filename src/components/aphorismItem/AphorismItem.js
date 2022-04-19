
const AphorismItem = ({author, text, category, onDelete}) => {

    let categoryClassName;

    switch (category) {
        case 'work':
            categoryClassName = 'bg-danger bg-gradient';
            break;
        case 'health':
            categoryClassName = 'bg-primary bg-gradient';
            break;
        case 'love':
            categoryClassName = 'bg-success bg-gradient';
            break;
        case 'other':
            categoryClassName = 'bg-secondary bg-gradient';
            break;
        default:
            categoryClassName = 'bg-warning bg-gradient';
    }

    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white ${categoryClassName}`}
        >
            <div className="card-body">
                <h3 className="card-title">{author}</h3>
                <p className="card-text">{text}</p>
            </div>
            <span
                className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light"
                onClick={(ev) => onDelete()}
            >
                <button
                    type="button"
                    className="btn-close btn-close"
                    aria-label="Close"
                ></button>
            </span>
        </li>
    );
}

export default AphorismItem;
