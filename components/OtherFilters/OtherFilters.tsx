'use client';

import React from 'react';
import { Link } from "@/i18n/navigation";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Grid, Navigation } from 'swiper/modules';
import 'swiper/css/grid';
import SlugLinks from './Sluglinks';

const OtherFilters = () => {
  const params = useParams();
  const locale = params?.locale as string;
  const isGe = locale === 'ge';

  return (
    <div className="w-full relative">
      <div className="block lg:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          modules={[Grid, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
            },
          }}
          navigation={{
            prevEl: '.swiper-button-prev', 
            nextEl: '.swiper-button-next', 
          }}
        >
          {SlugLinks.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item.href}
                className="group rounded-2xl p-4 transition duration-300 flex flex-col items-center justify-center"
              >
                <div className="w-[60px] h-[60px] relative mb-2">
                  <Image
                    src={item.logo}
                    alt={isGe ? item.label : item.labelEn}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-center font-medium text-gray-800 group-hover:text-black transition">
                  {isGe ? item.label : item.labelEn}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex  justify-between relative w-full">
  <div className="swiper-button-prev text-2xl text-gray-800 cursor-pointer z-10">
    &#8592; 
  </div>
  <div className="swiper-button-next text-2xl text-gray-800 cursor-pointer z-10">
    &#8594;
  </div>
</div>

      </div>

      <div className="hidden lg:grid grid-cols-4 xl:grid-cols-5 gap-6">
        {SlugLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group rounded-2xl p-4 transition duration-300 flex flex-col items-center justify-center"
          >
            <div className="w-[60px] h-[60px] relative mb-2">
              <Image
                src={item.logo}
                alt={isGe ? item.label : item.labelEn}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-center font-medium text-gray-800 group-hover:text-black transition">
              {isGe ? item.label : item.labelEn}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherFilters;
