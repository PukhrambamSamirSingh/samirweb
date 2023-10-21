import { useState } from "react";
import PropTypes from "prop-types"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

const ImgSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
        );
    };
    return (
        <>
            {images.map((item, index) => (
                <div key={index} className={`w-full overflow-y-hidden ${index !== currentIndex ? 'hidden' : ''} relative rounded-md`}>
                    <img className="w-full h-full object-contain" src={images[index]} alt="" />
                    <div className='w-full flex items-center justify-between gap-2 absolute top-16'>
                        <IoIosArrowDropleftCircle disabled={currentIndex === 0}
                            onClick={handlePrevious} className='text-orange-500 text-6xl cursor-pointer' />
                        <IoIosArrowDroprightCircle disabled={currentIndex === images.length - 1}
                            onClick={handleNext} className='text-orange-500 text-6xl cursor-pointer' />
                    </div>
                </div>
            ))}
        </>
    )
}

export default ImgSlider
ImgSlider.propTypes = {
    images: PropTypes.array.isRequired
}
