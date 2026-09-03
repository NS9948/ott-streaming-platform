import React from 'react'
import logo from "../../assets/logo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import {logout} from "../../utils/storage"



const Sidebar = ({isSidebarOpen}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate('/signin', {replace: true})
  }
  return (
    <div className={`bg-[#0F1113] lg:static z-50 w-60 flex flex-col items-center justify-between h-screen p-10 fixed top-0 transition-all duration-300 ${isSidebarOpen ? "left-0" : "-left-full"}`}>
      <div>
        <img src={logo} alt="Logo" className='size-14.5 cursor-pointer'  onClick={() => navigate('/', {replace: true})}/>
      </div>
      <nav className='flex flex-col gap-5 font-bold text-[20px]'>
        <NavLink to={'/admin/dashboard'} className={({ isActive }) =>`hover:text-[#3AE7E2] ${isActive ? "text-[#3AE7E2]" : "text-white"}`}>Dashboard</NavLink>
        <NavLink to={'/admin/movies'}  className={({ isActive }) =>`hover:text-[#3AE7E2] ${isActive ? "text-[#3AE7E2]" : "text-white"}`}>Movies</NavLink>
        <NavLink to={'/admin/categories'}  className={({ isActive }) =>`hover:text-[#3AE7E2] ${isActive ? "text-[#3AE7E2]" : "text-white"}`}>Categories</NavLink>
        <NavLink to={'/admin/hero'}  className={({ isActive }) =>` hover:text-[#3AE7E2] ${isActive ? "text-[#3AE7E2]" : "text-white"}`}>Hero Banner</NavLink>
      </nav>
      <button className='cursor-pointer font-bold bg-[#29a7a2] hover:bg-[#4f8582] transition-colors duration-300 rounded-[5px] px-5 py-2' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Sidebar
