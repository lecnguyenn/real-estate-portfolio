import Image from "next/image";

const Header = () => {
    return (
        <div className="absolute w-full z-777 top-0 left-0">
            {/* <div className=""> */}
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
                {/* </div> */}
            </div>
        </div>
    )

}

export default Header;