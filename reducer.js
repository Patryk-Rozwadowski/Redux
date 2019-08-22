import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const initialState = {
    comments: [],
    users: []
}

const app = (state = initialState, action) => {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
}