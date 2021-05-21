import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import backendUrlMixin from './mixins/backend_url_mixin'

createApp(App).use(router).mixin(backendUrlMixin).mount('#app')
