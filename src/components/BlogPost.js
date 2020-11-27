import React from 'react';

const BlogPost = (props) => {
  return (
    <div>
      <p>{props.data.title}</p>
    </div>
  );
}

export default BlogPost;
