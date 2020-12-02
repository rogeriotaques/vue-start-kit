<template lang="pug">
  span(v-bind:class="this.type").badge
    slot Bagde
</template>

<script lang="ts">
export default {
  name: 'SeedBadge',

  props: {
    type: {
      type: String as () => 'default' | 'info' | 'success' | 'warning' | 'danger' | null,
      required: false
    }
  }
};
</script>
