import { useContext } from "react"
import ProfileImg from "../components/ProfileImg"
import { UserContext } from "../context/userContext"

const Profile = () => {
    const { user } = useContext(UserContext)

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-transparent fixed top-0 z-50">
            <div className="w-full h-full sm:w-1/2 sm:h-2/3 flex flex-col sm:flex-row dark:bg-gray-950 dark:text-white bg-green-50 gap-6 p-4 pt-10">
                <div className="w-full sm:w-1/2 flex">
                    <ProfileImg />
                </div>
                {user && (
                    <div className="w-full sm:w-1/2 flex flex-col gap-2 justify-center items-center sm:items-start font-bold">
                        <div className="flex gap-2">
                            <h1>NAME:</h1>
                            <span>{user.name}</span>
                        </div>
                        <div className="flex gap-2">
                            <h1>EMAIL:</h1>
                            <span>{user.email}</span>
                        </div>
                        {user.profession && (
                            <div className="flex gap-2">
                                <h1>PROFESSION:</h1>
                                <span>{user.profession}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile
