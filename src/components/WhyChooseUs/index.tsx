import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto  mb-[110px]">
      <div className="text-center mb-[50px]">
        <h2 className="text-[30px] lg:text-[40px] font-bold mb-[5px] leading-[1.3]">Why Choose Us</h2>
        <p>Here are some of the featured Apartment in different categories</p>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-wrap md:flex-nowrap gap-[50px]">
          <div className="relative w-full md:w-6/12 flex items-center justify-center gap-6">
            <div className="relative overflow-hidden rounded-[32px]">
              <div>

                <Image src={'/images/choose2.jpg'} width={350} height={350} alt="" className="object-cover" />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px]">
              <Image src={'/images/choose1.jpg'} width={350} height={350} alt="" className="object-cover" />

            </div>


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 bg-black rotate-45 flex items-center justify-center border-4 border-[#FFA800]">
                <div className="-rotate-45">
                  <Image src={'/icons/house.svg'} alt="" width={34} height={42} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 flex flex-col">
            <div className="flex gap-8 pb-[50px] border-b-[#FFA800]">
              <div className="text-right">
                <h5 className="text-xl font-bold mb-2.5">
                  <span className="text-[#efb93f]">Affordable&nbsp;</span>
                  Price
                </h5>
                <p className="font-normal leading-6 text-[#5e5e5e]">We are always aware that price is one of the major concerns of our customers.
                  You will never have to worry about that when coming to us.
                  Prices are always considered and notified to customers in each small order so that customers can confirm in advance.
                </p>
              </div>
              <div className="h-[70px] max-w-[70px] min-w-[70px] flex items-center justify-center border rounded border-[#efb93f]">
                <Image src={'/icons/affordable.svg'} width={50} height={50} alt="" />
              </div>
            </div>

            <div className="flex gap-8 pb-[50px]">
              <div className="text-right">
                <h5 className="text-xl font-bold mb-2.5">
                  Time<span className="text-[#efb93f]">&nbsp;Flexibility</span>
                </h5>
                <p className="font-normal leading-6 text-[#5e5e5e]">
                  We are young and dynamic, operating 24/7, working on weekends and holidays,
                  fluent in English, meeting a variety of needs.
                  Our time zone is also very friendly to Americas, Europe, Australia.
                </p>
              </div>
              <div className="h-[70px] max-w-[70px] min-w-[70px] flex items-center justify-center border rounded border-[#efb93f]">
                <Image src={'/icons/guarantee.svg'} width={50} height={50} alt="" />
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-right">
                <h5 className="text-xl font-bold mb-2.5">
                  <span className="text-[#efb93f]">Increase&nbsp;</span>
                  your sale
                </h5>
                <p className="font-normal leading-6 text-[#5e5e5e]">Our photo editors can create beautiful, flawless, and stunning
                  images of the property or the product you are selling.
                  They can make an image look more appealing with their expertise, attracting more buyers and generating better sales.
                </p>
              </div>
              <div className="h-[70px] max-w-[70px] min-w-[70px] flex items-center justify-center border rounded border-[#efb93f]">
                <Image src={'/icons/outstanding.svg'} width={50} height={50} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs;