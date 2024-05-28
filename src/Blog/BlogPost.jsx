import React from 'react';
import './BlogPost.css';  

const BlogPost = ({ title, image, content, author }) => (
  <div className="card">
    <div className="card-header">
      <h2>{title}</h2>
    </div>
    <div className="card-img">
      <img src={image} alt={title} />
    </div>
    <div className="card-body">
      <p> <b>Description:</b> {content}</p>
    </div>
    <div className="card-body">
      <h4>Author: {author}</h4>
    </div>
  </div>
);

export default BlogPost;
