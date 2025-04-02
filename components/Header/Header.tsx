import React from "react";
import Link from "next/link";
import Image from "next/image";

import Search from "./Search";
import ClientNavbar from "./Nav"

import logo from "@/public/about/axali.jpg";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#052C46] shadow-md z-50">
      <div className="wrapper container flex  justify-between px-4 py-4">
        
  
        <Link className="" href="/">
          <div className="border border-gray-500 rounded-full">
            <Image src={logo} width={100} alt="logo" className="rounded-full" />
          </div>
        </Link>

        {/* Center: Navbar */}
        <div className="flex-1 flex justify-end lg:justify-start">
          <ClientNavbar />
        </div>

        {/* Right: Search */}
        <div className="hidden mt-11 mr-4 md:block">
          <Search />
        </div>
      </div>
    </header>
  );
}
