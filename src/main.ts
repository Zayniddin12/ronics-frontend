import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.css'
import definePlugins from '@/plugins'
import { createPinia } from 'pinia'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import VueLazyLoad from 'vue3-lazyload'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.use(VueLazyLoad)
definePlugins(app)
app.mount('#app')
