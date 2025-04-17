"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./slider.css";
// Our custom button component
import SliderButtons from "./SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
<section className="relative  w-full h-[870px] overflow-hidden bg-black">
  <Swiper
    pagination={{ type: "bullets", clickable: true }}
    modules={[Autoplay, Pagination]}
    className="h-[870px] w-full"
  >
    {data.map(({ id, image, tagline, title, buttons }) => (
      <SwiperSlide key={id}>
        <div className="relative w-full h-[870px]">
          {/* Image layer */}
          <Image
            src={image}
            alt={title}
            width={2560}
          height={1552}
            className="object-cover  z-0"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 z-10" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
            <div>
              {tagline && (
                <p className="text-md sm:text-xl lg:text-3xl font-semibold mb-4">
                  {tagline}
                </p>
              )}
              <h2 className="text-3xl sm:text-6xl lg:text-8xl font-bold mb-6">
                {title}
              </h2>
              {buttons.length > 0 && (
                <div className="flex flex-wrap gap-4 justify-center">
                  <SliderButtons buttons={buttons} />
                </div>
              )}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default DemoSlider;


