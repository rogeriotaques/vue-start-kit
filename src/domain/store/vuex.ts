/**
 * Vue Start Kit
 *
 * This is the (Vuex) store initialization.
 *
 * The store manages the state. It should only be mutated from within,
 * so outside components can not directly modify the state. To mutate
 * the state, components can dispatch an action or commit a mutation.
 *
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

import Vue from 'vue';
import Vuex from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
