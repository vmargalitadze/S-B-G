import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SlugLinks from './Sluglinks'

function OtherFilters() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {SlugLinks.map((item, index) => (
        <div key={index} className="flex flex-row items-center text-center">
          <Image
            width={50}
            height={50}
            src={item.logo}
            alt={item.text}
            className="mb-2 object-contain"
          />
          <Link href={item.href} className="ml-3 text-[16px] text-black">
            {item.text}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default OtherFilters;
