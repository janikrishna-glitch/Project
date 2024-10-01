import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Review from './Review'
import Products from './Products'
import Blog from './Blog'
import Contact from './Contact'

export default function Allfiles() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
    </div>
  )
}
