import ImageComparisonSlider from "../ImageComparisonSlider";

const FeatureSerive = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-[50%] object-cover my-28 py-[80px] lg:py-[110px]"
      style={{
        backgroundImage: 'url(/images/dream-car-bg.png)'
      }}
    >
      <div className="container mx-auto">
        <div className="mb-[50px]">
          <div className="text-center">
            <h2 className="text-[30px] lg:text-[40px] font-bold mb-[5px] leading-[1.3]">Feature Service</h2>
            <p>Here are some of the featured Apartment in different categories</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImageComparisonSlider bgImageSource="/images/portfolio/picture-2.jpg" aboveImageSource="/images/portfolio/picture-1.jpg" />
            <ImageComparisonSlider bgImageSource="/images/portfolio/picture-4.jpg" aboveImageSource="/images/portfolio/picture-3.jpg" />
            <ImageComparisonSlider bgImageSource="/images/portfolio/picture-6.jpg" aboveImageSource="/images/portfolio/picture-5.jpg" />
            <ImageComparisonSlider bgImageSource="/images/compare7.jpg" aboveImageSource="/images/compare6.jpg" />
            <ImageComparisonSlider bgImageSource="/images/compare9.jpg" aboveImageSource="/images/compare8.jpg" />
            <ImageComparisonSlider bgImageSource="/images/compare10.jpg" aboveImageSource="/images/compare11.jpg" />

          </div>
        </div>
      </div>

    </div>
  )
}

export default FeatureSerive;