import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/details/:slug',
    name: 'DestinationDetails',
    component: () =>
      import(/* webpackChunkName: "details" */ '../views/DestinationDetails'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
