"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    children: [{ label: "რატომ sleep&bad?", link: "/why" }, { label: "გალერია", link: "/gallery" },  ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="fixed  z-50 w-full text-white ">
      <div className="flex items-center justify-between mx-auto  px-6">
        {/* Logo */}

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={item.link} className="flex  text-[18px] items-center gap-2 hover:text-gray-300">
                {item.label}
                {item.children && <FiChevronDown className={`transition ${hovered === index ? "rotate-180" : ""}`} />}
              </Link>
              <AnimatePresence>
                {hovered === index && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute  left-0 top-full mt-2 w-48 shadow-md bg-[#EBEBEB] p-4 rounded-md"
                  >
                    {item.children.map((child, idx) => (
               <Link
               key={idx}
               href={child.link}
               className="relative block text-center py-2 text-[16px] text-black  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
             >
               {child.label}
             </Link>
             
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button (Right-aligned) */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden  ml-auto">
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu  size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute -top-8 -right-6  w-full h-screen bg-[#EBEBEB] flex flex-col gap-4 shadow-lg"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="self-end">
              <FiX className="text-black" size={24} />
            </button>
            {navItems.map((item, index) => (
              <div key={index} className="w-full px-3">
                <Link
                  href={item.link}
                  className="block  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full text-center text-black text-lg py-3 border-b border-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-2">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        href={child.link}
                        className="block text-center  py-2 text-black text-[16px]  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
