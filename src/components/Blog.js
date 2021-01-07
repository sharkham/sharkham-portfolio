import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost'

const Blog = () => {

  const [hasError, setErrors] = useState(false);
  const [blogPosts, setBlogPosts] = useState(null);

  async function fetchData() {
    const res = await fetch("https://dev.to/api/articles?username=sharkham");
    res
      .json()
      .then(res => {
        setBlogPosts(res)
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const displayPosts = () => {
    // if (!!blogPosts) {
      return blogPosts.map(post => {
      return(
        <BlogPost data={post} key={post.id}/>
      )
      })
    // }
    // console.log(blogPosts);
  }

  return (
    <div className="blog-posts">
      <p>I blog about coding sometimes! Check out my most recent posts here, or find more of them on my <a href="https://dev.to/sharkham" target="_blank">DEV profile</a>.</p>
      <ul>
        {blogPosts && displayPosts()}
      </ul>
      {/* <hr />
      <span>Has error: {JSON.stringify(hasError)}</span> */}
    </div>
  );
}

export default Blog;
