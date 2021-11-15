import {createStore} from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {getUsersReducer} from "./redux/reducer";
import {Provider} from 'react-redux'

const store = createStore(getUsersReducer);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);
