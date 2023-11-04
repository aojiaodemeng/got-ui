import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import GotUi from '../packages/index'
import GotUi from '@aojiaodemeng/got-ui'
import '@aojiaodemeng/got-ui/lib/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.mount('#app')
app.use(GotUi).mount('#app')
