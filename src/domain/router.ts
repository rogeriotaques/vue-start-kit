import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/pages/ToDoPage.vue')
  },
  {
    path: '/about',
    component: () => import('@/pages/AboutPage.vue')
  },
  {
    path: '/*',
    component: () => import('@/pages/NotFoundPage.vue')
  }
];

export const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' };
  }
});

router.beforeEach(async (to: any, from: any, next: any) => {
  // First to run
  console.log('beforeEach' /*, to, from */);
  next();
});

router.beforeResolve(async (to: any, from: any, next: any) => {
  // Second to run
  console.log('beforeResolve' /*, to, from */);
  next();
});

export default router;
