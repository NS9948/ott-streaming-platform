import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Shorts = () => {
  return (
    <div className='h-screen flex flex-col justify-between bg-[#030404] text-white items-center'>
        <Navbar/>
        <div className='h-screen flex justify-center items-center'>No shorts available</div>
        <Footer/>
    </div>
  )
}

export default Shorts
