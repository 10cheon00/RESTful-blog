import axios from 'axios'

import store from '/src/store/store'


const backendApiUrl = 'http://rest-blog.run.goorm.io/api/'

const axiosInstance = axios.create({
    baseURL: backendApiUrl,
    timeout: 1500,
})

axiosInstance.interceptors.request.use(
    config => {
        console.log(config)
        config.headers.Authorization = `Bearer ${store.state.TokenStorage.accessToken}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    undefined,
    async error => {
        console.log('accessToken is invalid')
        if(error.response.status == 401 &&
           error.config.isRetried === undefined){
            console.log('need refresing')
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
