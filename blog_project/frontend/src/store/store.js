import { createStore } from 'vuex'

import AxiosApi from '/src/store/AxiosApi'
import { TokenStorage, persistedState } from '/src/store/TokenStorage'

export default createStore({
    plugins: [persistedState],
    modules: {
        AxiosApi,
        TokenStorage,
    },
})
