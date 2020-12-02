/**
 * Vue Start Kit
 *
 * This is the APP entry point.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import Vue from 'vue';
import { router } from '~/domain/router';
import { store } from '~/domain/store/vuex';
import App from '~/components/app.vue';

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
});
