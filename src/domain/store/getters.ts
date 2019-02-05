/**
 * Vue Start Kit
 *
 * This is used to define all mutations for the APP's store.
 *
 * Getters compute properties based on the store state. You can use these
 * in your actions or directly in your component. This is useful if several
 * components need to calculate the same thing based on the store data, you
 * can do it in one place instead of having to do it separately for each
 * component.
 *
 * @author Rogerio Taques (hello@abtz.co)
 * @license MIT
 */

import { State, Task } from '~/domain/interfaces';

export const getters = {
  // isDataLoaded(state: State): boolean {
  //   return !state.isLoadingFromAPI;
  // },
  // countTotalTasks(state: State): number {
  //   return state.tasks.length;
  // },
  // getTasks(state: State): Array<Task> {
  //   return state.tasks;
  // }
};
