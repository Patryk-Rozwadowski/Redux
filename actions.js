import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP = 'LIKE';
const THUMB_DOWN = 'DISLIKE';

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

const like = id => {
    return {
        type: THUMB_UP,
        id
    }
}

const dislike = id => {
    return {
        type: THUMB_DOWN,
        id
    }
}

const boundeditComment = (text, id) => dispatch(editComment(text, id));
const boundAddComment = text => dispatch(addComment(text));
const boundDeleteComment = id => dispatch(deleteComment(id));
const boundLike = id => dispatch(like(id));
const dislike = id => dispatch(dislike(id));