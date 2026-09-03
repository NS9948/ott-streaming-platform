import api from "../api/axios";

export const getDashboardData = async () => {
    const response = await api.get("/admin/dashboard");
    return response.data;
}