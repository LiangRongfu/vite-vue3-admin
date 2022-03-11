import { createApp } from 'vue'
import router from './router/index';
import store from './store'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import initSvgIcon from '@/icons/index.ts'
import installElementPlus from './plugins/element'

createApp(App)
    .use(store)
    .use(installElementPlus)
    .use(initSvgIcon)
    .use(router)
    .mount('#app')