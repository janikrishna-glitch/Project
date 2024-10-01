import React from 'react';
import './Component/Style.css'
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Menu from './Component/Menu';
import About from './Component/About';
import Products from './Component/Products';
import Review from './Component/Review';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Allfiles from './Component/Allfiles';
import MenuItemsDetails from './Component/MenuItemsDetails';






const App = () => {
  return (
    <div className="App">
      
   
      <Navbar />
      <MenuItemsDetails />
    

      <Routes>

        <Route path="/" element={< Allfiles/>} />
        <Route path="/Home" element={< Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Footer" element={<Footer />} />
       

      </Routes>
      <Footer />

    
    </div>
  );
};

export default App;

