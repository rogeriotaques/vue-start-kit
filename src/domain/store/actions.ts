/**
 * Vue Start Kit
 *
 * This is used to define all actions from the APP's store.
 *
 * An action contains business logic and it does not care about updating
 * the state directly. The reason is that actions are asynchronous (your
 * code can continue to run even if the action is not finished yet), this
 * is useful if you need to wait to receive data from an API for example.
 * An action will dispatch a mutation, which will directly update the
 * state.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import { Task } from '~/domain/interfaces';
import { getTasks } from '~/domain/network';

export const actions = {
  /**
   * Gather tasks from API and commits a mutation.
   * @param context
   * @returns Promise
   */
  async getFromAPI(context: any): Promise<void> {
    const tasks = await getTasks();
    context.commit('LOAD', { tasks });
  }, // getFromAPI

  /**
   * Commits the mutation to remove a single task from state
   * @param context
   * @param payload
   * @returns void
   */
  removeSingleTask(context: any, payload: { id: number }): void {
    context.commit('REMOVE', payload);
  }, // removeSingleTask

  /**
   * Commits a mutation to remove all the tasks from the state
   * @param context
   * @returns void
   */
  removeAllTasks(context: any): void {
    context.commit('REMOVE');
  }, // removeAllTasks

  /**
   * Commits a mutation to update the given task in the state
   * @param context
   * @param payload
   * @returns void
   */
  updateTask(context: any, payload: { task: Task; data: Task }): void {
    if (payload.task.text && payload.task.text.length === 0) {
      // Removes tasks with empty text
      context.commit('REMOVE', payload.task.id);
    } else {
      // Updates task data
      context.commit('UPDATE', {
        task: payload.task,
        data: payload.data
      });
    }
  }, // updateTask

  /**
   * Commits a mutation to add a new task in the state
   * @param context
   * @param text
   * @returns void
   */
  addNewTask(context: any, text: string): void {
    const newTask = { text };
    context.commit('ADD', newTask);
  } // addNewTask
};
