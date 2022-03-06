import { createApp } from 'vue'

// Base componenet
import App from './App.vue'

// router | store
import router from "@/routes";
import store from "@/store";

const app = createApp(App)

// use X
app.use(router)
app.use(store)

// Mount base component to #app
app.mount('#app')