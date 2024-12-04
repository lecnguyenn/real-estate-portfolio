"use client"
import { dataVirtualImages, VirtualEdittingType } from "@/const/virtual-editting";
import Image from "next/image"
import { useState } from "react";
import Modal from "../base/Modal";


const PanoramaStitching = ({ data, className }: { data: VirtualEdittingType[], className?: string }) => {
  const [selectedImage, setSelectedImage] = useState<VirtualEdittingType | null>(null);
  return (
    <>
      <div>
        <div className={`grid grid-cols-1 ${className ?? 'md:grid-cols-3'}  gap-3`}>
          {data.map((item, index) => (
            <div
              onClick={() => setSelectedImage(item)}
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
            <Image
              src={selectedImage.images}
              alt="Full view image"
              width={1000}
              height={500}
              className="max-w-full max-h-[50vh] object-contain"
            />
          </div>
        )}
      </Modal>
    </>
  )
}

export default PanoramaStitching;