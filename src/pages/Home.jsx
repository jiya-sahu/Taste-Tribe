import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Categorymenu from '../components/Categorymenu.jsx'
import Fooditems from '../components/FoodItems.jsx'
import Cart from '../components/Cart.jsx'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Categorymenu/>
      <Fooditems/>
      <Cart/>
    </div>
  )
}

export default Home
