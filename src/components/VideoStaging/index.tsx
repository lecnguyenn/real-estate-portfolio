"use client"
import Image from "next/image"
import { useState } from "react"
import Modal from "../base/Modal"
import { data, VideoDataType } from "@/const/video"


const VideoStaging = () => {
  const [selectedImage, setSelectedImage] = useState<VideoDataType | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.map((item, index) => (
          <div
            onClick={() => setSelectedImage(item)}
            className="relative cursor-pointer hover:opacity-90 transition-opacity"
            key={index}
          >

            <Image
              src={item.image}
              width={450}
              height={450}
              alt="Comparison Image"
              className="rounded-[10px] w-full h-auto object-cover"
            />
            <div className="absolute rounded-[10px] top-0 left-0 bg-[rgba(0,0,0,.1)] flex items-center justify-center w-full h-full">
              <span className="w-[76px] h-[76px] cursor-pointer border rounded-full flex
               items-center text-[16px] text-white font-semibold justify-center">Play</span>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={!!selectedImage}
        onDismiss={() => setSelectedImage(null)}
      >
        <video width={1000} height={500} controls autoPlay playsInline preload="none" >
          <source src={selectedImage?.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  )
}

export default VideoStaging;