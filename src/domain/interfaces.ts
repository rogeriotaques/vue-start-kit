/**
 * Vue Start Kit
 *
 * Define here all the interfaces (or type annotations) for all
 * the type we may use in the APP. Eventually, this will scale and
 * split this file into others will be inevitable.
 *
 * @author Rogerio Taques
 * @license MIT
 */

export type ID = number | string;

export interface Person {
  name: {
    title: string;
    first: string;
    last: string;
  };
}

// A single task interface
export interface Task {
  id?: ID;
  text?: string;
  complete?: boolean;
  editing?: boolean;
}

// The APP state interface
export interface State {
  isLoadingData: boolean;
  tasks: Task[] | [];
}
