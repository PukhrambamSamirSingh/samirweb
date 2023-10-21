import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { newRequests } from "../utils/newRequests"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(null)
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await newRequests.get("/user/get");
                setUser(res.data);
                setErr(null)
            } catch (error) {
                setErr(error.message);
            }
        }
        getUser()
    }, [])
    return (
        <UserContext.Provider value={{ err, user, setErr, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
}