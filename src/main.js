import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import './style.css';

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  {
    path: '/identification',
    component: () => import('./pages/PersonalInf o.vue'),
  },
  {
    path: '/survey',
    component: () => import('./pages/Survey.vue'),
  },
  {
    path: '/vaccine',
    component: () => import('./pages/Vaccine.vue'),
  },
  { path: '/tips', component: () => import('./pages/Tips.vue') },
  {
    path: '/thanks',
    component: () => import('./pages/Thanks.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount('#app');
