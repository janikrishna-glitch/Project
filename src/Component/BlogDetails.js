
import React from 'react';
import { useParams } from 'react-router-dom';
import { blog } from './Blog'; 

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = blog.find((item) => item.id === parseInt(id));

  return (
    <div>
      <section className="blog-detail">
        <h1 className="heading">{blogPost.title}</h1>
        <div className="blog-content">
          <img src={blogPost.img} alt={blogPost.title} />
          <p>{blogPost.content}</p>
          <span>by admin / {blogPost.date}</span>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
