import axios from 'axios'


const backendApiUrl = 'http://rest-blog.run.goorm.io/api/'

const axiosInstance = axios.create({
    baseURL: backendApiUrl,
    timeout: 2000,
    
})

axiosInstance.interceptors.response.use(
    response => {
        console.log(response)
        if(response.status >= 400){
            console.log("error over 400")
        }
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default axiosInstance
