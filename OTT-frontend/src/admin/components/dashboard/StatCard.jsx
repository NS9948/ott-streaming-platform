import React from 'react'

const StatCard = ({icon,title,value,change}) => {
  return (
    <div className='flex flex-col gap-3 border p-3 rounded-xs bg-[#494a4a] border-gray-700'>
        <div className="text-2xl text-white">
            {icon}
        </div>
        <div className='flex flex-col gap-1'>
            <p className="text-sm font-medium text-zinc-400">{title}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div>
            <p className="text-xs text-green-400">{change}</p>
        </div>
      
    </div>
  )
}

export default StatCard
