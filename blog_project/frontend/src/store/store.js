import { createStore } from 'vuex'

import AxiosApi from '/src/store/AxiosApi'
import TokenStorage from '/src/store/TokenStorage'


export default createStore({
    modules: {
        AxiosApi,
        TokenStorage,
    },
})
