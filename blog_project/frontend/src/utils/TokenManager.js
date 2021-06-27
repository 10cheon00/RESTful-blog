export default function(){
    const accessTokenKey = 'BearerAccessToken'
    const refreshTokenKey = 'BearerRefreshToken'

    this.SaveToken = (data) => {
        localStorage.setItem(accessTokenKey, data.access)
        localStorage.setItem(refreshTokenKey, data.refresh)
    }
    this.GetAccessToken = (token) => {
        return localStorage.getItem(accessTokenKey)
    }
    
    this.GetAuthorizationString = () => {
        let accessToken = this.GetAccessToken()
        return {
            Authorization: `Bearer ${accessToken}`
        }
    }
    return this
}