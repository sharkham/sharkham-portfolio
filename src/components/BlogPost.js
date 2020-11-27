import React from 'react';

const BlogPost = (props) => {
  return (
    <li>
      <a href={props.data.canonical_url} target="_blank">{props.data.title}</a>
    </li>
  );
}

export default BlogPost;
