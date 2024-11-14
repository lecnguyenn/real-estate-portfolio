import Image from "next/image";
const TextSlider = () => {
  return (
    <div className="relative overflow-hidden bg-[#13141a] py-[30px] px-0 text-white">
      <div className="truncate flex relative w-full">
        <div className="flex flex-shrink-0 flex-grow-0 basis-auto items-center">
          <div className="flex flex-shrink-0 flex-grow-0 basis-auto items-center my-0 gap-[30px] animate-scroll whitespace-nowrap overflow-hidden w-full">
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            TO GET YOUR DREAM HOME
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            GET 30% OFFER FOR RENT
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            23,4500 FOR SALE HOME AVAILABLE
            <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/text-slider-vec.svg'} width={34} height={34} alt="promotion" />
            TO GET YOUR DREAM HOME
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextSlider;