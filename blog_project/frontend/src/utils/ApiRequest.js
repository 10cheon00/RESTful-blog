import axios from 'axios'

import TokenManager from '/src/utils/TokenManager'

const djangoApiUrl = 'http://rest-blog.run.goorm.io/api/'

export function ArticleRequestApi() {
    const articleApiUrl = djangoApiUrl + 'articles/'
    function GetListCreateUrl() {
        return articleApiUrl
    }
    function GetRetrieveUpdateDestroyUrl(articleId) {
        return articleApiUrl + articleId
    }

    this.List = () => {
        let request = axios({
            method: 'get',
            url: GetListCreateUrl()
        })
        return request
    }
    this.Create = (article) => {
        let tokenMgr = new TokenManager()
        let request = axios({
            method: 'post',
            url: GetListCreateUrl(),
            headers: tokenMgr.GetAuthorizationString(),  // 토큰매니저는 싱글톤인가? 
            data: article
        })
        return request
    }
    this.Retrieve = (articleId) => {
        let request = axios({
            method: 'get',
            url: GetRetrieveUpdateDestroyUrl(articleId)
        })
        return request
    }
    this.Delete = (articleId) => {
        let tokenMgr = new TokenManager()
        let request = axios({
            method: 'delete',
            url: GetRetrieveUpdateDestroyUrl(articleId),
            headers: tokenMgr.GetAuthorizationString()
        })
        return request
    }
}

export function ProfileRequestApi() {
    const profileApiUrl = djangoApiUrl + 'profiles/'
    function GetSignUpUrl() {
        return profileApiUrl + 'signup/' 
    }
    function GetSignInUrl() {
        return profileApiUrl 
    }

    this.SignUp = (profile) => {
        let request = axios({
            method: 'post',
            url: GetSignUpUrl(),
            data: profile
        })
        return request
    }
    this.SignIn = (profile) => {
        let request = axios({
            method: 'post',
            url: GetSignInUrl(),
            data: profile
        })
        return request
    }
    return this
}