import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP = 'LIKE';
export const THUMB_DOWN = 'DISLIKE';

export const addComment = (text) => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export const editComment = (text, id) => {
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

export const thumbUp = id => {
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