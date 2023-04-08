import { defineStore } from 'pinia';
import { State, Task } from '@/domain/interfaces';

export const useStore = defineStore('store', {
  state: (): State => ({
    // Equivalent to data in a Vue component.

    task: null,
    tasks: [],
    loading: true
  }),

  getters: {
    // Write the getters here.

    tasksCount(): number {
      return this.tasks.length;
    },

    doneTasksCount(): number {
      return this.tasks.filter((t) => t.done).length;
    }
  },

  actions: {
    // Write the actions and mutations here.

    updateLoadingState(loading: boolean) {
      this.loading = loading;
    },

    addTask(task: Task) {
      if (!task.text) return;
      this.tasks.push(task);
    },

    removeTask(task: Task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },

    markTaskAs(task: Task, event: MouseEvent): void {
      const checked = (event.target as HTMLInputElement).checked;
      const index = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks[index].done = checked;
    }
  }
});
