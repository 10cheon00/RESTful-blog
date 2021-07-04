import axios from 'axios'


const profileApiUrl = 'http://rest-blog.run.goorm.io/api/profiles/'

const profileUrl = {
    GetSignUpUrl: () => { 
        return profileApiUrl + 'signup/'
    },
    GetSignInUrl: () => {
        return profileApiUrl
    },
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
        }
    }
}

export default ProfileApi
