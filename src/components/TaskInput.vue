<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TaskInput',

  data: (): any => ({
    taskName: ''
  }),

  methods: {
    addTaskHandler(): void {
      this.$emit('add', this.taskName);
      this.taskName = '';
      this.$refs.taskInput.focus();
    }
  }
});
</script>

<template>
  <div class="input">
    <input type="text" ref="taskInput" v-model="taskName" />
    <button @click="addTaskHandler">Add</button>
    <button @click="() => $emit('delete')">Delete all</button>
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex: 1 1 100%;
  width: 100%;

  > input {
    width: 60%;
    margin-right: 8px;
  }
}
</style>
