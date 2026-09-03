import React from 'react'
import { FiSearch } from "react-icons/fi";

const MovieToolbar = ({onAddMovie}) => {
  return (
    <div className='flex justify-between p-4 w-full mb-5'>
      <button onClick={onAddMovie} className='flex items-center gap-1  bg-[#2f2f2f] px-4 py-2 rounded-[5px] cursor-pointer hover:bg-[#3AE7E2] transition-colors duration-300'>
        +
        <p className='text-[14px]'>Add Movie</p>
      </button>
    </div>
  )
}

export default MovieToolbar
