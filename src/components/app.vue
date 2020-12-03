<!--
Vue Start Kit
This is the main component from our sample app.

@author Rogerio Taques
@license MIT
-->

<template lang="pug">
  .container
    h5.align-center.m-0 - ToDo (Sample) App with Vue Start Kit -
    p.align-center by Rogerio Taques

    p.align-center.
      You can update this app by changing the
      <code>src/components/app.vue</code> file.

    //- UNCOMMENT THE NEXT LINES IF YOU WANNA ADD
    //- THE LINKS CONNECTED TO THE VUE-ROUTER
    //-
    //- p.align-center
    //-   router-link(to="/").btn.link Tasks
    //-   span |
    //-   router-link(to="/about").btn.link About

    router-view

    p.align-center.mt-20
      span The sample data is fetched from &nbsp;
      a(href="https://randomuser.me", target="_blank") https://randomuser.me
</template>

<script lang="ts">
export default {
  name: 'App',

  mounted() {
    // When this component is mounted, dispatch an action that calls the api.
    this.$store.dispatch('getFromAPI');
  }
};
</script>
