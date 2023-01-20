import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/routes.js';
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');

import 'bootstrap/dist/js/bootstrap';
