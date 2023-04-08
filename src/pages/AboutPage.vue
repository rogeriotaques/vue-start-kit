<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutPage',
  data: (): any => ({})
});
</script>

<template>
  <div>
    <h2>About</h2>

    <p>By <a href="https://twitter.com/rogeriotaques" rel="noopener noreferrer" target="_blank">Rogerio Taques</a>.</p>
    <p>Use this code as a boilerplate for new Vue 2 projects.</p>
    <p>This is a sample ToDo app built with:</p>

    <ul>
      <li><a href="https://vuejs.org/">Vue 2</a></li>
      <li><a href="https://router.vuejs.org/">Vue Router</a></li>
      <li><a href="https://pinia.esm.dev/">Pinia</a></li>
      <li><a href="https://axios-http.com/">Axios</a></li>
      <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
      <li><a href="https://sass-lang.com/">SCSS</a></li>
      <li><a href="https://editorconfig.org/">EditorConfig</a></li>
      <li><a href="https://prettier.io/">Prettier</a></li>
      <li><a href="https://webpack.js.org/">Webpack</a></li>
      <li><a href="https://jestjs.io/">Jest</a></li>
    </ul>
  </div>
</template>
