import './style.scss'
import './assets/SF-Pro-Display-CSS-main/sf-pro-display.css'
import { AnimateInViewDirective } from "@neeravp/vue-3-animate-in-view";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive("animate-inview", AnimateInViewDirective);
app.mount('#app')
