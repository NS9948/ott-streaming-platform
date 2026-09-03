import React from 'react'
import NavbarTermsOfUse from './NavbarTermsOfUse'
import logo from "../../assets/logo.webp";
import { HiMiniPlay } from "react-icons/hi2";
import TermsOfUseContents from './TermsOfUseContents';
import TermsOfUseFooter from './TermsOfUseFooter';

const TermsOfUse = () => {
  return (
    <div className='bg-black text-white'>
      <NavbarTermsOfUse/>

      <div className='w-full flex flex-col items-center justify-between h-160'>
        <img src={logo} alt="Logo" className='h-90 pt-13'/>
        <p className='text-4xl font-bold pb-5'>Where children and Families Enjoy Watching Purposeful Content</p>
      </div>
      <div className='w-full'>
        <div className="h-10 bg-[#207d7a] rounded-b-xl overflow-hidden flex items-center">
            <p className="marquee text-white font-bold text-[21px] italic">
                With NABTT, enjoy the best streaming and monetization experience for your content. You can stream your own movies, series, documentaries, etc.
            </p>
        </div>
        <div className='w-full flex items-center justify-center mt-8'>
            <div className='bg-[#04A3C7] w-60 rounded-4xl flex p-4 hover:scale-120 transition-all duration-500 hover:bg-[#68a9b8]'>
                <HiMiniPlay className="text-xl text-white" />
                <button className='text-[17px] font-bold'>Start Watching Now</button>
            </div>
        </div>

        <TermsOfUseContents/>
        <TermsOfUseFooter/>
        
        
      </div>
        
       
    </div>
  )
}

export default TermsOfUse
