import * as axios from "axios";

// Создаём отдельный экземпляр axios с заданными параметрами
const DAL = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "ad0e5aeb-73ff-4a52-9810-eada9f9eb0c4"}});

// Набор методов для работы с server API
export const userApi = {
    getUsers (currentPage=1, pageSize=50) {
        return DAL.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    subscribe(userId) {
        return DAL.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unSubscribe(userId) {
        return DAL.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    setProfile(userId) {
        return DAL.get(`profile/${userId}`)
            .then(response => response.data)
    },
    isAuthorized() {
        return DAL.get(`auth/me`)
            .then(response => response.data)
    }
};

