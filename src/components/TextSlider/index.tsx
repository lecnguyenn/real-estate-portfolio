import Image from "next/image";
const TextSlider = () => {
  return (
    <div className="relative overflow-hidden bg-[#13141a] py-[30px] px-0 text-white">
      <div className="truncate flex relative w-full">
        <div className="flex flex-shrink-0 flex-grow-0 basis-auto items-center">
          <div className="flex flex-shrink-0 flex-grow-0 basis-auto items-center my-0 gap-[30px] animate-scroll whitespace-nowrap overflow-hidden w-full font-semibold uppercase">
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            Excellent quality
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            Free trial ( 5 images)
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            Suitable for all styles
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            Responsibility - Fast - Prestige
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextSlider;