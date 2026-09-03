import React from 'react'
import logo from "../assets/logo.webp";

const NavAuth = () => {
  return (
    <nav className='flex items-center justify-between w-full px-12 py-4 mb-7.5'>
      <img src={logo} alt="Logo" className='h-12.5'/>
      <select name="" id="" className="text-white focus:outline-none text-[15px] font-bold">
        <option value="">Language (En)</option>
        <option value="">English (En)</option>
        <option value="">Arabic (Ar)</option>
      </select>
    </nav>
  )
}

export default NavAuth
