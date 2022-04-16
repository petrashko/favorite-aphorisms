
const AphorismListItem = ({author, text, category}) => {

    let elementClassName;

    switch (category) {
        case 'work':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'health':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'love':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'other':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
        >
            <div className="card-body">
                <h3 className="card-title">{author}</h3>
                <p className="card-text">{text}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button
                    type="button"
                    className="btn-close btn-close"
                    aria-label="Close"
                ></button>
            </span>
        </li>
    );
}

export default AphorismListItem;
