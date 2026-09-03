import React from 'react'
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

const NavbarTermsOfUse = () => {
  return (
    <div className='flex items-center gap-50 p-3'>
        <div>
          <Link><img src={logo} alt="Logo" className='h-20 '/></Link>    
        </div>
        <div className='border-3 p-5 border-[#1F1F1F] rounded-2xl flex gap-10 font-bold'>
            <Link className='hover:text-[#3AE7E2] transition-colors duration-300'>Home</Link>
            <Link className='hover:text-[#3AE7E2] transition-colors duration-300'>Content Creators</Link>
            <Link className='hover:text-[#3AE7E2] transition-colors duration-300'>Marketing Campaigns</Link>
            <Link className='hover:text-[#3AE7E2] transition-colors duration-300'>Investors and Partners</Link>
            <Link className='hover:text-[#3AE7E2] transition-colors duration-300'>Improvements</Link>
        </div>
    </div>
  )
}

export default NavbarTermsOfUse
