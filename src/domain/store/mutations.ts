import { stat } from 'fs';

/**
 * Vue Start Kit
 *
 * This is used to define all mutations for the APP's store.
 *
 * To update a state you will need to commit a mutation. A mutation does not
 * care about business logic, it’s only purpose is updating the state. A
 * mutation is synchronous (your code has to wait until the mutation is done).
 * Mutations should be the only way used to update your state, to keep your
 * state management predictable.
 *
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

import { State, Task } from '~/domain/interfaces';

const createTask = (state: State, data: Task): Task => {
  const { tasks } = state;

  const nextID: number =
    tasks.length > 0 ? (tasks[tasks.length - 1].id || 0) + 1 : 1;

  const task: Task = {
    id: nextID,
    text: '',
    complete: false,
    editing: false
  };

  return Object.assign(task, data);
};

export const mutations = {
  loadData(state: State, tasks: Array<string>) {
    if (tasks.length) {
      tasks.forEach((text) => {
        state.tasks.push(createTask(state, { text }));
      });
    }

    state.isLoadingFromAPI = false;
  },

  editTask(state: State, payload: { task: Task; data: Task }) {
    let task: Task | undefined = state.tasks.find(
      (task: Task) => task.id === payload.task.id
    );

    if (task) {
      task = Object.assign(payload.task, payload.data);
    }
  },

  removeTasks(state: State, id?: number) {
    if (id) {
      state.tasks = state.tasks.filter((task: Task) => task.id !== id);
    } else {
      state.tasks = [];
    }
  },

  addTask(state: State, data: Task) {
    state.tasks.push(createTask(state, data));
  }
};
