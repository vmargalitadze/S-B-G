"use client"
import React, {  Suspense, useMemo } from 'react';
import products from '../all/product';
import './item.css';
import Cards from '@/components/Cards/Cards';
import { useSearchParams } from 'next/navigation';
import PaginationComponent from '../all/PaginationComponent';

function Blankets() {
  const ITEMS_PER_PAGE = 8;
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

 
  const filteredProducts = useMemo(
    () => products.filter(product => product.desc === "საბანი"),
    []
  );

  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(
    () =>
      filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE),
    [filteredProducts, currentPage]
  );

  return (
    <>
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

        <div className="allcontainer">
          <div className="container pt-12 lg:pt-16 lg:!pb-16 mx-auto">
            <Cards products={paginatedProducts} />
            <div className="col-span-full flex justify-center items-center mt-3">
              <PaginationComponent pageCount={pageCount} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blankets />
    </Suspense>
  );
}
