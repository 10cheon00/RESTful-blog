import { createStore } from 'vuex'

import BackendApi from '/src/store/BackendApi/module'
import { TokenStorage, persistedState } from '/src/store/tokenStorage'

export default createStore({
    plugins: [persistedState],
    modules: {
        BackendApi,
        TokenStorage,
    },
})
