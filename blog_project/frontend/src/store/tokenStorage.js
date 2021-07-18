import createPersistedState from 'vuex-persistedstate'

const persistedState = createPersistedState({
    paths: [
        'TokenStorage.accessTokenKey',
        'TokenStorage.refreshTokenKey',
    ]
})

const TokenStorage = {
    namespaced: true,
    state: {
        accessTokenKey: '',
        refreshTokenKey: '',
        isVerified: false,
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
            return {
                token: `${state.accessTokenKey}`
            }
        },
    },
    mutations: {
        SaveTokenData(state, data) {
            state.accessTokenKey = data.access
            state.refreshTokenKey = data.refresh
            state.isVerified = true
        },
        ClearTokenData(state) {
            state.accessTokenKey = ''
            state.refreshTokenKey = ''
            state.isVerified = false
        },
    }
}

export { TokenStorage, persistedState }