import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'cb518e47-d2d9-40b9-aefd-dfe61cc62153'
    }
})
export const usersAPI = {
    getUsers(numberPage: number, pageSize: number) {
        return instance.get(`users?page=${numberPage}&count=${pageSize}`).then(res => {
            return res.data
        })
    },

}
export const authAPI = {
    getAuth (){
        return instance.get(`auth/me`).then(res=>{
            return res.data
        })
    },
    login (email:string,password:string,rememberMe=false) {
        return instance.post('auth/login',{email,password,rememberMe}).then(res=>{
            return res.data
        })
    },
    logout () {
        return instance.delete('/auth/login').then(res=>{
            return res.data
        })
    }
}
export const profileAPI = {
    getUserProfile(userID: string) {
        if (!userID) userID = '27503'
        return instance.get(`profile/${userID !== undefined ? userID : 2}`).then(res => {
            return res.data
        })
    },
    getStatusProfile(userID:string) {
        if(!userID) userID='27503'
        return instance.get(`profile/status/${userID}`)
    },
    updateStatusProfile(status:string) {
        return instance.put(`profile/status`,{status:status})
    }
}
export const followAPI = {
    postFollow  (id:number)  {
        return instance.post(`follow/${id}`).then(res=>{
            return res.data
        })
    },
    deleteUnfollow (id:number) {
        return instance.delete(`follow/${id}`).then(res=>{
            return res.data
        })
    }
}