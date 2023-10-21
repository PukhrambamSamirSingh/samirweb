import { useEffect } from "react"
import ImgSlider from "../components/ImgSlider"
import { blogs } from "../data"

const Blogs = () => {
    const handleScrollAnimation = () => {
        const blogElements = document.querySelectorAll(".animate__animated")
        blogElements.forEach((blog) => {
            const blogPosition = blog.getBoundingClientRect().top
            const isVisible = blogPosition < window.innerHeight * 0.75
            const isActive = blog.classList.contains("active")

            if (isVisible && !isActive) {
                blog.classList.add("active", "animate__fadeInLeft", "opacity-100")
                blog.classList.remove("animate__fadeOutleft")
            } else if (!isVisible && isActive) {
                blog.classList.remove("active", "animate__fadeInLeft", "opacity-100")
                blog.classList.add("animate__fadeOutleft")
            }
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScrollAnimation)

        return () => {
            window.removeEventListener("scroll", handleScrollAnimation)
        }
    }, [])
    return (
        <div className="w-full min-h-[50vh] p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="blogs">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Blogs</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div className="w-full flex flex-col gap-2 shadow-2xl animate__animated border dark:border-gray-800 rounded-md opacity-0" key={blog.id}>
                        {blog.images && (
                            <ImgSlider images={blog.images} />
                        )}
                        <div className="flex flex-col gap-2 p-2">
                            <h2 className="text-xl font-semibold text-gray-500">{blog.title}</h2>
                            <span className="text-md">
                                {blog.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs
