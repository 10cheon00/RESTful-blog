const apiUrl = 'http://rest-blog.run.goorm.io/api/'

import axios from 'axios'

export default {

    data() {
        return {
            tokenAPIUrl: apiUrl + 'profiles/',
            tokenVerifyUrl: apiUrl + 'profiles/verify/',
            profileSignUpUrl: apiUrl + 'profiles/signup/',
            accessTokenStorageKey: 'bearer_token_access',
            refreshTokenStorageKey: 'bearer_token_refresh'
        }
    },
    methods: {
        ObtainToken(profile, successHandler, errorHandler){
            axios.post(
                this.tokenAPIUrl, {
                    username: profile.username,
                    password: profile.password
                }
            ).then(response => {
                successHandler(response)
            }).catch(error => {
                errorHandler(error)
            });
        },
        SaveTokens(data){
            localStorage.setItem(
                this.accessTokenStorageKey,
                data.access
            )
            localStorage.setItem(
                this.refreshTokenStorageKey,
                data.refresh
            )
        },
        GetAccessTokenFromLocalStorage(){
            return localStorage.getItem(
                this.accessTokenStorageKey
            )
        },
    }
};

