import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Downloads = () => {
  return (
    <div className='h-screen flex flex-col justify-between bg-[#030404] text-white'>
        <Navbar/>
        <main className="flex-1 pt-20 px-6 md:px-10">
            <h1 className="text-3xl font-bold mb-2">Downloads...</h1>
            <p className="text-gray-400 mb-8">
                All the movies you've downloaded for later.
            </p>
        </main>
        <Footer/>
    </div>
  )
}

export default Downloads
