import { DiHtml5 } from "react-icons/di"
import { FaCss3, FaNodeJs, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiTailwindcss, SiRedux, SiExpress, SiGnubash } from "react-icons/si"
import { BiLogoGit, BiLogoMongodb } from "react-icons/bi"
import { SiTypescript } from "react-icons/si";
import { FaGithub, FaDocker, FaAws } from "react-icons/fa6";
import { SiGitpod } from "react-icons/si";
import { GoCodespaces } from "react-icons/go";

const Skills = () => {

    return (
        <div className="w-full min-h-[80vh] p-4 md:px-12 lg:px-16 flex flex-col items-center gap-6 sm:gap-14" id="skills">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Skills & Experiences</h1>
            <div className="w-full h-full flex flex-col md:flex-row justify-between items-start gap-4 sm:gap-8">
                <div className="w-full md:w-1/2 grid grid-cols-3 xxs:grid-cols-4 md:grid-cols-3 xl:grid-cols-5 gap-2">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <DiHtml5 className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">HTML5</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <FaCss3 className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">CSS</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <IoLogoJavascript className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">JavaScript</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <FaNodeJs className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">NodeJs</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <SiTypescript className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">TypeScript</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <FaReact className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">ReactJs</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <SiRedux className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Redux</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <SiTailwindcss className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <BiLogoGit className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Git</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <FaGithub className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Github</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <SiGitpod className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Gitpod</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <GoCodespaces className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Codespaces</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <BiLogoMongodb className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">MongoDB</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <SiExpress className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">ExpressJs</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <FaDocker className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Docker</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <FaAws className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">AWS</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl dark:bg-gray-900 flex justify-center items-center hover:bg-orange-200 hover:text-white dark:hover:bg-gray-700 duration-200">
                            <SiGnubash className="text-3xl" />
                        </div>
                        <span className="text-sm sm:text-md">Bash</span>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                    <h1 className="text-xl">Experience:</h1>
                    <span className="p-2 text-md sm:text-lg">{"I'm"} Pukhrambam Samir Singh, a self-taught web developer with over 3 years of experience in designing and developing MERN-STACK and responsive websites.</span>
                </div>
            </div>
        </div>
    )
}

export default Skills
