import axios from "axios"

export const newRequests = axios.create({
    baseURL: "https://samirweb-api.onrender.com/api",
    withCredentials: true
})