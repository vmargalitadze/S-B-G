/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"; // This makes it a client component

import React, { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";
import logo from "@/public/about/axali.jpg";
import Image from "next/image";
import './nav.css'

// Navigation Items
const navItems = [
  {
    label: "პროდუქტები",
    link: "/all",
    children: [
      { label: "ბალიში", link: "/pillows" },
      { label: "საბანი", link: "/blanket" },
      { label: "მატრასი", link: "/matrass" },
      { label: "ტოპერი", link: "/toper" },
      { label: "კატალოგი", link: "/catalogue" },
    ],
  },
  {
    label: "ჩვენს შესახებ",
    link: "/about",
    children: [{ label: "რატომ sleep&bad?", link: "/why" }],
  },
];

export default function ClientNavbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4">
        {navItems.map((item, i) => (
          <div key={i} className="relative flex justify-start group">
            {/* Parent Link */}
            <Link
              href={item.link ?? "#"}
              className="text-white text-2xl px-4 py-3 flex items-center relative"
            >
              {item.label}
              {item.children && (
                <IoIosArrowDown className="absolute px-2 text-[16px] -right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-200 group-hover:rotate-180" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.children && (
              <div className="absolute top-full left-0 w-64 bg-[#EBEBEB] text-gray-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ul className="bg-[#EBEBEB] text-gray-800 w-full">
                  {item.children.map((child, j) => (
                    <li key={j} className="text-sm leading-8 font-normal hover:bg-[#052C46] hover:text-white transition-all duration-300">
                      <Link href={child.link ?? "#"} className="block pl-20 py-2">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <FiMenu onClick={() => setSideMenu(true)} className="cursor-pointer text-white text-4xl md:hidden" />

      {/* Mobile Menu */}
      {isSideMenuOpen && <MobileNav closeSideMenu={() => setSideMenu(false)} />}
    </>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#052C46] md:hidden">
      <div className="relative h-full bg-[#052C46] text-white px-4 py-4">

        {/* Close Icon Positioned on Top-Right */}
        <AiOutlineClose 
          onClick={closeSideMenu} 
          className="cursor-pointer text-4xl absolute top-4 right-4" 
        />

   
        <Link onClick={closeSideMenu}  href="/" className="flex justify-center w-full">
          <div className="border-[1px] rounded-full p-1 flex items-center justify-center">
            <Image 
              src={logo} 
              
              width={80} 
              height={80} 
              alt="logo" 
              className="rounded-full object-contain" 
            />
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="w-full flex flex-col items-center mt-6">
          {navItems.map((item, i) => (
            <SingleNavItem key={i} {...item} closeSideMenu={closeSideMenu} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({
  label,
  link,
  children,
  closeSideMenu,
}: {
  label: string;
  link?: string;
  children?: any;
  closeSideMenu: () => void;
}) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setItemOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={itemRef} className="relative text-white py-3 transition-all">
      <div className="flex justify-between items-center">
        <Link href={link ?? "#"} className="flex-1" onClick={closeSideMenu}>
          {label}
        </Link>
        {children && (
          <IoIosArrowDown
            className={`text-[20px] transition-all cursor-pointer ${isItemOpen ? "rotate-180" : "rotate-0"}`}
            onClick={() => setItemOpen(!isItemOpen)}
          />
        )}
      </div>
      
      {/* Submenu */}
      {isItemOpen && children && (
        <ul ref={animationParent} className="bg-[#EBEBEB] text-gray-800 w-full rounded-md py-3">
          {children.map((child: { link: string; label: string }, i: number) => (
            <li key={i} className="text-sm leading-8 font-normal hover:bg-slate-200 transition-all duration-300">
              <Link 
                href={child.link} 
                className="px-4 py-2 flex justify-center items-center" 
                onClick={closeSideMenu}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
