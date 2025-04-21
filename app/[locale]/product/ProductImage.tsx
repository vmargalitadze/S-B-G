"use client"
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
        loading="lazy"
      />
    </div>
  );
};

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex mt-[200px] flex-col space-y-4">
      <Image
        src={images[current]}
        alt="Product Image"
        width={400}
        height={400}
        priority
        className="w-[450px] h-[450px] object-cover rounded-md"
      />

      <div className="flex gap-2">
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            index={index}
            current={current}
            setCurrent={setCurrent}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
