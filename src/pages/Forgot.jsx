import { useReducer, useState } from "react"
import { newRequests } from "../utils/newRequests"
import { useNavigate } from "react-router-dom"
import { forgotPassword, initialState } from "../reducer/forgotPassword"

const Forgot = () => {
    const [state, dispatch] = useReducer(forgotPassword, initialState)
    const [setting, setSetting] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSetting(true)
        try {
            const res = await newRequests.put("/user/setpassword", {
                ...state
            })
            dispatch({
                type: "SET_INPUT",
                payload: res.data
            })
            if (res.status === 200) {
                navigate("/login")
            }
            setSetting(false)
        } catch (error) {
            setSetting(false)
            dispatch({
                type: "SET_ERROR",
                payload: { error: error.message }
            })
        }
    }
    const handleChange = (e) => {
        dispatch({
            type: "SET_INPUT",
            payload: { name: e.target.name, value: e.target.value }
        })
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-transparent fixed top-0 z-50">
            <div className="w-full h-full sm:w-1/2 sm:h-2/3 flex dark:bg-gray-950 dark:text-white bg-green-50">
                <div className="w-1/2 h-full hidden sm:flex">
                    <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/1291971619/photo/web-development-and-web-design-concept-in-dark-blue-background-programming-for-internet.jpg?s=2048x2048&w=is&k=20&c=Fy4riM14f6kZVSSEOe9aAjP_Z5pnSe18ns2fabWgpJ4=" alt="" />
                </div>
                <div className="w-full sm:w-1/2 p-4 flex flex-col gap-4">
                    <div className="w-full flex flex-col items-center">
                        <img className="w-14 h-14 rounded-full object-cover" src="https://res.cloudinary.com/samircloud/image/upload/v1695952725/plf9re0l8s0c0m91hktx.jpg" alt="" />
                        <h1 className="font-bold font-sans gradient_text text-xl sm:text-2xl">
                            SamirWeb
                        </h1>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {state.error && <span className="text-red-500 italic">{state.error.message}</span>}
                        <input className="p-2 bg-transparent outline-none border rounded-md" type="text" placeholder="Enter email" name="email" onChange={handleChange} required />
                        <input className="p-2 bg-transparent outline-none border rounded-md" type="password" placeholder="Enter password" name="password" onChange={handleChange} required />
                        <button className="bg-green-500 p-2 text-white flex justify-center items-center">{setting ? <img className="w-6 h-6" src="https://i.gifer.com/ZZ5H.gif" alt="" /> : "Continue"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot
