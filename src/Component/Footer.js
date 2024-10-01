import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="share">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
          <a href="#" className="fab fa-pinterest"></a>
        </div>
        <div className="Links">
          <Link to="/" key="home">Home</Link>
          <Link to="/about" key="about">About</Link>
          <Link to="/menu" key="menu">Menu</Link>

          <Link to = "/Products" key = "Products">Products </Link>

          <Link to="/review" key="review">Review</Link>
          <Link to="/contact" key="contact">Contact</Link>
          <Link to="/blog" key="blogs">Blogs</Link>
        </div>
        <div className="credit">
          created by <span>Coding circulate</span> | all rights reserved
        </div>
      </section>
    </div>
  );
};

export default Footer;
