import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8fd9eb98-8a5e-46ef-8b93-d27766bdfbd8'
    }
})

