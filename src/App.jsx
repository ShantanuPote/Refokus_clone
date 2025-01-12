import React from 'react'
import Navbar from './Component/Navbar'
import Work from './Component/Work'
import Stripes from './Component/Stripes'
import Products from './Component/Products'
import Marques from './Component/Marques'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import Cursor from './Component/Cursor'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-[#0F1215] w-full h-full text-white font-satoshi '>
      <Cursor/>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marques/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App