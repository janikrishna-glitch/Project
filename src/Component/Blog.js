import React, { useState } from "react";
import { Link } from "react-router-dom";

const blog = [
  {
    id: 1,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/blog-1.065d12567fbfbd854b28.jpeg",
    title: "Tasty and Refreshing Spices",
    date: "21st May, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.",
  },
  {
    id: 2,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/blog-2.aad862135a6f55136148.jpeg",
    title: "Discover the Secrets of Mediterranean Cuisine",
    date: "15th June, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.",
  },
  {
    id: 3,
    img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/blog-3.facb0a62c6f95b805de3.jpeg",
    title: "A Journey Through Exotic Flavors",
    date: "5th July, 2021",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.",
  },

 
  
];

const Blog = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>

        <div className="box-container">
          {blog.map((item) => (
            <div className="box" key={item.id}>
              <div className="image">
                <img src={item.img} alt="Blog" />
              </div>
              <div className="content">
                <Link to={`/blog/${item.id}`} className="title">
                  {item.title}
                </Link>
                <span>by admin / {item.date}</span>
                <p>
                  {expandedId === item.id ? item.content : `${item.content.slice(0, 100)}...`}
                </p>
                <a href="##" className="btn" onClick={() => toggleExpand(item.id)}>
                  {expandedId === item.id ? 'read less' : 'read more'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

