import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Products = () => {
  const [SearchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/product-1.ca74090c36866e811ed8.png",
      title: "Big Burger",
      price: "7$"
    },
    {
      id: 2,
      img: "https://codingcirculate-restaurant-design.on.fleek.co/static/media/product-3.80abee240885f3eabce3.png",
      title: "Desert",
      price: "10$"
    },
    {
      id: 3,
      img: "",
      title: "Ice Cream",
      price: "100$"
    }
  ];

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(SearchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="search-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="text"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search for products"
            style={{ margin: '20px 0', padding: '10px', width: '40%' }} 
          />
          <button 
            onClick={handleSearch} 
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Search
          </button>
        </div>

        <div className="box-container">
          {(filteredProducts.length > 0 ? filteredProducts : products).map((item) => (
            <div className="box" key={item.id}>
              <div className="icons">
                <Link to="#"><FaShoppingCart /></Link>
                <Link to="#"><FaHeart /></Link>
                <Link to="#"><FaEye /></Link>
              </div>
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <div className="price">
                  {item.price} <span>$20.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;

