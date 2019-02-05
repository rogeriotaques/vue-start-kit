import { connect } from 'tls';

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
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

import { Task } from '~/domain/interfaces';
import { getTasks } from '~/domain/network';

export const actions = {
  // loadDataFromAPI: async (context: any) => {
  //   const tasks = await getTasks();
  //   context.commit('loadData', tasks);
  // },
  // updateTask(context: any, payload: { task: Task; data: Task }) {
  //   if (payload.task.text && payload.task.text.length > 0) {
  //     context.commit('editTask', {
  //       task: payload.task,
  //       data: payload.data
  //     });
  //   } else {
  //     context.commit('removeTasks', payload.task.id);
  //   }
  // },
  // removeSingleTask(context: any, id: number) {
  //   context.commit('removeTasks', id);
  // },
  // removeAllTasks(context: any) {
  //   context.commit('removeTasks');
  // },
  // addNewTask(context: any, text: string) {
  //   const newTask = { text };
  //   context.commit('addTask', newTask);
  // }
};
