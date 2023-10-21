import { abouts } from "../data"

const About = () => {
    return (
        <div className="w-full min-h-screen dark:bg-gray-800 bg-slate-200 p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="about">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">About Me</h1>
            <div className="w-full h-full flex flex-col gap-4 sm:flex-row justify-center items-center">
                <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
                    <img className="w-32 h-32 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-full border border-white" src="https://res.cloudinary.com/samircloud/image/upload/v1696346456/q8magttsvyngb2ily2hp.jpg" alt="" />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    {abouts.map((about) => (
                        <div className="" key={about.id}>
                            <h2 className="text-xl">{about.title}</h2>
                            <p className="p-2 text-md sm:text-lg">{about.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
