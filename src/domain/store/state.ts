/**
 * Vue Start Kit
 *
 * This file handles the APP's initial state.
 *
 * State is the data stored in your application. You components can “receive”
 * this data and when it changes your component will update itself. This is
 * the “single source of truth” in your application.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import { State } from '~/domain/interfaces';

export const state: State = {
  isLoadingData: true,
  tasks: []
};
