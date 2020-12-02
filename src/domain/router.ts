/**
 * Vue Start Kit
 *
 * This is where all the routes are defined.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from '~/components/context/tasks.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Tasks }

  // Additional paths are coming here ...
  // Also possible to create a catch-all page (error page?)
  // { path: '/*', component: SampleError404 }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
