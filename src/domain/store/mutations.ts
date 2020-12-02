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
 * @author Rogerio Taques
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
  /**
   * Updates the tasks in the state with a list of tasks gathered from network.
   * @see ~/domain/network.js
   * @param state
   * @param payload
   */
  LOAD(state: State, payload: { tasks: Array<Task> | [] }) {
    if (payload.tasks.length) {
      payload.tasks.forEach((task) => {
        state.tasks.push(<never>createTask(task));
      });
    }

    state.isLoadingData = false;
  }, // LOAD

  /**
   * Remove existing tasks from the state.
   * If ID is not given in the payload, removes all.
   * @param state
   * @param payload
   */
  REMOVE(state: State, payload?: { id: number }) {
    if (payload && payload.id) {
      state.tasks = state.tasks.filter((task: Task) => task.id !== payload.id);
    } else {
      state.tasks = [];
    }
  }, // REMOVE

  /**
   * Updates any existing task in the state
   * @param state
   * @param payload
   */
  UPDATE(state: State, payload: { task: Task; data: Task }) {
    let task: Task | undefined = state.tasks.find((task: Task) => task.id === payload.task.id);

    if (task) {
      task = Object.assign(payload.task, payload.data);
    }
  }, // UPDATE

  /**
   * Adds a new task to the tasks list in the state
   * @param state
   * @param data
   */
  ADD(state: State, data: Task) {
    const newTask: Task = {
      ...data,
      id: state.tasks.length ? state.tasks.length + 1 : 1
    };

    state.tasks.push(<never>createTask(newTask));
  } // ADD
};
