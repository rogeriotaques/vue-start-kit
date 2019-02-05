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

const createTask = (data: Task): Task => {
  const task: Task = {
    id: 0,
    text: '',
    complete: false,
    editing: false
  };

  return Object.assign(task, data);
};

export const mutations = {
  loadData(state: State, payload: { tasks: Array<Task> | [] }) {
    if (payload.tasks.length) {
      payload.tasks.forEach((task) => {
        state.tasks.push(<never>createTask(task));
      });
    }

    state.isLoadingData = false;
  }, // loadData

  removeTasks(state: State, payload?: { id: number }) {
    if (payload && payload.id) {
      state.tasks = state.tasks.filter((task: Task) => task.id !== payload.id);
    } else {
      state.tasks = [];
    }
  } // removeTasks

  // editTask(state: State, payload: { task: Task; data: Task }) {
  //   let task: Task | undefined = state.tasks.find(
  //     (task: Task) => task.id === payload.task.id
  //   );
  //   if (task) {
  //     task = Object.assign(payload.task, payload.data);
  //   }
  // },
  // addTask(state: State, data: Task) {
  //   state.tasks.push(createTask(state, data));
  // }
};
