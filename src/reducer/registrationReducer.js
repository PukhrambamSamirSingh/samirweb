export const initialState = {
    name: "",
    email: "",
    password: "",
    profession: "",
    err: null
}

export const registrationReducer = (state, action) => {
    switch (action.type) {
        case "SET_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "SET_ERROR":
            return {
                ...state,
                err: action.payload.error
            }
        default:
            return state
    }
}