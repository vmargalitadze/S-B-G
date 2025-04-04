"use client";
import React from 'react';
;
import 'swiper/css'; // Import Swiper styles
import "swiper/css/effect-coverflow";


import './hero.css';
import "swiper/css/pagination";
import Link from 'next/link';

function Hero() {
  return (
    <>
  <section className=' bg-hero pt-[225px] pb-[54px] relative  lg:bg-center lg:mb-24  bg-right bg-cover bg-no-repeat text-white  w-full h-[850px]'>

      <div className="text-center z-50 w-full">
            <h2 className=" text-[30px] tracking-[.25em] md:text-[50px]  lg:mb-0 font-normal text-center">
            GEORGIA
            </h2>
            <h2 className=" text-[25px] md:text-[50px]  lg:mb-0 font-normal text-center">
            Sleep&Bed
            </h2>
            <p className="max-w-[672px] text-white mx-auto mb-[20px] lg:mb-[40px] lg:text-xl">
              საუკეთესო ძილი ყველასთვის
            </p>
            <Link
  className="herolink px-[35px] py-[9px] 
  mb-[160px] text-xl lg:mb-[190px] rounded-md backdrop-blur-md transition lg:py-[16px] lg:px-[80px]"
  href="/all"
>
  დაათვალიერე
</Link>
          </div>
  </section>


      
    </>
  );
}

export default Hero;
