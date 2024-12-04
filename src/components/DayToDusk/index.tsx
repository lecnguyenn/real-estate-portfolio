import ImageComparisonSlider from "../ImageComparisonSlider";

const DayToDusk = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#16191e] text-center">
            <div>
                <h5 className="my-6 font-semibold">Brightness & Contrast Adjustment</h5>
                <ImageComparisonSlider bgImageSource="/images/virtual/contract-2.jpg" aboveImageSource="/images/virtual/contract-1.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Add Reflection</h5>
                <ImageComparisonSlider bgImageSource="/images/virtual/reflect-2.jpg" aboveImageSource="/images/virtual/reflect-1.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Turn On Lights</h5>
                <ImageComparisonSlider bgImageSource="/images/virtual/turn-light-2.jpg" aboveImageSource="/images/virtual/turn-light-1.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Sun Shade Retouching</h5>
                <ImageComparisonSlider bgImageSource="/images/virtual/sun-shade-2.jpg" aboveImageSource="/images/virtual/sun-shade-1.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Dusk Sky Replacement </h5>
                <ImageComparisonSlider bgImageSource="/images/virtual/sky-2.jpg" aboveImageSource="/images/virtual/sky-1.jpg" />
            </div>

        </div>
    )
}

export default DayToDusk;