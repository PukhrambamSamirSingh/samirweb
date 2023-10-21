import { useContext, useState } from "react"
import { BiImageAdd } from "react-icons/bi"
import { newRequests } from "../utils/newRequests"
import imgCloud from "../utils/imgCloud"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom"

const ProfileImg = () => {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(null)
    const [saving, setSaving] = useState(false)
    const [pic, setPic] = useState({
        profilePic: user?.profilePic
    })
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedImage) {
            console.log("No image was uploaded");
            return;
        }
        setSaving(true)
        const url = await imgCloud(selectedImage);
        try {
            const res = await newRequests.put("/user/setimage", {
                profilePic: url
            });
            setPic({ ...pic, ...res.data })
            if (res.status === 200) {
                navigate("/")
                setUser(res.data)
            }
            setSaving(false)
        } catch (error) {
            setSaving(false)
            console.log(error);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        } else {
            console.log("No image was uploaded")
        }
    };
    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center">
            {user && (
                <div className="w-48 h-48 xs:w-60 xs:h-60 md:w-48 md:h-48 lg:w-60 lg:h-60 relative">
                    {selectedImage ? (
                        <img className="w-full border border-gray-500 rounded-full h-full object-cover" src={URL.createObjectURL(selectedImage)} alt="" />
                    ) : (
                        <img className="w-full border border-gray-500  rounded-full h-full object-cover" src={user.profilePic} alt="" />
                    )}
                    <div className="w-full h-full absolute top-0 left-0 rounded-full hover:bg-gray-900/50 duration-200 hover:text-white flex items-center justify-center">
                        <label htmlFor="file">
                            <BiImageAdd className="text-3xl cursor-pointer" />
                            <input type="file" name="file" id="file" className="hidden" onChange={handleImageChange} />
                        </label>
                    </div>
                </div>
            )}
            <div className="pt-2">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-48 xs:w-60 md:w-48 lg:w-60">
                    {saving ? "Saving..." : "Save"}
                </button>
            </div>
        </form>
    )
}

export default ProfileImg
