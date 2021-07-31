import createPersistedState from 'vuex-persistedstate'


const persistedState = createPersistedState({
    paths: [
        'TokenStorage.accessToken',
        'TokenStorage.refreshToken',
    ]
})

const TokenStorage = {
    namespaced: true,
    state: {
        accessToken: '',
        refreshToken: '',
        userData: null
    },
    getters: {
        GetAccessToken: (state) => {
            return state.accessToken
        },
        GetHeaderForAuthorization: (state) => {
            if(state.accessToken == ''){
                return {}
            }
            return {
                Authorization: `Bearer ${state.accessToken}`
            }
        },
        HasToken: (state) => {
            return state.accessToken.length > 0
        },
        GetDataForVerifyAccessToken: (state) => {
            if(state.accessToken == ''){
                return {}
            }
            return {
                token: `${state.accessToken}`
            }
        },
        GetDataForRefreshToken: (state) => {
            return {
                refresh: `${state.refreshToken}`
            }
        },
    },
    mutations: {
        SaveTokenData(state, data) {
            state.accessToken = data.access
            state.refreshToken = data.refresh
        },
        SaveAccessToken(state, accessToken) {
            state.accessToken = accessToken
        },
        SaveUserData(state, userData){
            state.userData = userData
        },
        ClearTokenData(state) {
            state.accessToken = ''
            state.refreshToken = ''
        },
    }
}

export { TokenStorage, persistedState }