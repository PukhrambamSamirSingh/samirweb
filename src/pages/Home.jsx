import { useEffect, useState } from "react";

const Home = () => {
    const [index, setIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const delay = 100

    useEffect(() => {
        const text = ["Hello! I am Pukhrambam Samir Singh!", "I am a full-stack web developer!"]
        let currentIndex = 0;
        let currentText = "";

        const interval = setInterval(() => {
            if (currentIndex < text[index].length) {
                currentText += text[index][currentIndex];
                setDisplayText(currentText);
                currentIndex++;
            } else {
                clearInterval(interval)
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % text.length);
                    setDisplayText("");
                }, delay * 3)
            }
        }, delay);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="w-full min-h-[75vh] md:min-h-[90vh] flex flex-col sm:flex-row sm:items-center justify-around p-4 md:px-12 lg:px-16 gap-8" id="home">
            <div className="w-full sm:w-1/2 flex flex-col gap-5 h-1/2">
                <div className="flex gap-2 items-center">
                    <img className="w-6 h-6 sm:w-10 sm:h-10" src="https://static.vecteezy.com/system/resources/previews/012/496/491/original/flat-sparkling-star-icon-illustration-png.png" alt="" />
                    <h2 className="text-lg italic">Welcome to my personal portfolio!</h2>
                </div>
                <div className="h-32 md:h-52">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl gradient_text_intro">{displayText}</h1>
                </div>
                <h4>More Than 2+ Years of Experienced in Web Development.</h4>
            </div>
            <div className="w-full sm:w-1/2 h-1/2 flex items-center justify-center">
                <img className="animate__animated animate__zoomInDown animate__slower w-5/6 h-full xl:h-4/6 object-contain" src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" alt="" />
            </div>
        </div>
    )
}

export default Home
