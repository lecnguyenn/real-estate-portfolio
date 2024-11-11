import Image from 'next/image'
import Link from 'next/link'

// import Phone from '../../../../../public/images/file.svg'

const Header = () => {
  return (
    <div className="absolute w-full z-[777] top-0 left-0">
      <div className="border-b border-[hsla(0,0%,100%,.15)]">
        <div className="flex items-center justify-between py-3.5 px-44">
          <div className="flex items-center gap-5">
            <div className="relative flex flex-col font-semibold text-end ">
              <span className="text-[14px] text-[hsla(0,0%,100%,.8)] mb-[5px]">To More Inquri</span>
              <h6 className="text-base leading-[20px] text-[#ffff] hover:text-[#efb93f] transition duration-500">
                <a href="">+990-737 621 432</a>
              </h6>
                 <span className="absolute right-[-10px] top-1/2 h-[32px] w-[1px] bg-white/50 transform -translate-y-1/2"></span>
            </div>
            {/* <Image src={'../../../../../public/images/file.svg'} alt="phone number" width={28} height={28} /> */}
            <span>phone</span>
            {/* <Phone /> */}
          </div>
          <div>
            <Image
              src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/home2-logo.svg'}
              alt="logo"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <header className="flex w-full z-2 py-3.5 px-44 border-b border-[hsla(0,0%,100%,.15)]">
        {/* <div> */}
        <ul className="flex items-center list-none m-0 p-0 my-0 mx-auto uppercase text-white text-[13px]">
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              Contact us
            </Link>
          </li>
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              Property
            </Link>
          </li>
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              For rent
            </Link>
          </li>
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              For Sale
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </header>
    </div>
  )
}

export default Header
