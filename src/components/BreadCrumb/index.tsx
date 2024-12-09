import Link from "next/link";

type BreadCrumbPropertyType = {
  title: string;
  name: string;
}

const BreadCrumb = ({ title, name }: BreadCrumbPropertyType) => {

  return (
    <div className="bg-cover bg-no-repeat py-[150px] px-0"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.25)), url(/images/bg-page.png)'
      }}
    >
      <div className="py-0 px-[10%]">
        <div className="container mx-auto">
          <div className="flex flex-wrap flex-row-reverse">
            <div className="items-center text-white">
              <h1 className="font-bold text-[50px] leading-[1.2] mb-0">{title}</h1>
              <ul className="flex flex-wrap items-center gap-2 pt-[25px] px-0 justify-end pr-2">
                <li className="text-[14px] font-semibold">{name}</li>
                <div className="h-[1px] w-[10px] bg-[#efb93f]"></div>
                <li className="text-[#efb93f] font-semibold text-[14px]">
                  <Link href="/">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb;