import { createApp } from 'vue'

import App from './App.vue'
import vuexStore from './store/store'
import router from './router'

import tokenMixin from '/src/mixins/tokenMixin'


createApp(App).mixin(tokenMixin).use(router).use(vuexStore).mount('#app')
