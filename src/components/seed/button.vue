<template lang="pug" >
  button(v-on:click="click").btn
    slot Seed Button
</template>

<script lang="ts" >
export default {
  name: "SeedButton",

  props: {
    click: {
      type: Function,
      required: true
    }
  }
};
</script>
