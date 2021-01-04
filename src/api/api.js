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
    }
}
export const profileAPI = {
    setUserProfile(id){
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getUserStatus(id){
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateUserStatus(status){
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }

}


export const authAPI = {
    getAuth() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
    signIn(email, password, rememberMe, captcha) {
        return instance.post(`/auth/login`,{email, password, rememberMe, captcha})
            .then(response => response.data)
    }
}