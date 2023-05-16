import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
import store from './store';
import './style.css';
import * as rules from '@/config/rules.js';
import * as messages from '@/config/messages.js';

createApp(App).use(store).use(router).mount('#app');
