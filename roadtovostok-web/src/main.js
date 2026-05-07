import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import GptAdWrap from './components/GptAdWrap.vue'
import './assets/main.css'

const app = createApp(App)

app.component('GptAdWrap', GptAdWrap)
app.use(router)
app.use(i18n)

app.mount('#app')
