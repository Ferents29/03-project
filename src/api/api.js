import * as axios from "axios";

let baseUrl = `https://social-network.samuraijs.com/api/1.0`;

const instance = axios.create({
    withCredentials:true,
    baseUrl:`https://social-network.samuraijs.com/api/1.0`,
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
        return instance.get(baseUrl + `/profile/` + userId);
    },
}
export const authAPI = {
    me(){
        return instance.get(baseUrl + `/auth/me`);
    },
}
