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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev === 0 ? imageList.length : prev - 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (300 + 16)}px)`
          }}
        >
          {
            [...imageList, ...imageList].map((item, key) => (
              <div key={key}
                className="min-w-[250x] bg-white rounded-lg overflow-hidden shadow-md relative flex-shrink-0"
              >
                <Image src={item.image} width={60} height={60} alt="" className="w-full h-24 lg:h-40 object-cover" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ImageSlider;