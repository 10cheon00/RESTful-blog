import axios from 'axios'

import store from '/src/store/store'


const backendApiUrl = 'http://rest-blog.run.goorm.io/api/'

const axiosInstance = axios.create({
    baseURL: backendApiUrl,
    timeout: 1500,
})

axiosInstance.interceptors.request.use(
    config => {
        config.headers = Object.assign(
            config.headers,
            store.getters['TokenStorage/GetHeaderForAuthorization'])
        
        if(config.url == 'profiles/verify/'){
            config.data = store.getters['TokenStorage/GetDataForVerifyAccessToken']
        }
        if(config.url == 'profiles/refresh/'){
            config.data = store.getters['TokenStorage/GetDataForRefreshToken']
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    undefined,
    async error => {
        if(error.response.status == 401 &&
           error.config.isRetried === undefined){
            error.config.isRetried = true
            
            await store.dispatch('RefreshToken')
            return await axiosInstance(error.config)
        }
        else{
            return Promise.reject(error)
        }
    }
)

export default axiosInstance
