<!--
Vue Start Kit
This is the main component from our sample app.

@author Rogerio Taques
@license MIT
-->

<template lang="pug">
  .sample-app
    h1.sample-app__title - ToDo (Sample) App with Vue Start Kit -
    p.sample-app__subtitle by Rogerio Taques

    p.sample-app__text.
      You can update this app by changing the
      <code>src/components/app.vue</code> file.

    //- UNCOMMENT THE NEXT LINES IF YOU WANNA ADD
    //- THE LINKS CONNECTED TO THE VUE-ROUTER
    //-
    //- p.sample-app__links
    //-   router-link(to="/").sample-app__links__link Tasks
    //-   span |
    //-   router-link(to="/about").sample-app__links__link About

    router-view

    footer.sample-app__footer
      span.sample-app__footer__note The sample data is fetched from &nbsp;
      a(href="https://randomuser.me", target="_blank") https://randomuser.me
</template>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<style lang="scss" scoped>
@import '~seed-vue/src/styles/colors';

.sample-app {
  max-width: 800px;
  margin: 0 auto;

  &__text,
  &__subtitle,
  &__title {
    margin: 0;
    text-align: center;
    line-height: 1.5;
  }

  &__text code {
    background-color: $c-secondary;
    padding: 4px;
    border-radius: 4px;
    color: $c-white;
  }
}
</style>
