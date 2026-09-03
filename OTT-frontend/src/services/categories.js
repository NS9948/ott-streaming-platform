import api from "../api/axios";

export const createCategory = async (payload) => {
    const response = await api.post('/admin/category', payload)
    return response.data
}

export const getCategories = async () => {
    const response = await api.get("/admin/categories");
    return response.data.data;
};

export const getActiveCategories = async () => {
    const response = await api.get("/home/categories");
    return response.data.data;
};

export const editCategory = async (id, payload) => {
    const response = await api.put(`/admin/category/${id}`, payload)
    return response.data 
}

export const deleteCategory = async (id) => {
    const response = await api.delete(`admin/category/${id}`)
    return response.data
}