import React, { useState, useEffect } from 'react';

const Blog = () => {

  const [hasError, setErrors] = useState(false);
  const [blogPosts, setBlogPosts] = useState({});

  async function fetchData() {
    const res = await fetch("https://dev.to/api/articles?username=sharkham");
    res
      .json()
      .then(res => setBlogPosts(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(blogPosts)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default Blog;
