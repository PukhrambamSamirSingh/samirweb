import { useContext, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import { newRequests } from "../utils/newRequests"
import ThemeBtn from "./ThemeBtn"
import { UserContext } from "../context/userContext"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { user, setUser } = useContext(UserContext)
    const logout = async () => {
        try {
            const res = await newRequests.post("/auth/logout")
            if (res.status === 200) {
                localStorage.removeItem("portfolioUser")
                setUser(null)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    return (
        <div className="w-full flex items-center justify-between p-2 sm:px-4 sm:py-2 sticky top-0 dark:bg-gray-950 bg-slate-100 z-10">
            <a href="#home" className="flex items-center">
                <img className="w-14 h-14" src="https://res.cloudinary.com/samircloud/image/upload/v1696336302/m5sbpwirxygmnm7flaj9.png" alt="" />
                <h1 className="font-bold font-sans gradient_text text-xl sm:text-2xl">
                    SamirWeb
                </h1>
            </a>
            <ul className="hidden lg:flex gap-4 md:gap-6">
                <li className="cursor-pointer">
                    <ScrollLink to="home" smooth={true} duration={500}>
                        Home
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="about" smooth={true} duration={500}>
                        About
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="skills" smooth={true} duration={500}>
                        Skills
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="projects" smooth={true} duration={500}>
                        Projects
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="blogs" smooth={true} duration={500}>
                        Blogs
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="feedbacks" smooth={true} duration={500}>
                        Feedbacks
                    </ScrollLink>
                </li>
                <li className="cursor-pointer">
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        Contact Me
                    </ScrollLink>
                </li>
            </ul>
            {!user ? (
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeBtn />
                    <Link to="/login" className="px-2 py-1 flex items-center justify-center bg-orange-500 text-white">Login</Link>
                    <Link to="/register" className="px-2 py-1 flex items-center justify-center bg-orange-500 text-white">Sign Up</Link>
                </div>
            ) : (
                <div className="hidden lg:flex gap-4 items-center">
                    <ThemeBtn />
                    <Link to="/profile">
                        <img className="w-12 h-12 rounded-full object-cover" src={user?.profilePic} alt="" />
                    </Link>
                    <div>
                        <button className="px-2 py-1 items-center bg-orange-500 text-white justify-center border hidden md:flex" onClick={logout}>Logout</button>
                    </div>
                </div>
            )}

            <div className="flex gap-4 items-center lg:hidden">
                <ThemeBtn />
                {user && (
                    <Link to="/profile">
                        <img className="w-8 h-8 rounded-full object-cover" src={user?.profilePic} alt="" />
                    </Link>
                )}
                <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                <div className="relative">
                    {toggle && (
                        <ul className="flex flex-col items-center text-xl gap-3 absolute right-0 top-[34px] p-4 dark:bg-gray-950 bg-orange-50 w-72 shadow animate__animated animate__bounceInDown">
                            <li className="cursor-pointer">
                                <ScrollLink to="home" smooth={true} duration={500}>
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="about" smooth={true} duration={500}>
                                    About
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="skills" smooth={true} duration={500}>
                                    Skills
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="projects" smooth={true} duration={500}>
                                    Projects
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="blogs" smooth={true} duration={500}>
                                    Blogs
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="feedbacks" smooth={true} duration={500}>
                                    Feedbacks
                                </ScrollLink>
                            </li>
                            <li className="cursor-pointer">
                                <ScrollLink to="contact" smooth={true} duration={500}>
                                    Contact Me
                                </ScrollLink>
                            </li>
                            {!user && (
                                <Link to="/login" className="px-6 py-1 bg-orange-500 text-white rounded-md flex items-center justify-center border">Login</Link>)}
                            {user && (
                                <button className="px-6 py-1 bg-orange-500 text-white rounded-md flex items-center justify-center border" onClick={logout}>Logout</button>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
