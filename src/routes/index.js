import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../pages/Test.vue'),
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../pages/PersonalInfo.vue'),
  },
  {
    path: '/survey',
    name: 'survey',
    component: () => import('../pages/Survey.vue'),
  },
  {
    path: '/vaccine',
    name: 'vaccine',
    component: () => import('../pages/Vaccine.vue'),
  },
  {
    path: '/tips',
    name: 'tips',
    component: () => import('../pages/Tips.vue'),
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: () => import('../pages/Thanks.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;