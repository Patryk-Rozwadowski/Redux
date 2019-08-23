import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, THUMB_UP, THUMB_DOWN } from './actions';

export const comments = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
                , ...state];

        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comment: [
                    {
                        id: action.id,
                        text: action.text
                    }
                ]
            });

        case DELETE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case THUMB_UP:
            return Object.assign({}, state, {
                comments: [id: action.id]
            })

        case THUMB_DOWN:
            return Object.assign({}, state, {
                comments: [id: action.id]
            })
        default:
            return state;
    }
}