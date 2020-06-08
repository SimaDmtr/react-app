import * as axios from "axios";
import {instance} from "./instance";

export const usersAPI = {
    getUsers(currentPage, pageSize) {
       return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
           .then(response => response.data)
    },
    followUser(id){
        return instance.post(`follow/${id}`,null)
            .then(response => response.data)
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    setUserProfile(id){
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    }
}