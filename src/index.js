import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import axios from 'axios'
import { Provider } from 'react-redux';
import {store} from './redux/store.js'


axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:9000/api/users'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
