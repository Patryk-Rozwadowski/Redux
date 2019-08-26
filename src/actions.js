import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

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

export const deleteComment = id => {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export const thumbUp = (commentId) => {
    return {
        type: THUMB_UP,
        id: commentId
    }
}

export const thumbDown = id => {
    return {
        type: THUMB_DOWN,
        id
    }
}