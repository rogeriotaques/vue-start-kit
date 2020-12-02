<template lang="pug">
  button(v-on:click="click", v-bind:class="getClass")
    slot Seed Button
</template>

<script lang="ts">
export default {
  name: 'SeedButton',

  props: {
    click: {
      type: Function,
      required: true
    },
    type: {
      type: String,
      required: false
    },
    size: {
      type: String as () => 'small' | 'medium' | 'big' | null,
      required: false
    }
  },

  computed: {
    getClass() {
      const classes: any = [this.type, this.size];
      return `btn ${classes.join(' ')}`;
    }
  }
};
</script>
