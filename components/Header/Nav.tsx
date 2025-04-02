/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"; // This makes it a client component

import React, { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

// Navigation Items
const navItems = [
  { label: "მთავარი", link: "/" },
  {
    label: "პროდუქტები",
    link: "/all",
    children: [
      { label: "ბალიში", link: "#" },
      { label: "საბანი", link: "#" },
      { label: "მატრასი", link: "#" },
      { label: "ტოპერი", link: "#" },
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Desktop Navigation */}
      <nav ref={dropdownRef} className="hidden md:flex items-center gap-4">
        {navItems.map((item, i) => (
          <div key={i} className="relative flex justify-center group">
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
              <div className="absolute top-full rounded-md right-0 w-48 bg-white text-black shadow-md opacity-0 group-hover:opacity-100 transition-all">
                {item.children.map((child, j) => (
                  <Link key={j} href={child.link ?? "#"} className="block text-black px-4 py-2 hover:bg-gray-200">
                    {child.label}
                  </Link>
                ))}
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
    <div className="fixed   left-0 top-0 z-50 flex h-full w-full justify-center bg-[#052C46] md:hidden">
        <div className="flex  text-white justify-and">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </div>
      <div className="h-full w-[65%] bg-[#052C46] text-white px-4 py-4">

        <div className="flex flex-col text-[16px] text-white gap-2 mt-4">
          {navItems.map((item, i) => (
            <SingleNavItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ label, link, children }: { label: string; link?: string; children?: any }) {
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
    <div ref={itemRef} className="relative px-2 text-white py-3 transition-all">
      <div className="flex justify-between items-center text-white">
        <Link href={link ?? "#"} className="flex-1">{label}</Link>
        {children && (
          <IoIosArrowDown
            className={`text-[20px] transition-all cursor-pointer ${isItemOpen ? "rotate-180" : "rotate-0"}`}
            onClick={() => setItemOpen(!isItemOpen)}
          />
        )}
      </div>

      {isItemOpen && children && (
        <div ref={animationParent} className="flex flex-col gap-1 rounded-md bg-white py-3 text-black">
          {children.map((child: { link: any; label: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, i: React.Key | null | undefined) => (
            <Link key={i} href={child.link ?? "#"} className="block px-4 py-2 " onClick={() => setItemOpen(false)}>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
