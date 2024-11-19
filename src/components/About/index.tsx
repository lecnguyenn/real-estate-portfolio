import Image from "next/image";

import AnimatedNumberCounter from "../AnimateNumber";

const AboutUs = () => {
  return (
    <div className="container mx-auto pt-[110px] mb-[110px]">
      <div className="w-full mx-auto px-3">
        <div className="flex flex-col md:flex-row gap-6">

          {/* Left Text Section */}
          <div className="md:w-7/12 text-left order-2 md:order-1">
            <div className="text-left">
              <div>
                <span className="font-semibold text-[16px] mb-[5px] text-[#efb93f] tracking-[.2em]">(Since-2020)</span>
                <h2 className="font-bold text-[40px] mb-0 text-[#16191e]">Get To Know About NewDay</h2>
              </div>
              <h6 className="text-[17px] font-semibold leading-[30px] pt-5 mb-[5px] text-[#16191e]">Welcome to our NewDay!</h6>
              <p className="text-[#5e5e5e] leading-[30px]">
                We&apos;re thrilled to have you join our community of automotive
                enthusiasts and professionals. Whether you&apos;re a
                passionate driver, a car owner, or someone who loves all
                things automotive, you&apos;ve come to the right place. At NewDay,
                we strive to create a space where people can connect,
                share knowledge, and explore the exciting world of automobiles.
              </p>
              <div className="mb-[40px] pt-[25px]">
                <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/home2-about-img2.png'} width={457} height={525} alt="" className="rounded-[10px] object-cover" />
              </div>
            </div>
          </div>

          {/* Right Image and Stats Section */}
          <div className="md:w-5/12 flex flex-col items-center gap-6 order-1 md:order-2">
            <div className="mb-[40px]">
              <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/home2-about-img1.png'} width={356} height={450} alt="" className="rounded-[10px] object-cover" />
            </div>

            <div className="relative flex items-center xl:justify-between gap-[25px] xl:min-w-[630px] sm:w-full justify-around flex-wrap-reverse py-[20px] px-0">
              <div className="flex items-center gap-[16px]">
                <div>
                  <div className="flex items-center text-[#16191e] text-[20px] font-bold">
                    <span>K+</span>
                    <AnimatedNumberCounter value={25} duration={1000} />
                  </div>
                  <p className="text-[#5e5e5e] text-sm font-semibold">Experience</p>
                </div>
                <div>
                  <Image src={'/icons/home1.svg'} width={40} height={40} alt="" />
                </div>
              </div>
              <div className="flex items-center gap-[16px]">
                <div>
                  <div className="flex items-center text-[#16191e] text-[20px] font-bold">
                    <span>K+</span>
                    <AnimatedNumberCounter value={200} duration={2000} />
                  </div>
                  <p className="text-[#5e5e5e] text-sm font-semibold">Project Sold</p>
                </div>
                <div>
                  <Image src={'/icons/home1.svg'} width={40} height={40} alt="" />
                </div>
              </div>
              <div className="flex items-center gap-[16px]">
                <div>
                  <div className="flex items-center text-[#16191e] text-[20px] font-bold">
                    <span>K+</span>
                    <AnimatedNumberCounter value={600} duration={3000} />
                  </div>
                  <p className="text-[#5e5e5e] text-sm font-semibold">Project Completed</p>
                </div>
                <div>
                  <Image src={'/icons/home1.svg'} width={40} height={40} alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
    </div >
  )
}
export default AboutUs;