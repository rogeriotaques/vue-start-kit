/**
 * Vue Start Kit
 *
 * This is the APP entry point.
 *
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

// Optional. Makes async/await work in most browsers.
import '@babel/polyfill';

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
