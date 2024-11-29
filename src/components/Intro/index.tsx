'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const imageBannerSource = [
	'/images/banner-bg.jpg',
	'/images/banner-bg2.jpg',
	'/images/banner-bg3.jpg',
	'/images/banner-bg4.jpg',
	'/images/banner-bg5.jpg',
	'/images/banner-bg6.jpg',
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
					}}
					className='flex'
					autoplay={{
						delay: 2500,
						disableOnInteraction: false
					}}
					loop={true}
					modules={[EffectFade, Navigation, Pagination, Autoplay]}
				>
					{imageBannerSource.map((item, key) => (
						<SwiperSlide key={key}>
							<div
								className=" pt-[300px] pb-[235px] pr-[3%] bg-cover bg-no-repeat object-cover"
								style={{
									backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%), url(${item})`,
								}}
							>
								<div className="relative flex flex-wrap flex-row-reverse pr-[5%] animate-none">
									<div>
										<div className="max-w-[625px] w-full text-white text-right">
											<h2 className="font-bold not-italic leading-tight text-[50px] sm:text-[60px] xl:text-[75px]">
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
