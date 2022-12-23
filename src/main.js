import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import store from '../src/store/index'
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App)
app.provide('emitter', emitter); 

app.use(router).use(store).mount('#app')
