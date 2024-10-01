
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [isCartActive, setCartActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'cart item 01',
      price: '$15.99',
      imgSrc: 'https://codingcirculate-restaurant-design.on.fleek.co/static/media/cart-item-1.e96f24935570ab6ca6f6.png',
    },
    {
      id: 2,
      name: 'cart item 02',
      price: '$15.99',
      imgSrc: 'https://codingcirculate-restaurant-design.on.fleek.co/static/media/cart-item-2.a126b21895f356e74acd.png',
    },
    {
      id: 3,
      name: 'cart item 03',
      price: '$15.99',
      imgSrc: 'https://codingcirculate-restaurant-design.on.fleek.co/static/media/cart-item-3.24f3692350f004b8004a.png',
    },
    {
      id: 4,
      name: 'cart item 04',
      price: '$15.99',
      imgSrc: 'https://codingcirculate-restaurant-design.on.fleek.co/static/media/cart-item-4.55373ba7056ffc971050.png',
    },
  ]);

  const navigate = useNavigate();

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navbarHandler = () => {
    setNavbarActive(!isNavbarActive);
    setSearchActive(false);
    setCartActive(false);
  };

  const searchHandler = () => {
    setSearchActive(!isSearchActive);
    setNavbarActive(false);
    setCartActive(false);
  };

  const cartHandler = () => {
    setCartActive(!isCartActive);
    setSearchActive(false);
    setNavbarActive(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'home') {
      
      navigate('/');
    } else if (searchQuery.toLowerCase() === 'about') {

      navigate('/About');
    } else if (searchQuery.toLowerCase() === 'menu') {
      navigate('/Menu');

    } else if (searchQuery.toLowerCase() === 'products') {
      navigate('/Products');

      
     } else if (searchQuery.toLowerCase() === 'review') {
      navigate('/Review');
    } else if (searchQuery.toLowerCase() === 'contact') {
      navigate('/Contact');
    } else if (searchQuery.toLowerCase() === 'blog') {
      navigate('/Blog');
    } else {
      navigate('/');
    }
    setSearchQuery('');
    setSearchActive(false);
  };

  const handleRemoveItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img
          src="https://codingcirculate-restaurant-design.on.fleek.co/static/media/logo.bbdaaa34654aff804cc3.png"
          alt="Logo"
        />
      </Link>
      <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} style={{fontSize:'23px'}}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Review">Review</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Blog">Blogs</Link>
      </nav>

      <div className="icons">
        <FaSearch className="fas fa-search" onClick={searchHandler} style={{ color: 'white', marginRight: '10px',fontSize:'20px' }} />
        <FaShoppingCart className="fas fa-shopping-cart" onClick={cartHandler} style={{ color: 'white', marginRight: '13px', fontSize:'20px' }} />
        <FaBars className="fas fa-bars" id="menu-btn" onClick={navbarHandler} style={{ color: 'white' }} />
      </div>

      <div className={`search-form ${isSearchActive ? 'active' : ''}`}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Search here.."
            id="search-box"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      

      <div className={`cart-items-container ${isCartActive ? 'active' : ''}`}>
        {filteredItems.map(item => (
          <div className="cart-item" key={item.id}>
            <FaTimes className="fas fa-times" onClick={() => handleRemoveItem(item.id)} />
            <img
              src={item.imgSrc}
              alt={item.name}
            />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}/-</div>
            </div>
          </div>
        ))}

        <a href="##" className="btn">
          checkout now
        </a>
      </div>
    </header>
  );
};

export default Navbar;





