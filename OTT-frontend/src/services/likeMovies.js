import api from "../api/axios"

export const likeMovie = async (movieId) => {
    const response = await api.post(`/liked-movie/${movieId}`);
    return response.data;
};

export const removeLikedMovie = async (movieId) => {
    const response = await api.delete(`/liked-movie/${movieId}`);
    return response.data;
};

export const getLikedMovies = async () => {
    const response = await api.get("/liked-movie");
    return response.data;
};