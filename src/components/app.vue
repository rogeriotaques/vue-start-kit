<script lang="ts">
export default {
  name: 'App'
};
</script>

<template lang="pug">
  .app
    h1 Vue Start Kit!
    p by Rogerio Taques
    p This app uses Webpack + Vue + Pug + Scss + TypeScript (+ <a href="https://rogeriotaques.github.io/seed-vue/" target="_blank">SeedVue</a>).
    p Clone it on <a href="https://github.com/rogeriotaques/vue-start-kit" target="_blank">Github</a>.

    router-view
</template>

<style lang="scss" scoped>
.app {
  width: 90%;
  max-width: 640px;
  margin: 16px auto;

  h1,
  h1 + p {
    margin: 0;
  }

  h1,
  p {
    text-align: center;
  }
}
</style>
