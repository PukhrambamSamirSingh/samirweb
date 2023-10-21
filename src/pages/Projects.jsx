import { useEffect } from "react"
import ImgSlider from "../components/ImgSlider"
import { projects } from "../data"


const Projects = () => {
    const handleScrollAnimation = () => {
        const projectElements = document.querySelectorAll(".animate__animated");
        projectElements.forEach((project) => {
            const projectPosition = project.getBoundingClientRect().top;
            const isVisible = projectPosition < window.innerHeight * 0.75;
            const isActive = project.classList.contains("active");

            if (isVisible && !isActive) {
                project.classList.add("active", "animate__fadeInLeft", "opacity-100");
                project.classList.remove("animate__fadeOutLeft");
            } else if (!isVisible && isActive) {
                project.classList.remove("active", "animate__fadeInLeft", "opacity-100");
                project.classList.add("animate__fadeOutLeft");
            }
        });
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScrollAnimation)

        return () => {
            window.removeEventListener("scroll", handleScrollAnimation)
        }
    }, [])

    return (
        <div className="w-full min-h-screen p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="projects">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Projects</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div className="w-full flex flex-col shadow-2xl animate__animated rounded-md border dark:border-gray-800 opacity-0" key={project.id}>
                        <ImgSlider images={project?.images} />
                        <div className="p-2 flex flex-col gap-4">
                            <div className="flex items-center gap-1">
                                <a href={`https://${project?.link}`} className="text-blue-500 underline text-xl">Click here</a>
                                <span>to view my website</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold text-gray-500">{project?.title}</h2>
                                <span className="text-md">
                                    {project?.desc}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1>Test user (Check by using this email/username and password)</h1>
                                <div className="flex flex-row xs:flex-col md:flex-row gap-2">
                                    <h1>Email/Username:</h1>
                                    <span>{project?.email}</span>
                                </div>
                                <div className="flex gap-2">
                                    <h1>Password:</h1>
                                    <span>{project?.password}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
