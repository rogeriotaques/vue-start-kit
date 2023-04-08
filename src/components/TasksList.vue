<script lang="ts">
import Vue from 'vue';
import { mapState } from 'pinia';
import { useStore } from '@/domain/store';

export default Vue.extend({
  name: 'TasksList',

  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapState(useStore, ['loading'])
  },

  data: (): any => ({})
});
</script>

<template>
  <div>
    <dl class="tasks">
      <template v-if="loading">
        <dt class="tasks__item">Loading...</dt>
      </template>
      <template v-else-if="tasks.length > 0">
        <dt class="tasks__item" v-for="task in tasks" :key="task.id">
          <input v-model="task.done" :id="`check_${task.id}`" type="checkbox" @click="(event) => $emit('check', { task, event })" />
          <label :for="`check_${task.id}`" :class="['tasks__item__text', { 'is-done': task.done }]">{{ task.text }}</label>
          <button @click="() => $emit('remove', task)">Delete</button>
        </dt>
      </template>
      <template v-else>
        <dt class="tasks__item">No tasks yet.</dt>
      </template>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  display: block;
  width: 100%;

  &__item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 8px;

    &__text {
      width: 80%;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
}

.is-done {
  text-decoration: line-through;
}
</style>
