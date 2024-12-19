import ImageComparisonSlider from "../ImageComparisonSlider";

const PhotoEditting = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#16191e] text-center">
            <div>
                <h5 className="my-6 font-semibold">Brightness & Contrast Adjustment</h5>
                <ImageComparisonSlider bgImageSource="/images/editting/brightness-1.jpg" aboveImageSource="/images/editting/brightness-2.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Color Correction</h5>
                <ImageComparisonSlider bgImageSource="/images/editting/color-1.JPG" aboveImageSource="/images/editting/color-2.JPG" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Lens Distoration Correction</h5>
                <ImageComparisonSlider bgImageSource="/images/editting/lens-2.jpg" aboveImageSource="/images/editting/lens-1.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Lens Spot Removal</h5>
                <ImageComparisonSlider bgImageSource="/images/editting/lens-spot-1.jpg" aboveImageSource="/images/editting/lens-spot-2.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">Photographer & Reflection Removal</h5>
                <ImageComparisonSlider bgImageSource="/images/editting/photo-grapher-2.JPG" aboveImageSource="/images/editting/photo-grapher-1.jpg" />
            </div>
            <div>
                <h5 className="my-6 font-semibold">TV & Fireplace Replacement </h5>
                <ImageComparisonSlider bgImageSource="/images/editting/fire-place-2.JPG" aboveImageSource="/images/editting/fire-place-1.jpg" />
            </div>

        </div>
    )
}

export default PhotoEditting;