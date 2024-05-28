import React from 'react';

const BlogPostPage = ({ blog2 }) => {
  
  const post = blog2.find((p) => p.id);

  return (
    <div className="card">
      <div className="card-header">
        <h2>{post.title}</h2>
      </div>
      <div className="card-img">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="card-body">
        <p> <b> Description: </b> {post.content}</p>
        
      </div>
      <div className="card-body">
        <h4>Author: {post.author}</h4>
      </div>
    </div>
  );
};

export default BlogPostPage;
