import { BsTwitter, BsGithub } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { SiReplit } from "react-icons/si"

const Footer = () => {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 p-4 dark:bg-gray-900 bg-slate-200">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <img className="w-12 h-12 object-cover rounded-full" src="https://res.cloudinary.com/samircloud/image/upload/v1696346456/q8magttsvyngb2ily2hp.jpg" alt="" />
                    <a href="#home" className="flex items-center">
                        <img className="w-12 h-12" src="https://res.cloudinary.com/samircloud/image/upload/v1696336302/m5sbpwirxygmnm7flaj9.png" alt="" />
                        <h1 className="font-bold font-sans gradient_text text-xl">
                            SamirWeb
                        </h1>
                    </a>
                </div>
                <span className="hidden sm:block">|</span>
                <p className="text-center text-sm sm:text-md">Copyright &copy; 2023 samirweb.onrender.com</p>
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/PukhrambamSamirSingh"><BsGithub className="text-xl" /></a>
                <a href="https://www.linkedin.com/in/samir-robin-6576bb251/"><FaLinkedinIn className="text-xl" /></a>
                <a href="https://twitter.com/PukhrambamSamir"><BsTwitter className="text-xl" /></a>
                <a href="https://replit.com/@SamirRobin"><SiReplit className="text-xl" /></a>
            </div>
        </div>
    )
}

export default Footer
