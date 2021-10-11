import Vue from 'vue';
import VueRouter from 'vue-router';

import TaskList from '~/components/TaskList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: TaskList
  }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
