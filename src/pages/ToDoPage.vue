<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'pinia';
import { useStore } from '@/domain/store';
import { Task } from '@/domain/interfaces';

export default Vue.extend({
  name: 'ToDoPage',

  components: {
    TaskInput: () => import('@/components/TaskInput.vue'),
    TasksList: () => import('@/components/TasksList.vue')
  },

  data: () => ({}),

  computed: {
    ...mapState(useStore, ['tasks', 'tasksCount', 'doneTasksCount'])
  },

  methods: {
    ...mapActions(useStore, ['addTask', 'removeTask', 'markTaskAs']),

    addTaskHandler(taskName: string): void {
      const task: Task = {
        id: `${this.tasks.length + 1 + Math.random()}`,
        text: taskName,
        done: false
      };

      this.addTask(task);
    },

    removeAllTasksHandler(): void {
      this.tasks.forEach((task: Task) => {
        this.removeTask(task);
      });
    },

    removeTaskHandler(task: Task): void {
      this.removeTask(task);
    },

    markTaskAsHandler(payload: { task: Task; event: MouseEvent }): void {
      this.markTaskAs(payload.task, payload.event);
    }
  }
});
</script>

<template>
  <div>
    <h2>Tasks</h2>

    <div>
      <p>
        <span>Total of</span>
        <span v-if="tasksCount === 1">{{ tasksCount }} task.</span>
        <span v-else>{{ tasksCount }} tasks.</span>
        <span>{{ doneTasksCount }} done.</span>
      </p>
    </div>

    <TaskInput @add="addTaskHandler" @delete="removeAllTasksHandler" />
    <TasksList :tasks="tasks" @check="markTaskAsHandler" @remove="removeTaskHandler" />
  </div>
</template>
