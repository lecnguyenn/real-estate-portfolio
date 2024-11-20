import Image from "next/image";

const Footer = () => {
  return (
    // <footer>
    <div className="bg-black sticky bottom-0">
      <div className="flex flex-wrap justify-between items-center text-white mx-[65px] py-[25px]">
        <div className="w-full lg:w-4/12">
          <Image src={'/icons/logo.svg'} width={250} height={250} alt="" />
          <p className="mt-[20px] text-[#b3b3b3] leading-[30px]">NewDay provides a wide range of media
            services from real estate. Contact us today
            to customize your event coverage.
          </p>
        </div>
        <div className="w-full lg:w-4/12" >
          <h2 className="text-[20px] text-white font-semibold">Follow NewDay</h2>
        </div>
        <div className="items-center">
          <span className="text-[20px] text-white font-semibold">Connect with us</span>
          <h6>dev.nguyenle@gmail.com</h6>
        </div>
      </div>
    </div>
    // </footer>
  )
}

export default Footer;