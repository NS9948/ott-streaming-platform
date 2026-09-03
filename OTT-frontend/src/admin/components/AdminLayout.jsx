import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import Topbar from './Topbar'
import Sidebar from './Sidebar'


const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleMenuClick = () => {
    setIsSidebarOpen(prev => !prev)
  }
  return (
    <div className='flex h-screen bg-[#0F1113] text-white'>
        <Sidebar isSidebarOpen= {isSidebarOpen}/>
      <div  className='flex-1 flex flex-col' >
        <Topbar onMenuClick={handleMenuClick}/>
        <main className="flex-1 p-6 overflow-y-auto"><Outlet/></main>
      </div>
    </div>
  )
}

export default AdminLayout