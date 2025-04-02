import Link from "next/link";
import React from "react";
import Image from "next/image";

// Define the Product type
interface Product {
  id: string;
  title: string;
  desc: string;
  image: string[];
}

// Define the props type
interface CardsProps {
  products: Product[];
}

function Cards({ products }: CardsProps) {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
      {products.map((product) => (
        <div key={product.id} className="max-w-sm w-full rounded-2xl shadow-xl mb-9 relative group">
          {/* Image Container */}

          <div className="w-full h-96 cursor-pointer overflow-hidden relative rounded-lg">
            <Link href={`/product/${product.id}`}>
            
            <Image
              fill
              className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg"
              src={product.image[0]}
              alt={product.title}
            />
            </Link>
          </div>

          {/* Card Content */}
          <div className="border border-gray-100 bg-white rounded-b-2xl flex flex-col justify-between leading-normal">
            <div className="p-4">
              <Link className="hover:underline" href={`/product/${product.id}`} >
              
              <h2 className="text-gray-800 font-bold text-xl">{product.title}</h2>
               </Link>
              <p className="text-[16px] mb-5 text-gray-600 font-normal">{product.desc}</p>

          
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
