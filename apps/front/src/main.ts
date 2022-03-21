import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/@mdm/uikit/dist/style.css'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
