/**
 * Vue Start Kit
 *
 * Define all "getters" for the app store.
 *
 * Getters compute properties based on the store state. You can use these
 * in your actions or directly in your component. This is useful if several
 * components need to calculate the same thing based on the store data, you
 * can do it in one place instead of having to do it separately for each
 * component.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import { State } from '~/domain/interfaces';

export const getters = {
  /**
   * Indicates whether the APP is loading data from the API.
   * @param state
   * @return boolean
   */
  isDataLoaded(state: State): boolean {
    return !state.isLoadingData;
  },

  /**
   * Simply counts existing tasks in the state.
   * @param state
   * @return number
   */
  countTotalTasks(state: State): number {
    return state.tasks.length;
  }
};
