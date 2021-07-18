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
    }
}

const ProfileApi = {
    actions: {
        SignUp({ commit }, profile) {
            return axiosInstance({
                method: 'post',
                url: profileUrl.GetSignUpUrl(),
                data: profile
            })
        },
        SignIn({ commit }, profile) {
            return axiosInstance({
                method: 'post',
                url: profileUrl.GetSignInUrl(),
                data: profile
            }).then(response => {
                commit(
                    'TokenStorage/SaveTokenData', 
                    response.data
                )
            })
        },
        VerifyToken({ commit,  rootGetters }){
            return new Promise((resolve, reject) => {
                let accessTokenKey = rootGetters['TokenStorage/GetAccessTokenKey']
                if(accessTokenKey.length == 0){
                    commit('TokenStorage/ClearTokenData')
                    reject('Does not have token.')
                }
                else{
                    axiosInstance({
                        method: 'post',
                        url: profileUrl.GetVerifyTokenUrl(),
                        data: rootGetters['TokenStorage/GetDataForVerification'],
                    }).then( response => {
                        if(response.status == 200){
                            resolve(response)
                        }
                        else{
                            reject(response)
                        }
                    }).catch( error => {
                        commit('TokenStorage/ClearTokenData')
                        reject(error.response)
                    })
                }
            })
        },
    }
}

export default ProfileApi
