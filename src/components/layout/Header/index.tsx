"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLInputElement>(null);
  const topSectionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !topSectionRef.current) return;

      const topSectionBottom = topSectionRef.current.getBoundingClientRect().bottom;
      if (topSectionBottom <= 0) {
        setIsSticky(true);
      }
      else if (topSectionBottom > 0) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={topSectionRef} className="absolute w-full z-[777] top-0 left-0">
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
            <Image src={'/icons/phone.svg'} alt="phone number" width={28} height={28} className='fill-white' />
          </div>
          <div>
            <Image
              src={'/icons/logo.svg'}
              alt="logo"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
      <header ref={headerRef} className={`flex w-full z-2 py-5 px-44 border-b border-[hsla(0,0%,100%,.15)]  ${isSticky ? 'fixed top-0 left-0 bg-black' : 'relative bg-transparent'} transition-all duration-300`}>
        <ul className="flex items-center list-none m-0 p-0 my-0 mx-auto uppercase text-white text-[13px]">
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              Service
            </Link>
          </li>
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              Protfolio
            </Link>
          </li>
          <li>
            <Link href="/" className="py-[15px] px-5 font-semibold">
              Resource
            </Link>
          </li>
          <li>
            <Link href="/contact" className="py-[15px] px-5 font-semibold">
              Contact Us
            </Link>
          </li>
        </ul>
      </header>
    </div >
  )
}

export default Header
