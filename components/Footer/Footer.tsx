import Link from 'next/link'
import React from 'react'

import {  FaFacebook, FaInstagram, FaYoutube, FaWhatsappSquare } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative bg-black text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2">
      <div className="px-5 py-2">
                <Link href='/' className="text-base leading-6 text-white">
                    მთავარი
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/about"  className="text-base leading-6 text-white">
                    ჩვენს შესახებ
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/all"  className="text-base leading-6 text-white">
                    პროდუქტები
                </Link>
            </div>
          
         
           
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-white text-2xl ">
                <FaFacebook />
            </a>
            <a href="#" className="text-white text-2xl">
                <FaInstagram />
            </a>
            <a href="#" className="text-white text-2xl">
               <FaYoutube />
            </a>
           
            <a href="#" className="text-white text-2xl">
               <FaWhatsappSquare />
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
