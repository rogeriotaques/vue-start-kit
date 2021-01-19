/**
 * Vue Start Kit
 *
 * Defines the app's initial state.
 *
 * State is the data stored in your application. Components will “receive”
 * this data-structure and when it changes they will update themselves. This file
 * should be the “single source of truth” in an application.
 *
 * @author Rogerio Taques
 * @license MIT
 */

import { State } from '~/domain/interfaces';

export const state: State = {
  isLoadingData: true,
  tasks: []
};
