import * as axios from "axios";

let baseUrl = `https://social-network.samuraijs.com/api/1.0`;

const instance = axios.create({
    withCredentials:true,
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId){
        return instance.post(baseUrl + `/follow/${userId}`);
    },
    unfollow(userId){
        return instance.delete(baseUrl + `/follow/${userId}`);
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
    },
}
export const profileAPI = {
    getProfile(userId){
        return instance.get(baseUrl + `/profile/` + userId);
    },
    getStatus(userId){
        return instance.get(baseUrl + `/profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(baseUrl + `/profile/status/`, {status: status});
    }
}
export const authAPI = {
    me(){
        return instance.get(baseUrl + `/auth/me`);
    },
}
