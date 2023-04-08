import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia';

import { router } from '@/domain/router';
import App from '@/App.vue';

// import SeedVue from 'seed-vue';
// import 'seed-vue/dist/index.css';

// Vue.use(SeedVue);

Vue.use(VueCompositionApi);
Vue.use(PiniaVuePlugin); //追加

const pinia = createPinia();

new Vue({
  el: '#app',
  router,
  pinia,
  render: (h) => h(App)
});
