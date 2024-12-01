import ImageComparisonSlider from "../ImageComparisonSlider";

const PhotoEditting = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ImageComparisonSlider bgImageSource="/images/editting/picture-2.jpg" aboveImageSource="/images/editting/picture-1.jpg" />
            <ImageComparisonSlider bgImageSource="/images/compare.jpg" aboveImageSource="/images/compare1.jpg" />
            <ImageComparisonSlider bgImageSource="/images/compare.jpg" aboveImageSource="/images/compare1.jpg" />
            <ImageComparisonSlider bgImageSource="/images/compare.jpg" aboveImageSource="/images/compare1.jpg" />
        </div>
    )
}

export default PhotoEditting;