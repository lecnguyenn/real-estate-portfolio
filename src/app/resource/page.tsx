import Image from "next/image";

import BreadCrumb from "@/components/BreadCrumb";
import { LibraryData } from "@/const/libraly";

const Resource = () => {

  return (
    <>
      <BreadCrumb title="Resource" name="resource" />
      <div className="container text-left mx-auto px-3 py-5">
        <div className="mt-[20px] text-center">
          <div className="">
            <h1 className="text-[24px] font-semibold pr-[25px] text-[#16191e]">Library</h1>
            <p className="text-[16px]">Check out some of our material that may works for you</p>
          </div>
          <div className="mt-[20px]">
            {
              LibraryData.map((item, index) => (
                <div key={index} className="flex flex-wrap justify-center align-middle gap-6 items-center h-[300px] p-[10px]">
                  <Image src={item.image} width={600} height={400} alt="" className="h-full hover:animate-zoom" />
                  <div className="bg-[#f7f7f7] w-[600px] flex flex-col justify-center h-full items-center text-center px-3">
                    <h1 className="text-[#16191e] text-[24px] font-bold">{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="mt-5 mb-5 text-center">
          <div>
            <h1 className="text-[24px] font-semibold pr-[25px] text-[#16191e]">FAQ’s & Latest Answer</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resource;