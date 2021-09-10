import React from 'react';

import {
    useParams
} from 'react-router-dom';

export default (props) => {
    // Get the "id" (our Array index) from React Router.
    
    // Use the id to get a specific post from the Array.
    const { id } = useParams();
    const post = props.posts[id];
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>

    );
};