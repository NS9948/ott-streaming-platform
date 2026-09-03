import api from "./axios"

export const signup = async (FormData) => {
    const response = await api.post("/auth/signup",FormData)
    return response.data
}

export const login = async (FormData) => {
    const response = await api.post("/auth/signin", FormData)
    return response.data
}

