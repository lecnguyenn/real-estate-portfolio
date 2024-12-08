import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#16191e]">
      <div className="flex flex-wrap justify-between items-center text-white mx-[65px] py-[25px] gap-[40px]">
        <div className="w-full lg:w-4/12">
          <Image src={'/images/LOGO-2.svg'} width={200} height={200} alt="" />
          <p className="mt-[5px] text-[#b3b3b3] leading-[30px]">NewDay offers comprehensive media solutions tailored for the real estate industry. Let us help you create customized event coverage that stands out—contact us today!
          </p>
        </div>
        <div className="flex gap-4">
          <Image src={'/icons/phone.svg'} width={35} height={35} alt="phone-number" />
          <div className="items-center">
            <span className="text-[14px] text-white font-semibold">To More Inquiry</span>
            <h6 className="text-[20px] font-semibold text-[#efb93f]">
              <a href="tel:+84346825006">+84 346 825 006</a>
            </h6>
          </div>
        </div>
        <div className="flex gap-4">
          <Image src={'/icons/mail.svg'} width={35} height={35} alt="mail" style={{ fill: '#fff' }} />
          <div className="items-center">
            <span className="text-[14px] text-white font-semibold">Connect with us</span>
            <h6 className="text-[20px] font-semibold text-[#efb93f]">
              <a href="mailto:newday247@gmail.com">newday247@gmail.com</a>
            </h6>
          </div>
        </div>
        <div className="flex flex-col gap-1" >
          <ul className="flex gap-[12px] text-center">
            <li>
              <a href="">
                <Image src={'/icons/twitter.svg'} width={35} height={35} alt="sociel" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100083095184233">
                <Image src={'/icons/facebook.svg'} width={35} height={35} alt="sociel" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCDuNfSRD8dGm81vxvP9p72g">
                <Image src={'/icons/youtube.svg'} width={35} height={35} alt="sociel" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/newday.photo/">
                <Image src={'/icons/instagram.svg'} width={35} height={35} alt="sociel" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;