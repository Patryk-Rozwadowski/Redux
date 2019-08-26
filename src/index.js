import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import comments from './comments.js';
import users from './users.js';
import { addComment } from './actions.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import DevTools from './DevTools';


const reducer = combineReducers({
    comments,
    users
});

const store = createStore(
    reducer,
    DevTools.instrument()
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

store.dispatch(addComment('First commnet'));

serviceWorker.unregister();
