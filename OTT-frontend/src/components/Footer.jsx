import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-7.5 py-10 text-white ">
        <div className='flex gap-10 font-bold text-[15px]'>
            <Link to='/' className='hover:text-[#3DEEE9]'>Home</Link>
            <Link to='#' className='hover:text-[#3DEEE9]'>Support</Link>
            <Link to='/subscription' className='hover:text-[#3DEEE9]'>Subscription</Link>
            <Link to='/termsOfUse' className='hover:text-[#3DEEE9]'>Terms of Use</Link>
        </div>
        <div className='flex gap-7.5'>
            <div className='p-2.5 rounded-full bg-[#252D38] hover:bg-[#3DEEE9] cursor-pointer'>
                <FaFacebookF className="text-2xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors bg-" />
            </div>
            <div className='p-2.5 rounded-full bg-[#252D38] hover:bg-[#3DEEE9] cursor-pointer'>
                <FaXTwitter className="text-2xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors" />
            </div>
            <div className='p-2.5 rounded-full bg-[#252D38] hover:bg-[#3DEEE9] cursor-pointer'>
                <FaInstagram className="text-2xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors" />
            </div>
        </div>
        <div className='text-[10px]'>All Rights Reserved @CLICKS LLC 2025</div>
    </footer>
  )
}

export default Footer
