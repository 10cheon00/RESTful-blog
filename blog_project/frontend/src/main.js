import { createApp } from 'vue'

import App from './App.vue'
import vuexStore from './store/store'
import router from './router'

createApp(App).use(router).use(vuexStore).mount('#app')
