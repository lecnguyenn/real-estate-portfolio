'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Intro = () => {
    return (
        <>
            <div className='relative'>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        // bulletClass: 'w-9'
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                >
                    <SwiperSlide className='w-[1223px]'>
                        <div className="bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%), url('https://neckle-rtl-nextjs.vercel.app/assets/img/home2/bannar2-bg.png')`
                            }}
                        >
                            <div className='relative flex flex-wrap pr-[5%]'>
                                <div>
                                    <div className='max-w-[625px] w-full'>
                                        <h2 className='font-bold not-italic leading-tight text-[75px]'>Neckle Valley Real Estate</h2>
                                        <p>To help neckle valley Real estate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[1223px]'>
                        <div
                            className="bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%), url('https://neckle-rtl-nextjs.vercel.app/assets/img/home2/bannar2-bg2.png')`
                            }}
                        >
                            <div className='relative flex flex-wrap'>
                                <div>
                                    <div className='max-w-[625px] w-full'>
                                        <h2 className='font-bold not-italic leading-tight text-[75px]'>Neckle Valley Real Estate</h2>
                                        <p>To help neckle valley Real estate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='w-[1223px]'>
                        <div
                            className="bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%), url('https://neckle-rtl-nextjs.vercel.app/assets/img/home2/bannar2-bg3.png')`
                            }}
                        >
                            <div className='relative flex flex-wrap'>
                                <div>
                                    <div className='max-w-[625px] w-full'>
                                        <h2 className='font-bold not-italic leading-tight text-[75px]'>Neckle Valley Real Estate</h2>
                                        <p>To help neckle valley Real estate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default Intro;