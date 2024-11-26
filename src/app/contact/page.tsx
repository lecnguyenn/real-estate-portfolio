"use client"
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import TextArea from "@/components/base/TextArea";
import { GoogleMapsEmbed } from '@next/third-parties/google'

const ContactUs = () => {
  return (
    <>
      <div className="relative container mt-16 mx-auto px-3">
        <div className="flex flex-wrap md:flex-nowrap mb-[100px] gap-6">
          <div className="w-full md:w-7/12">
            <div className="bg-[#f6eff7] rounded-[10px] px-[25px] pt-[45px] md:px-[60px] pb-[50px]">
              <Input id="full-name" name="fullname" label="Full Name" required />
              <div className="flex gap-5">
                <Input id="number" name="number" label="Phone" required />
                <Input id="mail" name="mail" label="Email" />
              </div>
              <TextArea id="message" name="message" label="Message" placeholder="write somthing..." className="mb-[30px]" />
              <Button id="submit-button">Submit now</Button>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="mb-[50px] text-center">
              <h4 className="font-bold text-[26px] text-[#16191e]">Contact Us With Support Line</h4>
            </div>
            <div className=" relative border-[1px] border-[#eee] rounded-[10px] py-[30px] px-[50px] mb-6">
              <div className="absolute bg-white left-[35px] top-[-9px] py-0 px-5">
                <h6 className="text-[14px] text-[#5e5e5e] font-semibold">To Know More</h6>
              </div>
              <div className="flex gap-2 justify-end items-center">
                <div className="font-semibold">
                  <span className="text-[#5e5e5e] text-[12px] leading-[1px] ">Email now</span>
                  <h6 className="text-[16px]">
                    <Link href={'mailto:newday247@gmail.com'}>NewDay@gmail.com</Link>
                  </h6>
                </div>
                <div className="w-[40px] h-[40px] bg-[#efb93f] rounded-[5px] flex justify-center items-center">
                  <Image src={'/icons/email-text.svg'} width={25} height={25} alt="mail" />
                </div>
              </div>
            </div>

            <div className=" relative border-[1px] border-[#eee] rounded-[10px] py-[30px] px-[50px]">
              <div className="absolute bg-white left-[35px] top-[-9px] py-0 px-5">
                <h6 className="text-[14px] text-[#5e5e5e] font-semibold">Address</h6>
              </div>
              <div className="flex gap-2 justify-end items-center">
                <div className="font-semibold">
                  <span className="text-[#5e5e5e] text-[12px] leading-[1px] ">Location</span>
                  <h6 className="text-[16px]">
                    <Link href={'mailto:newday247@gmail.com'}>Ha Noi, Viet Nam</Link>
                  </h6>
                </div>
                <div className="w-[40px] h-[40px] bg-[#efb93f] rounded-[5px] flex justify-center items-center">
                  <Image src={'/icons/location.svg'} width={25} height={25} alt="mail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ''}
        height={400}
        width="100%"
        mode="place"
        q="354A Đ. Lê Duẩn, Phương Liên, Đống Đa, Hà Nội"
      />
    </>
  )
}

export default ContactUs;