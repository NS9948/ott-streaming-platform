import api from "../api/axios";

export const getMovies = async () => {
    const response = await api.get("/admin/movies");
    return response.data.data;
}

export const getUserMovies = async (params = {}) => {
    const response = await api.get("/search", {
        params
    })
    return response.data
}

export const createMovie = async (formData) => {
    const response = await api.post("/admin/movie", formData);
    return response.data;
}

export const searchMovies = async ({
    search = "",
    category = "",
    type = "",
    page = 1,
    limit = 20,
}) => {
    const response = await api.get("/search", {
        params: {
            search,
            category,
            type,
            page,
            limit,
        },
    });

    return response.data;
};

export const getFilterServie = async () => {
    const response = await api.get("/search/filters");
    return response.data 
}

export const updateMovie = async (id, formData) => {
    const response = await api.put(`/admin/movie/${id}`, formData)
    return response.data 
}

export const deleteMovie = async (id) => {
    const response = await api.delete(`/admin/movie/${id}`)
    return response.data
}