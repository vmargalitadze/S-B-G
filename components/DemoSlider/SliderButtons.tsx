import Link from "next/link";
import React from "react";

interface ButtonProps {
  id: number;
  text: string;

  type: string;
}

const SliderButtons: React.FC<{ buttons: ButtonProps[] }> = ({ buttons }) => {
  return buttons.map(({ id,  text }) => (
    <Link href={text} className=" outline-none rounded-lg cursor-pointer transition-all duration-150 ease-in-out 
                border border-solid border-black px-4 py-2 sm:px-6 sm:py-3 
                text-[14px] sm:text-[18px] uppercase focus:outline-none 
              bg-[#052C46] hover:text-white" target="_blank" key={id}>
      <span>{text}</span>
    </Link>
  ));
};

export default SliderButtons;
