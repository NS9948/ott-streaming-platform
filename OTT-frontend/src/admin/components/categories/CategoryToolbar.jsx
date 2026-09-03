import React from 'react'

const CategoryToolbar = ({onAddCategory}) => {
  return (
    <div className='flex items-center justify-between w-full mb-5'>
        <button className='cursor-pointer bg-[#2F2F2F] hover:bg-[#00B8DB] transition-colors duration-300 p-2 rounded-[5px] text-[13px] font-bold' onClick={onAddCategory}>+ Add Category</button>
    </div>
  )
}

export default CategoryToolbar
