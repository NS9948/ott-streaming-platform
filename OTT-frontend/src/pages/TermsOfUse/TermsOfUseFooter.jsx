import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";


const TermsOfUseFooter = () => {
  return (
    <div>
        <div className='flex h-50 border-t border-b border-[#262F40] pt-6 justify-around'>
            <div className='flex flex-col'>
                <h1 className='font-bold mb-3 text-[20px]'>Support</h1>
                <div className='flex gap-1 flex-col'>
                    <Link className='hover:text-[#3DEEE9]'>Content Streaming & Monetization</Link>
                    <Link className='hover:text-[#3DEEE9]'>Investors and Partners</Link>
                    <Link className='hover:text-[#3DEEE9]'>Marketing Campaigns</Link>
                    <Link className='hover:text-[#3DEEE9]'>Insights & Recommendations From NABTT Community</Link>
                </div>
                
            </div>
            <div className='flex flex-col'>
                <h1 className='font-bold mb-3 text-[20px]'>Billing For Users & Content Creators</h1>
                <div  className='flex gap-1 flex-col'>
                    <Link className='hover:text-[#3DEEE9]'>Subscription Plans For Users</Link>
                    <Link className='hover:text-[#3DEEE9]'>Content Monetization For Content Creators</Link>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-bold mb-3 text-[20px]'>Social Media Accounts</h1>
                <div className='flex gap-7.5 justify-end'>
                    <div className='p-2.5 rounded-full bg-[#252D38] hover:bg-[#3DEEE9] cursor-pointer'>
                        <FaFacebookF className="text-xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors bg-" />
                    </div>
                    <div className='p-2.5 rounded-full bg-[#252D38] hover:bg-[#3DEEE9] cursor-pointer'>
                        <FaXTwitter className="text-xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors" />
                    </div>
                    <div className='p-2.5 rounded-full bg-[#252D38] hover:bg-[#3DEEE9] cursor-pointer'>
                        <FaInstagram className="text-xl text-white cursor-pointer hover:text-[#3AE7E2] transition-colors" />
                    </div>
                </div>
                </div>
        </div>
        <div className='text-[10px] text-[#D1D5DB] flex gap-3 justify-end p-5 h-25'>
            <p className='hover:text-white cursor-pointer'>Terms of Use</p>
            <p className='hover:text-white cursor-pointer'>Privacy Policy</p>
            <p className='hover:text-white cursor-pointer'>Cookie Policy</p>
        </div>
    </div>
    
  )
}

export default TermsOfUseFooter
