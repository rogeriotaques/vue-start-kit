<template lang="pug">
  span(:class="`badge ${this.color}`")
    slot Bagde
</template>

<script lang="ts">
export default {
  name: 'SBadge',

  props: {
    color: {
      validator: (val) => val === null || ['default', 'info', 'success', 'warning', 'danger'].includes(val),
      default: 'default'
    }
  }
};
</script>
