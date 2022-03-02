import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider  store={store}>
                <App />
            </Provider>
        </React.StrictMode>, document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe( () => {
    rerenderEntireTree();
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
