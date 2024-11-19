"use client"
import { Menu } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLInputElement>(null);
  const topSectionRef = useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* Top Section */}
      <div className="border-b border-[hsla(0,0%,100%,.15)]">
        <div className="hidden md:flex flex-col md:flex-row items-center justify-between py-3.5 px-4 lg:px-44">
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <div className="relative flex flex-col font-semibold text-end">
              <span className="text-xs md:text-[14px] text-[hsla(0,0%,100%,.8)] mb-[5px]">
                To More Inquri
              </span>
              <h6 className="text-sm md:text-base leading-[20px] text-white hover:text-[#efb93f] transition duration-500">
                <a href="tel:+990737621432">+990-737 621 432</a>
              </h6>
              <span className="hidden md:block absolute right-[-10px] top-1/2 h-[32px] w-[1px] bg-white/50 transform -translate-y-1/2"></span>
            </div>
            <Image
              src="/icons/phone.svg"
              alt="phone number"
              width={28}
              height={28}
              className="fill-white w-6 h-6 md:w-7 md:h-7"
            />
          </div>

          <div className="w-48 md:w-auto">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={250}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        ref={headerRef}
        className={`w-full z-2 py-3 md:py-5 px-4 lg:px-44 border-b border-[hsla(0,0%,100%,.15)] 
          ${isSticky ? 'fixed top-0 left-0 bg-black' : 'relative bg-transparent'} 
          transition-all duration-300`}
      >
        <div className="md:hidden flex justify-between mb-4">
                    <div className="w-48 md:w-auto">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={250}
              height={250}
              className="w-full h-auto"
            />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`
          flex flex-col md:flex-row items-center justify-center list-none m-0 p-0 my-0 mx-auto 
          uppercase text-white text-[13px]
          ${isMenuOpen ? 'block' : 'hidden md:flex'}
        `}>
          <li className="w-full md:w-auto text-center">
            <Link
              href="/"
              className="block py-3 md:py-[15px] px-5 font-semibold hover:text-[#efb93f] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link
              href="/"
              className="block py-3 md:py-[15px] px-5 font-semibold hover:text-[#efb93f] transition duration-300"
            >
              Service
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link
              href="/"
              className="block py-3 md:py-[15px] px-5 font-semibold hover:text-[#efb93f] transition duration-300"
            >
              Protfolio
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link
              href="/"
              className="block py-3 md:py-[15px] px-5 font-semibold hover:text-[#efb93f] transition duration-300"
            >
              Resource
            </Link>
          </li>
          <li className="w-full md:w-auto text-center">
            <Link
              href="/contact"
              className="block py-3 md:py-[15px] px-5 font-semibold hover:text-[#efb93f] transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
