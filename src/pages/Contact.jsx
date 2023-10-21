import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md"
import { BiSolidUser } from "react-icons/bi"
import { BsTwitter, BsGithub } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { SiReplit } from "react-icons/si"
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, formRef.current, 'LVfSehbI5qQ36UFRC')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setError(true)
            });
    };
    return (
        <div className="w-full min-h-[60vh] p-4 md:px-12 lg:px-16 flex flex-col items-center gap-3 sm:gap-14 pb-10" id="contact">
            <h1 className="text-2xl sm:text-4xl font-semibold underline">Contact Me</h1>
            {success && (
                <h1 className='text-xl font-bold italic'>Send successfully</h1>
            )}
            {error && (
                <h1 className='text-xl text-red-500 italic'>Failed to send!</h1>
            )}
            <form ref={formRef} className="w-full flex flex-col justify-center items-center gap-4" onSubmit={sendEmail}>
                <div className="flex gap-2 items-center border border-gray-500 w-full sm:w-1/2 p-2 rounded-md">
                    <BiSolidUser />
                    <input name='name' id='name' className="outline-none border-none bg-transparent w-[80%]" type="text" placeholder="Your name" />
                </div>
                <div className="flex gap-2 items-center border border-gray-500 w-full sm:w-1/2 p-2 rounded-md">
                    <MdEmail />
                    <input name='email' id='email' className="outline-none border-none bg-transparent w-[80%]" type="text" placeholder="Your email" />
                </div>
                <div className="flex items-center border border-gray-500 w-full sm:w-1/2 p-2 rounded-md">
                    <textarea name='message' id='message' className="w-full bg-transparent outline-none border-none" rows={8} type="text" placeholder="Your message" />
                </div>
                <button className="px-6 py-2 bg-orange-500 text-white max-w-max rounded-md">Submit</button>
            </form>
            <div className="flex items-center gap-2 pt-2">
                <h1>Social Links:</h1>
                <div className="flex gap-4">
                    <a href="https://github.com/PukhrambamSamirSingh"><BsGithub className="text-xl" /></a>
                    <a href="https://www.linkedin.com/in/samir-robin-6576bb251/"><FaLinkedinIn className="text-xl" /></a>
                    <a href="https://twitter.com/PukhrambamSamir"><BsTwitter className="text-xl" /></a>
                    <a href="https://replit.com/@SamirRobin"><SiReplit className="text-xl" /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
