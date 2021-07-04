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
    },
    getters: {
        GetTokenKey: (state) => {
            return state.accessTokenKey
        },
        GetHeaderForAuthorization: (state) => {
            return {
                Authorization: `Bearer ${state.accessTokenKey}`
            }
        },
        HasTokenKey: (state) => {
            return state.accessTokenKey.length > 0
        }
    },
    mutations: {
        SaveTokenData(state, data) {
            state.accessTokenKey = data.access
            state.refreshTokenKey = data.refresh
        },
        ClearTokenData(state) {
            state.accessTokenKey = ''
            state.refreshTokenKey = ''
        }
    }
}

export { TokenStorage, persistedState }