import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { dataCheckoutImages } from "@/const/checkout";
import { dataStagingImages } from "@/const/staging";

import PanoramaStitching from "../PanoramaStitching";

const VirtualStaging = () => {
  return (
    <div className="text-center">
      <div className="my-[26px]">
        <h1 className="text-[#16191e] text-[16px] font-bold my-[20px]">Virtual Staging Furniture Catalog</h1>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full"
        >
          {dataStagingImages.map((item, key) => (
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

      <div className="mt-[30px] md:mt-[120px]">
        <h1 className="text-[#16191e] text-[16px] font-bold my-[20px]">Check Out What We Do</h1>
        <PanoramaStitching data={dataCheckoutImages} className="md:grid-cols-4" />
      </div>
    </div>
  )
}

export default VirtualStaging;