import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import PersonalInfo from '../pages/PersonalInfo.vue';
import Survey from '../pages/Survey.vue';
import Vaccine from '../pages/Vaccine.vue';
import Tips from '../pages/Tips.vue';
import Thanks from '../pages/Thanks.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalInfo,
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey,
  },
  {
    path: '/vaccine',
    name: 'vaccine',
    component: Vaccine,
  },
  {
    path: '/tips',
    name: 'tips',
    component: Tips,
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: Thanks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
