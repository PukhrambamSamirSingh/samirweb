import { FcGoogle } from "react-icons/fc"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"
import { newRequests } from "../utils/newRequests"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

const OAuth = () => {
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)

            const res = await newRequests.post("/auth/google", {
                name: result.user.displayName,
                email: result.user.email,
                profilePic: result.user.photoURL
            })
            if (res.status === 200) {
                navigate("/")
                localStorage.setItem("portfolioUser", JSON.stringify(res.data))
                setUser(res.data)
            }
        } catch (error) {
            console.log("Could not sign in with google", error)
        }
    }

    return (
        <button type="button" onClick={handleGoogleClick} className="flex justify-center items-center gap-2 bg-gray-800 p-2">
            <FcGoogle />
            <span className="text-white">
                CONTINUE WITH GOOGLE
            </span>
        </button>
    )
}

export default OAuth
