import Image from 'next/image';
import BgImage from '@/public/hero/hero-bg_cleanup.png'

import React from 'react'

function Hero() {
  return (
    <section className="relative  w-full h-[850px] text-white flex items-center overflow-hidden">
    <div className="absolute mt-[80px] inset-0 z-0">
      <Image 
        src={BgImage}
        alt="Hero Background"
      
     
        className="w-full h-full object-cover"
      />
    </div>
  
    <div className="container mx-auto px-4 relative z-10">
   
   
      <h1 className="text-white sm:pt-10 pt-[50px] lg:mt-0 text-[25px] md:text-[50px] font-normal">Sleep & Bed Georgia</h1>
    
     
    </div>
  </section>
  
  )
}

export default Hero