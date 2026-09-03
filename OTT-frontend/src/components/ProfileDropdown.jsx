import React from 'react'
import { FiSettings,FiLogOut } from "react-icons/fi";
import { logout } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/signin")
    }
  return (
    <div className='absolute bottom-[-250%] border-t-4 border-[#30CDC8] bg-[#252D38] flex flex-col gap-5 p-2 w-45 cursor-pointer'>
      <div className='flex gap-3 items-center hover:text-[#3AE7E2] transition-colors duration-300 w-full'>
        <FiSettings/>
        <p>Account Settings</p>
      </div>
      <div className='flex gap-3 items-center hover:text-[#3AE7E2] transition-colors duration-300'>
        <FiLogOut/>
        <button onClick={handleLogout} className='cursor-pointer'>Logout</button>
      </div>
    </div>
  )
}

export default ProfileDropdown
