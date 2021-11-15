import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {createStore} from 'redux'
import {cardReducer} from "./redux/reducer";
import {Provider} from "react-redux";

export const store = createStore(cardReducer);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)