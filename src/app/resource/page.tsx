import Image from "next/image";
import { Tag, Send, AudioLines, ShieldMinus, ChevronsRight } from 'lucide-react';
import BreadCrumb from "@/components/BreadCrumb";
import { LibraryData } from "@/const/libraly";
import Accordion from "@/components/base/Accordion";
import { FAQ } from "@/const/faq";

const Resource = () => {

  return (
    <>
      <BreadCrumb title="Resource" name="Resource" />
      <div className="container text-left mx-auto px-3 py-5">
        <div className="mt-[20px] text-center">
          <div className="">
            <h1 className="text-[24px] font-semibold pr-[25px] text-[#16191e]">Library</h1>
            <p className="text-[16px]">Check out some of our material that may works for you</p>
          </div>
          <div className="mt-[20px]">
            {
              LibraryData.map((item, index) => (
                <div key={index} className="flex flex-nowrap justify-center align-middle gap-6 items-center h-[300px] p-[10px]">
                  <Image src={item.image} width={600} height={400} alt="" className="h-[50%] md:h-full hover:animate-zoom" />
                  <div className="bg-[#f7f7f7] w-auto md:w-[600px] flex flex-col justify-center h-full items-center text-center px-3">
                    <h1 className="text-[#16191e] text-[24px] font-bold">{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="mt-5 mb-5 text-center">
          <div className="mb-[20px]">
            <h1 className="text-[24px] text-left font-semibold pr-[25px] text-[#16191e]">Free Consultation</h1>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center text-[#16191e] gap-[10px]">
            <div className="md:w-[60%] border border-dashed border-[#eee] rounded-[10px] py-[30px] px-[20px] hover:border-[#efb93f]">
              <div className="flex items-center justify-center gap-4">
                <Tag />
                <p>Contact us</p>
              </div>
            </div>
            <ChevronsRight />
            <div className="md:w-[60%] border border-dashed border-[#eee] rounded-[10px] py-[30px] px-[20px] hover:border-[#efb93f]">
              <div className="flex items-center justify-center gap-4">
                <AudioLines />
                <p>We Listen</p>
              </div>
            </div>
            <ChevronsRight />
            <div className="md:w-[60%] border border-dashed border-[#eee] rounded-[10px] py-[30px] px-[20px] hover:border-[#efb93f]">
              <div className="flex items-center justify-center gap-4">
                <ShieldMinus />
                <p>Relax</p>
              </div>
            </div>
            <ChevronsRight />
            <div className="md:w-[60%] border border-dashed border-[#eee] rounded-[10px] py-[30px] px-[20px] hover:border-[#efb93f]">
              <div className="flex items-center justify-center gap-4">
                <Send />
                <p>Receive Consultation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 text-center">
          <div className="mb-[20px]">
            <h1 className="text-[24px] text-left font-semibold pr-[25px] text-[#16191e]">FAQ’s & Latest Answer</h1>
          </div>
          <div className="md:w-[60%] border border-[#eee] rounded-[10px] py-[30px] px-[20px]">
            <Accordion items={FAQ} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Resource;