"use client";
import React, { Suspense, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import "./product.css";
import products from "./product";
import SearchComponent from "./SearchComponent";
import PaginationComponent from "./PaginationComponent";
import Filter from "./Filter";

import Cards from "@/components/Cards/Cards";

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
    <section className="w-full mx-auto ">
      <div className="">
        <div
          className="flex h-[50vh] items-center flex-wrap bg-overlay sm:p-6 before:bg-title before:bg-opacity-70"
          style={{ backgroundImage: "url('/prod/breadcumb.jpg')" }}

        >
            <div className="text-center z-50 w-full">
              <h2 className="text-white sm:pt-10 pt-[50px] lg:mt-0 text-[25px] md:text-[50px] font-normal text-center">
                პროდუქტები
              </h2>
              <p className="max-w-[672px] text-white mx-auto lg:text-xl">
              საუკეთესო ძილი ყველასთვის
              </p>
            </div>
         
      
        </div>
      </div>
      

      <div className=" allcontainer">
        <div className="container pt-12 lg:pt-16 lg:!pb-16 mx-auto">
          <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

          <SearchComponent />

          <Cards products={currentPageProducts} />

            <div className="col-span-full mb-6 flex justify-center items-center mt-3">
              <PaginationComponent pageCount={pageCount} />
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
