import axios from "axios";
import {ProfileDataFormDataType} from "../components/Content/Profile/ProfileDataForm/ProfileDataForm";

export type ResponseType<D = {}> = {
    data: D
    fieldsErrors: Array<{ field: string, error: string }>
    messages: string[]
    resultCode: number
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a3689f8d-4bdb-4cdd-9a1a-83733437adfc"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        const payload = {email, password, rememberMe, captcha}
        return instance.post<ResponseType>('auth/login', payload)
    },
    logout() {
        return instance.delete('auth/login')
    },
}
export const profileAPI = {
    setFollow(userID: number) {
        return instance.post(`follow/${userID}`, {})
            .then(response => response.data.resultCode)
    },
    setUnfollow(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => response.data.resultCode)
    },
    getUserProfile(userID: string) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
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

export const securityAPI = {
    getCaptcha(){
        return instance.get('security/get-captcha-url')
    }
}

export type UpdatePhotoResponseType = Omit<ResponseType<{photos: PhotosType}>, 'fieldsErrors'>
export type PhotosType = {
    large: string
    small: string
}




