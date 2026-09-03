import React from 'react'
import { FiBell,FiBellOff } from "react-icons/fi";

const Notification = () => {
  return (
    <div className='absolute right-0 w-75 border-t-3 border-[#30CDC8] bg-[#252D38]'>
        <div className='flex gap-2 items-center border-b border-[#3C424C] p-3'>
            <FiBell className="text-[#3AE7E2]" />
            <p className='font-bold'>Notifications</p>
        </div>
        <div className='flex flex-col p-10 items-center justify-center gap-2'>
            <div className='bg-[#303842] text-[#737373] rounded-full p-3'><FiBellOff size={30}/></div>
            <p>No notifications yet</p>
            <p className='text-center text-[10px] text-[#4a505b]'>We'll notify you when something arrives!</p>
        </div>
    </div>
  )
}

export default Notification
