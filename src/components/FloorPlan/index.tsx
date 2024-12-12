"use client"
import 'swiper/css';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { VirtualEdittingType } from '@/const/virtual-editting';

const FloorPlan = ({ data }: { data: VirtualEdittingType[] }) => {
  return (
    <div className="w-full">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        initialSlide={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="w-full"
      >
        {data.map((item, key) => (
          <SwiperSlide
            key={key}
            className="bg-center bg-cover w-[900px]"
            style={{ backgroundImage: `url(${item.images})` }}
          >
            <Image
              src={item.images}
              alt=""
              width={900}
              height={600}
              className="block w-full h-auto"
            />
          </SwiperSlide>
        ))}
        <button
          className="swiper-button-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
          aria-label="Previous Slide"
        >
          <ChevronLeft />
        </button>
        <button
          className="swiper-button-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
          aria-label="Next Slide"
        >
          <ChevronRight />
        </button>
      </Swiper>
    </div>
  )
}

export default FloorPlan;