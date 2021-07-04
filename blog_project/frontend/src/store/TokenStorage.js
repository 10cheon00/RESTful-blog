
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
    },
    mutations: {
        SaveTokenData(state, data) {
            state.accessTokenKey = data.access
            state.refreshTokenKey = data.refresh
        },
    }
}

export default TokenStorage