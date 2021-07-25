import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import(/* webpackChunkName: "brazil" */ '../views/Brazil'),
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import(/* webpackChunkName: "panama" */ '../views/Panama'),
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import(/* webpackChunkName: "hawaii" */ '../views/Hawaii'),
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () =>
      import(/* webpackChunkName: "brazil" */ '../views/Jamaica'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
