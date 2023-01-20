import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: () => import('../pages/landing-page/index.vue'),
  },
  {
    path: '/login',
    name: 'Login Page',
    component: () => import('../pages/auth/login.vue'),
  },
  {
    path: '/register',
    name: 'Register Page',
    component: () => import('../pages/auth/register.vue'),
  },
  {
    path: '/form',
    name: 'Form Input',
    component: () => import('../pages/form-submit/index.vue'),
  },
  {
    path: '/wedding-invitation/:id',
    name: 'Wedding Invitation',
    component: () => import('../pages/template/template-1/index.vue'),
  },
  // {
  //   path: '/template-2/:id',
  //   name: 'Template 2',
  //   component: () => import('../pages/template/template-2/index.vue'),
  // },

  // Catch all route undefined
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/Error404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
});

export default router;
