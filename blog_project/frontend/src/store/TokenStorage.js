import createPersistedState from 'vuex-persistedstate'

const persistedState = createPersistedState({
    paths: [
        'TokenStorage',
    ]
})

const TokenStorage = {
    namespaced: true,
    state: {
        accessTokenKey: '',
        refreshTokenKey: '',
        verified: false,
    },
    getters: {
        GetAccessTokenKey: (state) => {
            return state.accessTokenKey
        },
        GetHeaderForAuthorization: (state) => {
            return {
                Authorization: `Bearer ${state.accessTokenKey}`
            }
        },
        HasTokenKey: (state) => {
            return state.accessTokenKey.length > 0
        },
        GetDataForVerification: (state) => {
            return `Bearer ${state.accessTokenKey}`
        },
    },
    mutations: {
        SaveTokenData(state, data) {
            state.accessTokenKey = data.access
            state.refreshTokenKey = data.refresh
        },
        ClearTokenData(state) {
            state.accessTokenKey = ''
            state.refreshTokenKey = ''
        },
        TokenVerified(state) {
            state.verified = true
        },
        TokenExpired(state){
            state.verified = false
        }
    }
}

export { TokenStorage, persistedState }