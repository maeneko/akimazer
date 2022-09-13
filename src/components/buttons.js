import React from 'react';
import ReactDOM from 'react-dom';
export default function Button(props) {
    const content = props.posts.map((post) =>
        <li key={post.id}>
            <a href={post.content} className="butt">{post.title}</a>
        </li>
    );
    return (
        <ul className='buttons'>
            {content}
        </ul>
    );
}