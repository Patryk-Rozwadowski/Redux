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
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.text = action.text;
                    return comment;
                }
            })

        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.id)

        case THUMB_UP:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, votes: comment.votes + 1 }
                }
            });

        case THUMB_DOWN:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, votes: comment.votes - 1 }
                }
            });
        default:
            return state;
    }
}