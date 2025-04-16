
import React from "react";

import { FaArrowRight } from "react-icons/fa";
import "./single.css";

import Link from "next/link";


import Cards from "../Cards/Cards";
import { getAllProduct } from "@/lib/actions/actions";



async function Products() {
  const { data } = await getAllProduct();
  const items = data.slice(0, 4)

  return (
<section className=" mt-5 pt-16    lg:pb-16 ">
  <div className="container px-6 mx-auto">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-6 lg:mb-0">
      <h2 className="text-xl lg:text-[25px] leading-tight text-center mb-4 font-semibold">
        ჩვენი პროდუქტები
      </h2>
      <div className="flex items-center gap-2 group"> 
  <Link className="flex text-[16px] lg:text-[18px] gap-2 items-center hover:text-primary font-medium transition-all border-primary" href="/all">
    <span>დაათვალიერე</span>
    <span className="transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">
      <FaArrowRight />
    </span>
  </Link>
</div>

    </div>

   
    <Cards products={items} />
  </div>
</section>

 
  
  );
}

export default Products;
