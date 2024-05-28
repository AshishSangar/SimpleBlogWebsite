import React from 'react';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom';

const BlogComponent = ({ blog1 }) => {
  return (
    <div>
      
      {blog1.map((e) => (
        <Link key={e.id} to={`/${e.id}`}style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Blog: {e.id}</h1>
           <BlogPost title={e.title} image={e.image} content={e.content} author={e.author} />
        </Link>
      ))}
    </div>
  );
}

export default BlogComponent;
