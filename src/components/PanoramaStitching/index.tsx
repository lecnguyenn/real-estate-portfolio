"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import { useState } from "react";

import { VirtualEdittingType } from "@/const/virtual-editting";

import Modal from "../base/Modal";


const PanoramaStitching = ({ data, className }: { data: VirtualEdittingType[], className?: string }) => {
  const [selectedImage, setSelectedImage] = useState<VirtualEdittingType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % data.length;
    setSelectedImage(data[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };
  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + data.length) % data.length;
    setSelectedImage(data[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };
  return (
    <>
      <div>
        <div className={`grid grid-cols-1 ${className ?? 'md:grid-cols-3'}  gap-3`}>
          {data.map((item, index) => (
            <div
              onClick={() => {
                setSelectedImage(item)
                setCurrentImageIndex(index)
              }}
              className="relative cursor-pointer hover:opacity-90 transition-opacity"
              key={index}
            >

              <Image
                src={item.images}
                width={450}
                height={450}
                alt="Comparison Image"
                className="rounded-[10px] w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!selectedImage}
        onDismiss={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="relative max-w-full max-h-[50vh] flex items-center justify-center">
            <button
              onClick={handlePrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <Image
              src={selectedImage.images}
              alt="Full view image"
              width={1000}
              height={600}
              className="max-w-full max-h-[50vh] object-contain"
            />
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </Modal>
    </>
  )
}

export default PanoramaStitching;