/**
 * Vue Start Kit
 *
 * Tells Typescript (on Visual Studio Code) about Vue
 *
 * @author Rogerio Taques
 * @license MIT
 */

declare const window: any;

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
