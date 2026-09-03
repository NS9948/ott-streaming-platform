import React from 'react'

const LatestUserCard = ({user}) => {
  return (
    <div className='flex flex-col w-full items-center rounded-lg bg-[#494a4a] border-gray-700 pt-3 pb-3 border'>
        <p className='font-semibold'>{user.email}</p>
        <p className="text-[7px] text-gray-400">User created at {user.createdAt}</p>
    </div>
  )
}

export default LatestUserCard
