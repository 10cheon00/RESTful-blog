import router from '/src/router/index'
import axiosInstance from '/src/store/BackendApi/axiosWrapper'


const profileUrl = {
    GetSignUpUrl: () => { 
        return 'profiles/signup/'
    },
    GetSignInUrl: () => {
        return 'profiles/'
    },
    GetVerifyTokenUrl: () => {
        return 'profiles/verify/'
    },
    GetRefreshTokenUrl: () => {
        return 'profiles/refresh/'
    }
}

const ProfileApi = {
    actions: {
        SignUp({ commit }, profile) {
            axiosInstance({
                method: 'post',
                url: profileUrl.GetSignUpUrl(),
                data: profile
            }).then(response => {
                router.push({name: 'ListArticle'})
            })
        },
        SignIn({ commit }, profile) {
            axiosInstance({
                method: 'post',
                url: profileUrl.GetSignInUrl(),
                data: profile
            }).then(response => {
                commit('TokenStorage/SaveTokenData', response.data)
                router.push({name: 'ListArticle'})
            }).catch(error => {
                
            })
        },
        VerifyToken({ commit, rootGetters }){
            return new Promise((resolve, reject) => {
                axiosInstance({
                    method: 'post',
                    url: profileUrl.GetVerifyTokenUrl(),
                    data: rootGetters['TokenStorage/GetDataForVerifyAccessToken'],
                }).then(response => {
                    console.log('success')
                    resolve(response)
                }).catch(error => {
                    console.log('failed')
                    reject(error)
                })
            })
        },
        RefreshToken({ commit, rootGetters }){
            return new Promise((resolve, reject) => {
                axiosInstance({
                    method: 'post',
                    url: profileUrl.GetRefreshTokenUrl(),
                    data: rootGetters['TokenStorage/GetDataForRefreshToken']
                }).then(response => {
                    commit('TokenStorage/SaveAccessToken', response.data.access)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default ProfileApi
