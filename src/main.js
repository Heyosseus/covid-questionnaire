import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import './style.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('./pages/PersonalInfo.vue'),
  },
  {
    path: '/survey',
    name: 'survey',
    component: () => import('./pages/Survey.vue'),
  },
  {
    path: '/vaccine',
    name: 'vaccine',
    component: () => import('./pages/Vaccine.vue'),
  },
  {
    path: '/tips',
    name: 'tips',
    component: () => import('./pages/Tips.vue'),
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: () => import('./pages/Thanks.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount('#app');
