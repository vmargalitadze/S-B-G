

import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";

export default function SideLogo() {
 
    const phoneNumber = "+995599344706"; // Your WhatsApp number
 
  

  return (
    <div className="fixed bottom-5 z-50">
      <Link
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp"
        className=" cursor-pointer bg-green-600   "
      >
        <FaWhatsapp className="w-[50px] shadow-2xl hover:text-[#128c7e] text-green-600 h-[50px] " />
       
      </Link>
    </div>
  );
}
