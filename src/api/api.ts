import axios from "axios";

export type ResponseType<D = {}> = {
    data: D
    fieldsErrors: Array<{ field: string, error: string }>
    messages: string[]
    resultCode: number
}

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
        // if (!userID) userID = '27503'
        return instance.get(`profile/${userID}`).then(res => {
            return res.data
        })
    },
    getStatusProfile(userID:string) {
        // if(!userID) userID='27503'
        return instance.get(`profile/status/${userID}`)
    },
    updateStatusProfile(status:string) {
        return instance.put(`profile/status`,{status:status})
    },
    updatePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<UpdatePhotoResponseType>('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },
    updateProfile(profile: ProfileDataFormDataType) {
        const {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, website, vk, github, instagram, twitter, youtube, mainLink, facebook} = profile
        const response = {
            fullName,
            aboutMe,
            lookingForAJob,
            lookingForAJobDescription,
            contacts: {
                website,
                facebook,
                vk,
                github,
                instagram,
                twitter,
                youtube,
                mainLink
            }
        }
        return instance.put('profile', response)
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
export type UpdatePhotoResponseType = Omit<ResponseType<{photos: PhotosType}>, 'fieldsErrors'>

export type PhotosType = {
    large: string
    small: string
}
export type ProfileDataFormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}