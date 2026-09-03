import api from "../api/axios"

export const getHeroBanners = async () => {
    const response = await api.get("/admin/hero-banner")
    return response.data.data
}

export const getActiveHeroBanners = async () => {
    const response = await api.get("/home/hero-banner")
    return response.data.data
}

export const createHeroBanner = async (formdata) => {
    const response = await api.post("/admin/hero-banner",formdata)
    return response.data 
}

export const updateHeroBanner = async (id,formdata) => {
    const response = await api.put(`/admin/hero-banner/${id}`,formdata)
    return response.data
}

export const deleteHeroBanner = async (id) => {
    const response = await api.delete(`/admin/hero-banner/${id}`)
    return response.data
}