import axios from 'axios'


const profileApiUrl = 'http://rest-blog.run.goorm.io/api/profiles/'

const profileUrl = {
    GetSignUpUrl: () => { 
        return profileApiUrl + 'signup/'
    },
    GetSignInUrl: () => {
        return profileApiUrl
    },
    GetVerifyTokenUrl: () => {
        return profileApiUrl + 'verify/'
    }
}

const ProfileApi = {
    actions: {
        SignUp({ commit }, profile) {
            return axios({
                method: 'post',
                url: profileUrl.GetSignUpUrl(),
                data: profile
            })
        },
        SignIn({ commit }, profile) {
            return axios({
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
        Verify({ commit, state, rootGetters }){
            // TODO
            // Promise에 대해 알아야겠다. action은 Promise를 이용해 작성..
            // 
            let accessTokenKey = rootGetters['TokenStorage/GetAccessTokenKey']
            if(accessTokenKey.length == 0){
                commit('TokenStorage/TokenExpired')
            }
            axios({
                method: 'post',
                url: profileUrl.GetVerifyTokenUrl(),
                data: rootGetters['TokenStorage/GetDataForVerification'],
            }).then( response => {
                if(response.status == 200){
                    commit('TokenStorage/TokenVerified')
                }
            }).catch( error => {
                commit('TokenStorage/TokenExpired')
            })
        },
    }
}

export default ProfileApi
