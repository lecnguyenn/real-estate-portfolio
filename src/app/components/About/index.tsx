import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="pt-[110px] mb-[110px]">
      <div className="w-[1320px] mx-auto px-3">
        <div className="flex">
          <div className="w-[calc(100% - 33.3%)] flex-0 flex-0 flex-auto text-right">
            <div className="pr-[35px]">
              <div>
                <span className="font-semibold text-[16px] mb-[5px] text-[#efb93f]">(Since-2022)</span>
                <h2 className="font-bold text-[40px] mb-0 text-[#16191e]">Get To Know About NewDay</h2>
              </div>
              <h6 className="text-[17px] font-semibold leading-[30px] pt-5 mb-[5px] text-[#16191e]">Welcome to out NewDay!</h6>
              <p className="text-[#5e5e5e] leading-[30px]">
                We're thrilled to have you join our community of automotive
                enthusiasts and professionals. Whether you're a
                passionate driver, a car owner, or someone who loves all
                things automotive, you've come to the right place.At neckle,
                we strive to create a space where people can connect,
                share knowledge, and explore the exciting world of automobiles.
              </p>
              <div className="mb-[40px] pt-[25px]">
                <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/home2-about-img2.png'} width={457} height={525} alt="" className="rounded-[10px]" />
              </div>
            </div>
          </div>
          <div className="w-[67.7%] flex-0 flex-0 flex-auto">
            <div className="mb-[40px]">
              <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/home2-about-img1.png'} width={356} height={450} alt="" className="rounded-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs;