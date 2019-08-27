import React from 'react';

const Comment = ({ text, votes, id, thumbUp, thumbDown }) =>
    <li>
        {text} <span>votes: {votes}</span> 
        <button onClick={() => thumbUp(id)}>Like</button> 
        <button onClick={() => thumbDown(id)}>Dislike</button>
    </li>;
export default Comment;