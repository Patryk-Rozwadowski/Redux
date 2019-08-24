import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP = 'LIKE';
export const THUMB_DOWN = 'DISLIKE';

const addComment = (text) => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

const deleteComment = id => {
    return {
        type: DELETE_COMMENT,
        id
    }
}

const thumbUp = id => {
    return {
        type: THUMB_UP,
        id
    }
}

const thumbDown = id => {
    return {
        type: THUMB_DOWN,
        id
    }
}

const boundeditComment = (text, id) => dispatch(editComment(text, id));
const boundAddComment = text => dispatch(addComment(text));
const boundDeleteComment = id => dispatch(deleteComment(id));
const boundLike = id => dispatch(thumbUp(id));
const dislike = id => dispatch(thumbDown(id));