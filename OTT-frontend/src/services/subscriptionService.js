import api from "../api/axios";

export const subscribeToPlan = async (plan) => {
    const response = await api.post("/subscription", {
        plan
    });

    return response.data;
};

export const getSubscription = async () => {
    const response = await api.get("/subscription");

    return response.data;
};