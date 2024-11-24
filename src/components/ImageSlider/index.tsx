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
  const itemWidth = 300 + 16; // width + gap
  const totalWidth = imageList.length * itemWidth;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // When we reach the end of duplicated list, seamlessly jump back
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
            width: `${totalWidth * 2}px` // Double the width to accommodate duplicate images
          }}
        >
          {[...imageList, ...imageList].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="min-w-[300px] bg-white rounded-lg overflow-hidden shadow-md relative flex-shrink-0"
            >
              <Image
                src={item.image}
                width={250}
                height={240}
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