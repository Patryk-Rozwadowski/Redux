import React from 'react';
import Comment from './CommentContainer';

const CommentsList = (props) =>

    <ul>
        {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </ul>;


export default CommentsList;