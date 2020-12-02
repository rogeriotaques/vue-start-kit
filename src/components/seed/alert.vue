<template lang="pug">
  div(v-bind:class="this.type").alert
    slot This is an alert
</template>

<script lang="ts">
export default {
  name: 'SeedAlert',

  props: {
    type: {
      type: String as () => 'default' | 'info' | 'success' | 'warning' | 'danger' | null,
      required: false
    }
  }
};
</script>
