import * as axios from "axios";

// Создаём отдельный экземпляр axios с заданными параметрами
const DAL = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "111ed823-b679-4f02-a085-07162f56ee6f"}
});

// Набор методов для работы с server API
export const userApi = {
    getUsers (currentPage=1, pageSize=50) {
        return DAL.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        // return DAL.get(`http://localhost/users3.php?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    subscribe(userId) {
        return DAL.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unSubscribe(userId) {
        return DAL.delete(`follow/${userId}`)
            .then(response => response.data)
    }
};

export const profileApi = {
    getProfile(userId) {
        return DAL.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return DAL.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return DAL.put(`profile/status/`,{status});
    },
    updatePhotos(fileWithPhoto) {
        const formData = new FormData();
        formData.append("image", fileWithPhoto);
        return DAL.put(`profile/photo`, formData, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        });
    },
    saveProfile(profile) {
        return DAL.put(`profile`, profile);
    },
}

export const authApi = {
    isAuthorized() {
        return DAL.get(`auth/me`)
            .then(response => response.data);
    },
    loginUser(data) {
        return DAL.post('auth/login',data)
            .then(response => response.data);
    },
    logoutUser() {
        return DAL.delete('auth/login')
            .then(response => response.data);
    }
}