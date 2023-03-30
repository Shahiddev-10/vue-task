import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/app.scss'

import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).mount('#app')
