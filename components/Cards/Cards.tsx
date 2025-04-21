"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import React, { useState } from "react";
import { useLocale } from 'next-intl';
import { ProductType } from "@/lib/ProductType";

import Image from "next/image";
import { cn } from "@/lib/utils";


interface CardsProps {
  products: ProductType[];
}

const Thumbnail = ({ src, index, current, setCurrent }: { src: string; index: number; current: number; setCurrent: (i: number) => void }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={() => setCurrent(index)}
      className={cn(
        "p-1 cursor-pointer rounded-md relative w-[80px] h-[80px]",
     
      )}
    >
      {/* Skeleton Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md z-0" />
      )}

      {/* Actual image */}
      <Image
        src={src}
        alt="Thumbnail"
        width={80}
        height={80}
        className="w-[80px] h-[80px] object-cover rounded-md z-10"
        onLoad={() => setLoaded(true)}
     
      />
    </div>
  );
};

function Cards({ products }: CardsProps) {
  const locale = useLocale();
  const isGe = locale === 'ge';

  
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
   {products.map((product) => {
  const title = isGe ? product.titleKa : product.titleEn;
  const category = isGe ? product.categoryKa : product.categoryEn;

  const [loaded, setLoaded] = useState(false); // <- moved inside map

  return (
    <div key={product.id} className="max-w-sm w-full rounded-2xl shadow-xl lg:mb-9 relative group">
      <div className="w-full h-96 cursor-pointer overflow-hidden relative rounded-lg">
        <Link href={`/product/${product.id}`}>
          {/* Skeleton Overlay */}
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg z-0" />
          )}

          {/* Actual Image */}
          <Image
            height={384}
            width={384}
            className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg z-10"
            src={product.images?.[0] ?? '/default-image.jpg'}
            alt={title}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </Link>
      </div>

      <div className="border border-gray-100 bg-white rounded-b-2xl flex flex-col justify-between leading-normal">
        <div className="p-4">
          <Link href={`/product/${product.id}`}>
            <h2 className="relative text-gray-800 font-bold text-xl after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              {title}
            </h2>
          </Link>
          <p className="text-[16px] lg:text-[18px] mb-5 text-gray-600 font-normal">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
})}

    </div>
  );
}


export default Cards;
