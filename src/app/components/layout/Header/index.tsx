import Image from "next/image";
import Link from "next/link";

const Header = () => {

    return (
        <div className="absolute w-full z-777 top-0 left-0">
            <div className="border-b border-black">
            <div className="flex items-center justify-between py-3.5 px-44">
                <div className="flex items-center gap-5">
                    <div className="flex">
                        <span>To More Inquri</span>
                        <h6>+84392854780</h6>
                    </div>
                    <Image src={'@images/file.svg'} alt="phone number" width={28} height={28} />
                </div>
                <div>
                    <Image src={'https://neckle-rtl-nextjs.vercel.app/assets/img/home2/icon/home2-logo.svg'} alt="logo" width={250} height={250} />
                </div>
                </div>
            </div>
            <header className="flex w-full z-2 py-3.5 px-44 border-b border-black ">
                {/* <div> */}
                    <ul className="flex items-center list-none m-0 p-0 my-0 mx-auto uppercase text-black text-[13px]">
                        <li>
                            <Link href="/" className="py-3.5 px-5 font-semibold">Home</Link>
                        </li>
                        <li>  
                             <Link href="/" className="py-3.5 px-5 font-semibold">Contact us</Link>
                        </li>
                        <li>  
                             <Link href="/" className="py-3.5 px-5 font-semibold">Property</Link>
                        </li>
                        <li>  
                             <Link href="/" className="py-3.5 px-5 font-semibold">For rent</Link>
                        </li>
                        <li>  
                             <Link href="/" className="py-3.5 px-5 font-semibold">For Sale</Link>
                        </li>
                    </ul>
                 {/* </div> */}
            </header>
        </div>
    )

}

export default Header;