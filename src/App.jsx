import React from 'react'
import Navbar from './Component/Navbar'
import Work from './Component/Work'
import Stripes from './Component/Stripes'
function App() {
  return (
    <div className='bg-[#0F1215] w-full h-screen text-white font-satoshi '>
      <Navbar/>
      <Work/>
      <Stripes/>
    </div>
  )
}

export default App