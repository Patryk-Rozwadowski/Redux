import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

import comments from './comments.js';
import users from './users.js';
import addComment from './actions.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = combineReducers({
    comments,
    users
});
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

store.dispatch(addComment('First '));
store.dispatch(addComment(' comment'));


serviceWorker.unregister();
