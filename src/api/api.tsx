import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
         "API-KEY": "eb76bdb4-ac7b-4ad4-99f7-4880e4ec1335"
     }
})


export const usersAPI = {
    getUsers(currentPage: number,pageSize: number)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => response.data)
    }
}

export const followAPI = {
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)

            .then(response => response.data)
    },

    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)

            .then(response => response.data)
    }
}

export const authAPI = {
    authMy() {
        return instance.get(`auth/me`)
            .then(response => response)
    }
}


export const profileStatusAPI = {
    getProfileStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    getProfileInfo(userId: string) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data)
    }
}
