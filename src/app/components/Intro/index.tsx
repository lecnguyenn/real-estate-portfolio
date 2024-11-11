'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef } from 'react'
const imageBannerSource = [
  'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/bannar2-bg.png',
  'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/bannar2-bg2.png',
  'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/bannar2-bg3.png',
]

const Intro = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
            renderBullet: (_, className) => {
              return '<span class=\"' + className + '\">' + '</span>';
            },
            // bulletClass: 'flex gap-[30px] h-2 w-2 bg-white',
            // bulletActiveClass: ''
          }}
          className='flex'
          autoplay={false}
          loop={false}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
        >
          {imageBannerSource.map((item, key) => (
            <SwiperSlide key={key}>
              <div
                className=" pt-[334px] pb-[264px] pr-[3%] bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%), url(${item})`,
                }}
              >
                <div className="relative flex flex-wrap flex-row-reverse pr-[5%]">
                  <div>
                    <div className="max-w-[625px] w-full text-white text-right">
                      <h2 className="font-bold not-italic leading-tight text-[75px] p-[-250px] select-none mb-[15px]">
                        NewDay Valley Real Estate
                      </h2>
                      <p className='font-normal text-lg leading-normal mb-10'>.To help newday company stand out and make an impression on potential.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
export default Intro
