import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Footer from './components/Footer.vue'

createApp(App).component("foo-ter",Footer).use(router).mount('#app')
