"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import "./product.css";
import products from "./product";
import SearchComponent from "./SearchComponent";
import PaginationComponent from "./PaginationComponent";
import Filter from "./Filter";
import Link from "next/link";
const ITEMS_PER_PAGE = 8;

function PageContent() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query") || "";

  useEffect(() => {
    let updatedProducts = products;

    if (query) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.desc === selectedCategory
      );
    }

    setFilteredProducts(updatedProducts);
  }, [query, selectedCategory]);

  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentPageProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="w-full mx-auto max-w-[1440px]">
      <div className="allcontainer">
        <div
          className="flex h-[50vh] items-center flex-wrap bg-overlay sm:p-6 before:bg-title before:bg-opacity-70"
          style={{ backgroundImage: "url('/prod/breadcumb.jpg')" }}

        >
            <div className="text-center z-50 w-full">
              <h2 className="text-white text-[25px] md:text-[50px] font-normal text-center">
                პროდუქტები
              </h2>
              <p className="max-w-[672px] text-white mx-auto lg:text-xl">
              საუკეთესო ძილი ყველასთვის
              </p>
            </div>
         
      
        </div>
      </div>
      

      <div className="bg-white allcontainer">
        <div className="container pt-12 lg:pt-16 lg:!pb-16 mx-auto">
          <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

          <SearchComponent />

          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
            {currentPageProducts.map((i) => (
              <div key={i.id} className="max-w-sm w-full rounded-lg shadow-xl mb-9 relative group">
            
                <div className="w-full h-96 cursor-pointer overflow-hidden relative rounded-lg">
                  <Image
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
                    src={i.image[0]}
                    alt="productImg"
                  />
                </div>

         
                <div className="border border-gray-100 bg-white rounded-b-2xl flex flex-col justify-between leading-normal">
                  <div className="p-4 gap-y-3 ">
                    <h2 className="text-gray-800 font-bold text-xl">{i.title}</h2>
                    <p className="text-[16px] mb-5 text-gray-600 font-normal"> {i.desc} </p>
                    <Link className='outline-none mt-14 mx-auto rounded-lg cursor-pointer transition-all duration-150 ease-in-out border border-solid border-black px-4 py-2 sm:px-6 sm:py-3 text-[14px] sm:text-base uppercase focus:outline-none bg-[#052C46] text-white '   href={`/product/${i.id}`}   > 
                    დეტალები </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-span-full flex justify-center items-center mt-3">
              <PaginationComponent pageCount={pageCount} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
