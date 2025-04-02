
import React from "react";

import { FaArrowRight } from "react-icons/fa";
import "./single.css";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

import products from "@/app/all/product";
import Cards from "../Cards/Cards";



function Products() {
  const items = products.slice(0, 4)
  return (
<section className=" mt-5 pt-16  pb-18  lg:pb-16 ">
  <div className="container px-6 mx-auto">
    {/* Header Section */}
    <div className="flex flex-col lg:flex-row justify-between items-center mb-6 lg:mb-0">
      <h2 className="text-xl lg:text-[30px] leading-tight text-center mb-4 font-semibold">
        ჩვენი პროდუქტები
      </h2>
      <div className="flex items-center gap-2 group"> {/* Add group class here */}
  <Link className="flex gap-2 items-center hover:text-primary font-medium transition-all border-primary" href="/all">
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
