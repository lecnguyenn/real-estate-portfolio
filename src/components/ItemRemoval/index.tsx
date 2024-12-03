import ImageComparisonSlider from "../ImageComparisonSlider";

const ItemRemoval = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#16191e] text-left">
      <div>
        <h5 className="my-6 font-semibold">Basic Retouching</h5>
        <ImageComparisonSlider bgImageSource="/images/removal/retouching-2.jpg" aboveImageSource="/images/removal/retouching-2.jpg" />
      </div>
      <div>
        <h5 className="my-6 font-semibold">Standard Retouching</h5>
        <ImageComparisonSlider bgImageSource="/images/removal/standard-1.jpg" aboveImageSource="/images/removal/standard.jpg" />
      </div>
      <div>
        <h5 className="my-6 font-semibold">Advanced Retouching</h5>
        <ImageComparisonSlider bgImageSource="/images/removal/advance-2.jpg" aboveImageSource="/images/removal/advance-1.jpg" />
      </div>
      <div>
        <h5 className="my-6 font-semibold">Extreme Retouching</h5>
        <ImageComparisonSlider bgImageSource="/images/removal/extreme-1.jpg" aboveImageSource="/images/removal/extreme.jpg" />
      </div>

    </div>
  )
}

export default ItemRemoval;