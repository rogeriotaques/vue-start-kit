/**
 * Vue Start Kit
 *
 * Define here the custom interfaces (or type annotations) for all
 * the type we may use in the APP. Eventually, this will scale and
 * split this file into others will be inevitable.
 *
 * @author Rogerio Taques
 * @license MIT
 */

// A single task interface
export interface Task {
  id?: number;
  text?: string;
  complete?: boolean;
  editing?: boolean;
}

// The APP state interface
export interface State {
  isLoadingData: boolean;
  tasks: Array<Task> | [];
}
