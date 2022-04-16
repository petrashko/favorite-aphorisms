// /* eslint-disable */

import AphorismList from '../aphorismList/AphorismList';
import AphorismAddForm from '../aphorismAddForm/AphorismAddForm';
import AphorismCategories from '../aphorismCategories/AphorismCategories';
//
import './app.scss';

const App = () => {
    //
    return (
        <main className="app">
            <div className="content">
                <AphorismList/>
                <div className="content__interactive">
                    <AphorismAddForm/>
                    <AphorismCategories/>
                </div>
            </div>
        </main>
    );
}

// eslint-disable-next-line
export default App;
