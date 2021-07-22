import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VButton from './components/VButton/index.vue'
import 'virtual:windi.css'

createApp(App)
  .component('v-button', VButton)
  .use(router)
  .use(store)
  .mount('#app')

// if (window.matchMedia("(prefers-color-scheme: dark)").matches)
//   document.documentElement.classList.add("dark");
// else document.documentElement.classList.add("light");
