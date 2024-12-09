"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

type PropertyImageItem = {
  id: number;
  name: string;
  image: string
}

type ImageSliderType = {
  imageList: PropertyImageItem[];
}

const ImageSlider = ({ imageList }: ImageSliderType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 300 + 16;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= imageList.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div className="relative p-4">
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
            // width: `md:${totalWidth * 2}px`
          }}
        >
          {[...imageList, ...imageList, ...imageList, ...imageList].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white border border-solid border-[rgba(0,0,0,.08)] rounded-[10px] overflow-hidden shadow-md relative flex-shrink-0"
            >
              <Image
                src={item.image}
                width={230}
                height={200}
                alt={item.name}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;