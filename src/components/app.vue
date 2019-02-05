// Vue Start Kit
// This is the main component from our sample app.
// @author Rogerio Taques (hello@abtz.co)
// @license MIT

<template lang="pug">
  .container
    h5.align-center.m-0 - A ToDo (Sample) App with VueJS -
    p.align-center by Abtz Labs | Rogerio Taques

    //- UNCOMMENT THE NEXT LINES IF YOU WANNA ADD
    //- THE LINKS CONNECTED TO THE VUE-ROUTER
    //-
    //- p.align-center
    //-   router-link(to="/").btn.link Tasks
    //-   span |
    //-   router-link(to="/about").btn.link About

    router-view

    p.align-center
      span Sample data is fetched from &nbsp;
      a(href="https://randomuser.me", target="_blank") https://randomuser.me
</template>

<script lang="ts">
export default {
  name: "ToDo",

  mounted() {
    // When this component is mounted, calls the API
    this.$store.dispatch("loadDataFromAPI");
  }
};
</script>


