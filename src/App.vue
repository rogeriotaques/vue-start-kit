<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'pinia';
import type { Task } from '@/domain/interfaces';
import { useStore } from '@/domain/store';
import { getTasksFromApi } from '@/domain/network';

export default Vue.extend({
  name: 'App',

  data: (): any => ({}),

  async created() {
    this.updateLoadingState(true);

    try {
      const data = await getTasksFromApi();
      data.forEach((text: Task) => this.addTask(text));
    } catch (error) {
      // To do: handle error
    } finally {
      this.updateLoadingState(false);
    }
  },

  methods: {
    ...mapActions(useStore, ['addTask', 'updateLoadingState'])
  }
});
</script>

<template>
  <div id="app">
    <h1>Vue 2 Start Kit</h1>

    <nav>
      <router-link to="/">Tasks</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Courier New', Courier, monospace;

  width: 100%;
  max-width: 320px;
  margin: 16px auto;
  padding: 8px 16px;
  border: thin solid whitesmoke;
  border-radius: 8px;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.3);
}
</style>
