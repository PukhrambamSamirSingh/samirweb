import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth"
import { initialState, registrationReducer } from "../reducer/registrationReducer"
import { newRequests } from "../utils/newRequests"
import { useContext, useReducer, useState } from "react"
import { UserContext } from "../context/userContext"

const Register = () => {
    const [state, dispatch] = useReducer(registrationReducer, initialState)
    const [registering, setRegistering] = useState(false)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setRegistering(true)
        try {
            const res = await newRequests.post("/auth/register", {
                ...state
            })
            dispatch({
                type: "SET_INPUT",
                payload: res.data
            })
            if (res.status === 200) {
                navigate("/")
                localStorage.setItem("portfolioUser", JSON.stringify(res.data))
                setUser(res.data)
            }
            setRegistering(false)
        } catch (error) {
            setRegistering(false)
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
            <div className="w-full h-full sm:w-4/5 sm:h-4/5 flex pt-10 dark:bg-gray-950 dark:text-white bg-green-50">
                <div className="w-1/2 h-full hidden sm:flex">
                    <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/1319188679/photo/rearview-shot-of-a-designer-working-on-his-computer.jpg?s=2048x2048&w=is&k=20&c=_CRiSRzCwann5_qK5JvAsgQ8RHmpXA812oYteH6Gfz0=" alt="" />
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
                        <input className="p-2 bg-transparent outline-none border rounded-md" type="text" name="name" placeholder="Enter name" onChange={handleChange} required />
                        <input className="p-2 bg-transparent outline-none border rounded-md" type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
                        <input className="p-2 bg-transparent outline-none border rounded-md" type="password" name="password" placeholder="Enter a strong password" onChange={handleChange} required />
                        <input className="p-2 bg-transparent outline-none border rounded-md" type="text" name="profession" placeholder="Enter profession" onChange={handleChange} required />
                        <button className="bg-green-500 p-2 text-white flex justify-center items-center">{registering ? <img className="w-6 h-6 object-contain" src="https://i.gifer.com/ZZ5H.gif" alt="" /> : "Continue"}</button>
                        <div className="w-full flex justify-center items-center">
                            <span>OR</span>
                        </div>
                        <OAuth />
                    </form>
                    <div className="flex text-sm">
                        <p>{"Already have an Account?"}</p><Link className="text-blue-600" to="/login">Sign In?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
