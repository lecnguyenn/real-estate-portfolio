import ImageSlider from "../ImageSlider";

const companyList = [{
  id: 1,
  name: "company1",
  image: "/images/company1.png"
},
{
  id: 2,
  name: "company2",
  image: "/images/company2.png"
},
{
  id: 3,
  name: "company3",
  image: "/images/company3.png"
},
{
  id: 4,
  name: "company4",
  image: "/images/company4.png"
},
{
  id: 5,
  name: "company5",
  image: "/images/company5.png"
},
]

const TrustBy = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-[50%] object-cover mt-28 py-[80px] lg:py-[110px]"
      style={{
        backgroundImage: 'url(/images/dream-car-bg.png)'
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center lg:justify-between">
          <div></div>
          <div>
            <h2 className="text-[30px] lg:text-[40px] font-bold mb-[5px] leading-[1.3]">Trusted & Relied On</h2>
          </div>
        </div>
        <div className="mt-[30px]">
          <ImageSlider imageList={companyList} />

        </div>
      </div>

    </div>
  )
}
export default TrustBy;