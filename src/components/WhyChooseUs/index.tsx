import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto  mb-[110px]">
      <div className="text-center">
        <h2 className="text-[40px] font-bold mb-[5px] leading-[1.3]">Why Choose Us</h2>
        <p>Here are some of the featured Apartment in different categories</p>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex">
          <div className="relative flex items-center justify-center gap-6">
            <div className="relative overflow-hidden rounded-[32px]">
              <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/choose-02.png'} width={350} height={350} alt="" className="object-cover" />
            </div>

            <div className="relative overflow-hidden rounded-[32px]">
              <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/choose-01.png'} width={350} height={350} alt="" className="object-cover" />
            </div>


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 bg-black rotate-45 flex items-center justify-center border-4 border-[#FFA800]">
                <div className="-rotate-45">
                  <Image src={'/icons/house.svg'} alt="" width={34} height={42} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-8">
              <div className="text-right">
                <h5 className="text-xl font-bold mb-2.5">
                  <span className="text-[#efb93f]">Affordable&nbsp;</span>
                  Price
                </h5>
                <p className="font-normal leading-6 text-[#5e5e5e]">An affordable price for a luxury car may be
                  significantly higher than an affordable price for a
                  budget car...
                </p>
              </div>
              <div className="h-[70px] max-w-[70px] min-w-[70px] flex items-center justify-center border rounded border-[#efb93f]">
                <Image src={'/icons/affordable.svg'} width={50} height={50} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs;