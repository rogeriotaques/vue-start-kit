/**
 * Vue Start Kit
 *
 * This is where all the routes are defined.
 *
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasks from '~/components/context/tasks.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Tasks }
  // Additional paths are coming here ...
  // { path: '/about', component: About }
];

export const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

export default router;
