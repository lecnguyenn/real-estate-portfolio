"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type LinkItemType = {
  currentPath: string;
  link: string;
  label: string;
}
type LinkItemActionType = {
  onClick: () => void;
}

type MenuItemType = {
  id: string;
  link: string;
  label: string;
}
const MenuItem: MenuItemType[] = [
  {
    id: '1',
    link: '/',
    label: 'Home'
  },
  {
    id: '2',
    link: '/service',
    label: 'Service'
  },
  {
    id: '3',
    link: '/portfolio',
    label: 'Portfolio'
  },
  {
    id: '4',
    link: '/resource',
    label: 'Resource'
  },
  {
    id: '5',
    link: '/contact',
    label: 'Contact Us'
  }
]

const LinkItem = ({ currentPath, link, label, onClick }: LinkItemType & LinkItemActionType) => (
  <li className={`w-full md:w-auto text-center ${currentPath === link ? 'text-[#efb93f]' : ''}`}>
    <Link
      onClick={onClick}
      href={link}
      className="block py-3 md:py-[15px] px-5 font-semibold hover:text-[#efb93f] transition duration-300"
    >
      {label}
    </Link>
  </li>
)

const Header = () => {
  const pathName = usePathname();
  const isCurrentHomePage = pathName === '/';
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLInputElement>(null);
  const topSectionRef = useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
    if (windowWidth < 768) {
      setIsMenuOpen(false);
    }
  }, [windowWidth])

  return (
    <div ref={topSectionRef} className={`
      ${isCurrentHomePage ? 'absolute' : 'relative bg-black'} 
        w-full z-[777] transition-colors 
        duration-500 ease-in-out top-0 
        left-0 ${isMenuOpen && isCurrentHomePage ? 'bg-white' : ''}`}>

      <div className="border-b border-[hsla(0,0%,100%,.15)]">
        <div className="hidden md:flex flex-col md:flex-row items-center justify-between py-3.5 px-4 lg:pl-32">
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <div className="relative flex flex-col font-semibold text-end">
              <span className="text-xs md:text-[14px] text-[hsla(0,0%,100%,.8)] mb-[5px]">
                To More Inquri
              </span>
              <h6 className="text-sm md:text-base leading-[20px] text-white hover:text-[#efb93f] transition duration-500">
                <a href="tel:+84798327979">+84 79 832 7979</a>
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

          <div className="w-30 md:w-auto">
            <Image
              src="/images/LOGO-2.svg"
              alt="logo"
              width={50}
              height={100}
              className="w-[35%] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        ref={headerRef}
        className={`w-full z-2 py-3 md:py-5 px-4 lg:px-44 border-b border-[hsla(0,0%,100%,.15)] 
          ${isSticky ? 'fixed top-0 left-0 bg-black' : 'relative bg-transparent'} 
          transition-all duration-500`}
      >
        <div className="md:hidden flex justify-between mb-2 mt-2">
          <div className="w-20 md:w-auto">
            <Image
              src={isMenuOpen && isCurrentHomePage && !isSticky ? '/images/LOGO-1.svg' : '/images/LOGO-2.svg'}
              alt="logo"
              width={20}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X color={isCurrentHomePage && !isSticky ? 'black' : 'white'} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className={`
          flex flex-col md:flex-row items-center justify-center list-none m-0 p-0 my-0 mx-auto 
          uppercase
          text-[13px]
          ${isMenuOpen && isCurrentHomePage && !isSticky ? 'text-black' : 'text-white'}
          ${isMenuOpen ? 'block' : 'hidden md:flex'}
        `}>
          {MenuItem.map((item) => (
            <LinkItem
              key={item.id}
              currentPath={pathName}
              link={item.link}
              label={item.label}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </ul>
      </header>
    </div>
  )
}

export default Header
