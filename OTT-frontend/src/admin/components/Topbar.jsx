import React from 'react'
import { FiUser } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Topbar = ({onMenuClick}) => {
  return (
    <div className='flex justify-between items-center px-2.5 py-2.5 '>
      <div className="w-10">
        <button className='hover:text-[#3AE7E2] cursor-pointer lg:hidden' onClick={onMenuClick}>
          <HiOutlineMenu size={24} />
        </button>
      </div>
      

      {/* <div className='flex items-center gap-10 '>

        <div>
        <button>
              <FiSearch className="text-xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors"/>
        </button>
        </div>
        
        <button className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center cursor-pointer">
          <FiUser className="text-white text-2xl" />
        </button>

      </div> */}
      
    </div>
  )
}

export default Topbar
