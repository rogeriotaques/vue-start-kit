/**
 * Vue Start Kit
 *
 * The (vuex) store initialization.
 *
 * The store manages the state. It should only be mutated from within,
 * so outside components should not directly modify the state. To mutate
 * the state, components should dispatch an action or commit a mutation.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import Vue from 'vue';
import Vuex from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { state } from './state';

// Tells Vue to use Vuex
Vue.use(Vuex);

// Creates a new store instance
export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
