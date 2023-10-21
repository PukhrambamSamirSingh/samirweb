// import { useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
// import { items } from "../data";

const Feedbacks = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === items.length - 1 ? prevIndex : prevIndex + 1
    //     );
    // };

    // const handlePrevious = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? prevIndex : prevIndex - 1
    //     );
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) =>
    //             prevIndex === items.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);
    return (
        <div className="w-full p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="feedbacks">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Feedbacks</h1>
            <div className="w-full sm:w-1/2 flex justify-center items-center relative">
                <h1 className="text-md italic">No Feedbacks Yet!</h1>
                {/* {items.map((item, index) => (
                    <div key={item.id} className={`w-full h-80 lg:h-72 overflow-y-hidden ${index !== currentIndex ? 'hidden' : ''} shadow-2xl p-4 relative`}>
                        <div className="flex items-center gap-2">
                            <img className="w-12 h-12 object-cover rounded-full" src={item.image} alt="" />
                            <span className="font-semibold">{item.name}</span>
                        </div>
                        <p className="text-sm sm:text-md p-4">{`"${item.desc}"`}</p>
                        <span className="text-gray-500 absolute bottom-4 left-4">{item.profession}</span>
                    </div>
                ))} */}
                {/* <div className='w-full flex items-center justify-between gap-2 absolute top-32 sm:top-10 md:top-1/2'>
                    <IoIosArrowBack disabled={currentIndex === 0}
                        onClick={handlePrevious} className='text-white text-3xl cursor-pointer' />
                    <IoIosArrowForward disabled={currentIndex === items.length - 1}
                        onClick={handleNext} className='text-white text-3xl cursor-pointer' />
                </div> */}
            </div>
        </div>
    )
}

export default Feedbacks
