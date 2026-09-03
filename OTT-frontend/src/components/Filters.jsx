import React, { useState } from 'react'
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineChevronUp } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Filtertypes from './Filtertypes';
const Filters = ({setIsFilterOpen, categories, types, selectedCategory, setSelectedCategory, selectedType, setSelectedType, handleApplyFilters}) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [isMediaTypeOpen, setIsMediaTypeOpen] = useState(false)
    
    const handleCategoryOpen = () => {
        setIsCategoryOpen(prev => !prev)
        if(isMediaTypeOpen){
            setIsMediaTypeOpen(prev => !prev)
        }
    }
    const handleMediaOpen = () => {
        setIsMediaTypeOpen(prev => !prev)
        if(isCategoryOpen){
            setIsCategoryOpen(prev => !prev)
        }
        
    }
  return (
    <div className='w-screen h-screen bg-black/20 backdrop-blur absolute inset-0 flex items-center justify-center z-100'>
      <div className='px-5 py-4 w-175 h-[70%] border-[0.3px] border-[#7f7f7f]/30 rounded-3xl backdrop-blur relative'>
        <div className='flex justify-between items-center border-[#7f7f7f]/30 mb-3'>
            <h1 className='text-2xl font-semibold'>Filters</h1>
            <div className='rounded-full bg-[#4e4e4e]/40 hover:bg-[#4e4e4e]/60 p-1.5 cursor-pointer' onClick={() => setIsFilterOpen(prev => !prev)}>
                <HiOutlineXMark size={16} />
            </div>
        </div>
        <div>
            <div className='border-t-[0.3px] border-[#7f7f7f]/30 flex items-center pt-3 gap-5'>
                <div onClick={handleCategoryOpen} className='flex gap-3 border-[0.3px] border-[#7f7f7f]/30 px-4 py-2 rounded-full hover:border-[#7f7f7f] transition-all duration-300'>
                    <h1   className='font-semibold '>Category</h1>
                    <div className='rounded-full p-1  bg-[#7f7f7f]/40 '>
                        {isCategoryOpen ? <HiOutlineChevronUp size={16} /> : <HiOutlineChevronDown size={16} />}
                    </div>
                </div>
                <div onClick={handleMediaOpen} className='flex gap-3 border-[0.3px] border-[#7f7f7f]/30 px-4 py-2 rounded-full hover:border-[#7f7f7f] transition-all duration-300'>
                    <h1 className='font-semibold '>Media Type</h1>
                    <div  className='rounded-full p-1  bg-[#7f7f7f]/40'>
                        {isMediaTypeOpen ? <HiOutlineChevronUp size={16} /> : <HiOutlineChevronDown size={16} />}
                    </div>
                </div>
            </div>
            <div>
                {isCategoryOpen && <Filtertypes filter={categories} selected={selectedCategory} setSelected={setSelectedCategory}/>}
                {isMediaTypeOpen && <Filtertypes filter={types} selected={selectedType} setSelected={setSelectedType}/>}
            </div>
        </div>
        <div className='absolute bottom-0 h-[10%] border-t-[0.3px] w-[94%] border-[#7f7f7f]/30 flex pt-2 gap-5 justify-end'>
            <div className='rounded-full py-4 px-9 h-5 flex items-center justify-center hover:bg-[#f1f0f0]'>
                <h1>Reset All</h1>
            </div>
            <div
                onClick={handleApplyFilters}
                className="bg-[#239D9A] hover:bg-[#6ec2c0] rounded-full py-4 px-9 h-5 flex items-center justify-center cursor-pointer"
            >
                <h1>Apply Filters</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Filters