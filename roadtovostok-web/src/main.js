import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import AffiliateAdSlot from './components/ads/AffiliateAdSlot.vue'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(i18n)

// 全局注册广告位组件，页面模板只负责选择内容间隔，不重复实现第三方脚本逻辑。
app.component('AffiliateAdSlot', AffiliateAdSlot)

app.mount('#app')
